"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data";

export default function NavbarClient() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const searchParams = useSearchParams();
  const { theme, setTheme } = useTheme();

  // Set mounted to true on client
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY) {
        setScrollingUp(true);
      } else if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setScrollingUp(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Render a placeholder during SSR
  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="h-10 w-40"></div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, i) => (
              <div key={i} className="h-4 w-16"></div>
            ))}
            <div className="h-10 w-24 rounded-full"></div>
            <div className="h-10 w-10 rounded-full"></div>
          </nav>
          <div className="flex items-center md:hidden">
            <div className="h-10 w-10 mr-2"></div>
            <div className="h-10 w-10"></div>
          </div>
        </div>
      </header>
    );
  }
  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "backdrop-blur-md bg-background/80" : "bg-transparent"
      )}
      initial={{ y: 0 }}
      animate={{ y: scrollingUp || !scrolled ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="relative z-10">
          <div className="flex items-center">
            <Image
              src="/Elegance logo.png"
              alt="Elegance Inspired Limited"
              width={160}
              height={40}
              className="h-10 w-auto"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-secondary",
                  pathname === link.path ? "text-secondary" : "text-foreground"
                )}
              >
                {link.name}
              </Link>

              {link.dropdown && (
                <div className="absolute left-0 mt-2 w-48 bg-background rounded-md shadow-lg overflow-hidden z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                  <div className="py-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.path}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                        onClick={closeMenu}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-white rounded-full"
            navigate={true}
          >
            <Link href="/contact">Let&apos;s Talk</Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <span className="sr-only">Toggle theme</span>
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="mr-2"
          >
            <span className="sr-only">Toggle theme</span>
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-4">
              {navLinks.map((link) => (
                <div key={link.name} className="py-2">
                  <Link
                    href={link.path}
                    className={cn(
                      "block text-lg font-medium py-2",
                      pathname === link.path
                        ? "text-primary"
                        : "text-foreground"
                    )}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>

                  {link.dropdown && (
                    <div className="pl-4 mt-1 border-l-2 border-muted">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.path}
                          className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={closeMenu}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="mt-4 pt-4 border-t border-border">
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-white rounded-full"
                  navigate={true}
                >
                  <Link href="/contact">Let&apos;s Talk</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
