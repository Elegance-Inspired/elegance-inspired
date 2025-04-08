"use client"

import { motion } from "framer-motion"

export default function ServicesIntro() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-lg md:text-xl text-muted-foreground">
            Elegance Inspired Limited offers a range of services to help you build a strong and sophisticated brand
            presence. With a deep understanding of the ever-changing business landscape, we provide comprehensive
            solutions to empower our clients and help them succeed in the marketplace.
          </p>
          <p className="mt-4 text-lg md:text-xl text-secondary">
            We offer full Agency services to; Corporate Organizations, SMEs, Government Agencies & Corporate Events.
          </p>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            Join us on this journey of creativity and success, and let's inspire the world together.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
