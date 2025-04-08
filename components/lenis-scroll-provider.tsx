"use client";

import { type ReactNode, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "@studio-freight/lenis";

interface LenisScrollProviderProps {
  children: ReactNode;
}

export function LenisScrollProvider({ children }: LenisScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // Handle animations on scroll
    const handleScroll = (e: any) => {
      const animatedElements = document.querySelectorAll(".animate-on-scroll");
      animatedElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8;

        if (isVisible) {
          element.classList.add("is-visible");
        }
      });
    };

    // Store the lenis instance
    lenisRef.current = lenis;

    // Set up the RAF loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Start the animation loop
    requestAnimationFrame(raf);

    // Add scroll event listener for animations
    window.addEventListener("scroll", handleScroll);

    // Initial check for elements in view
    setTimeout(handleScroll, 200);

    return () => {
      // Clean up
      lenis.destroy();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  // Scroll to the top when the route changes
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return <>{children}</>;
}
