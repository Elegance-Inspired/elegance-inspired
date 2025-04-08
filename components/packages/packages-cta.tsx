"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const additionalNotes = [
  "We offer a FREE consultation to discuss your project and recommend the best package for you.",
  "All prices are starting points and may vary depending on project scope and complexity.",
  "Content creation (e.g., copy writing, photography, videography) will be quoted separately.",
  "Ongoing marketing campaigns will be quoted based on desired scope duration.",
  "All packages are customizable – add-ons and adjustments are available.",
  "We offer bulk discounts for ongoing marketing and advertising campaigns.",
]

export default function PackagesCTA() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Additional Notes</h3>
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {additionalNotes.map((note, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join us on this journey of creativity and success, and let's get started on transforming your business
              into an influential brand!
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
