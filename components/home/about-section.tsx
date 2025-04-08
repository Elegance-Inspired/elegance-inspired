"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye, Target } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-[#003EAD] text-white">
      <div className="container mx-auto px-4 sm:px-10 lg:px-12 xl:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="About Elegance Inspired"
              width={600}
              height={600}
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 !font-lato">
              About Us:{" "}
              <span className="text-[#FF6600]">
                Your Reliable Branding Partner
              </span>
            </h2>

            <p className="mb-6">
              Elegance Inspired is a leading corporate branding agency dedicated
              to helping businesses achieve their full potential in the
              ever-evolving marketplace. We are passionate about helping
              businesses elevate their brands, connect with their customers, and
              achieve their desired outcomes.
            </p>

            <p className="mb-8">
              The Elegance Inspired Limited was established in February 2021 and
              is incorporated under the companies and Allied Matters Decree of
              1990 and issued the registration number 1753361.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-1">3+</div>
                <div className="text-sm">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-1">100+</div>
                <div className="text-sm">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-1">5+</div>
                <div className="text-sm">Industries Served</div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="bg-white/10 p-3 rounded-full">
                  <Eye className="h-5 w-5 text-[#FF6600]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Our Vision</h3>
                  <p className="text-white/80">
                    To craft timeless brands that inspires success & enabling
                    businesses thrive in the marketplace by influencing a long
                    lasting perception.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="bg-white/10 p-3 rounded-full">
                  <Target className="h-5 w-5 text-[#FF6600]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Our Mission</h3>
                  <p className="text-white/80">
                    To elevate brands to new heights and drive sustainable
                    results thereby empowering our clients with remarkable
                    success.
                  </p>
                </div>
              </motion.div>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-[#FF6600] hover:bg-[#FF6600]/90 text-white rounded-full"
            >
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
