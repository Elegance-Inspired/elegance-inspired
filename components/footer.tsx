import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter, InstagramIcon as TiktokIcon } from "lucide-react"
import NewsletterForm from "@/components/newsletter-form"

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white">
      <div className="container mx-auto px-4 py-12 sm:px-10 lg:px-12 xl:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/Elegance logo.png"
                alt="Elegance Inspired Limited"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-400 max-w-xs">
              A leading corporate branding agency dedicated to helping businesses achieve their full potential in the
              ever-evolving marketplace.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/eleganceinspiredltd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-white/70 hover:text-[#FF6600] transition-colors" />
              </Link>
              <Link
                href="https://www.facebook.com/temmyjaycob"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-white/70 hover:text-[#FF6600] transition-colors" />
              </Link>
              <Link href="https://x.com/eleganceinspltd" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-white/70 hover:text-[#FF6600] transition-colors" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/elegance-branding/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-white/70 hover:text-[#FF6600] transition-colors" />
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <TiktokIcon className="h-5 w-5 text-white/70 hover:text-[#FF6600] transition-colors" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-axiforma">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/70 hover:text-[#FF6600] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-[#FF6600] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-white/70 hover:text-[#FF6600] transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-[#FF6600] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-[#FF6600] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-axiforma">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#creative-branding"
                  className="text-white/70 hover:text-[#FF6600] transition-colors"
                >
                  Creative Branding
                </Link>
              </li>
              <li>
                <Link
                  href="/services#strategic-advertising"
                  className="text-white/70 hover:text-[#FF6600] transition-colors"
                >
                  Strategic Advertising
                </Link>
              </li>
              <li>
                <Link
                  href="/services#digital-transformation"
                  className="text-white/70 hover:text-[#FF6600] transition-colors"
                >
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#quality-printing"
                  className="text-white/70 hover:text-[#FF6600] transition-colors"
                >
                  Quality Printing
                </Link>
              </li>
              <li>
                <Link href="/services#consulting" className="text-white/70 hover:text-[#FF6600] transition-colors">
                  HR Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-axiforma">Newsletter</h3>
            <p className="text-white/70 mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} Elegance Inspired Limited. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-white/70 hover:text-[#FF6600] text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-white/70 hover:text-[#FF6600] text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
