"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  InstagramIcon as TiktokIcon,
} from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-muted-foreground mb-6">
          We have helped numerous businesses across various industries establish a strong brand presence, amplify their
          message, and drive meaningful engagement.
        </p>
        <p className="text-muted-foreground">
          Join us on this journey of creativity and success, and let's inspire the world together.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Call Us</h3>
                  <Link
                    href="tel:+2348183135120"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +234 8183 135 120
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email Us</h3>
                  <Link
                    href="mailto:hello@eleganceinspired.org"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    hello@eleganceinspired.org
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Our Location</h3>
                  <p className="text-muted-foreground">Abuja, Nigeria</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Business Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday: 9am - 5pm</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
        <div className="flex space-x-4">
          <Link
            href="https://www.instagram.com/eleganceinspiredltd"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5 text-primary" />
          </Link>
          <Link
            href="https://www.facebook.com/temmyjaycob"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5 text-primary" />
          </Link>
          <Link
            href="https://x.com/eleganceinspltd"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5 text-primary" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/elegance-branding/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-primary" />
          </Link>
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
            aria-label="TikTok"
          >
            <TiktokIcon className="h-5 w-5 text-primary" />
          </Link>
          <Link
            href="https://wa.me/2348183135120"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
            aria-label="WhatsApp"
          >
            <Phone className="h-5 w-5 text-primary" />
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
