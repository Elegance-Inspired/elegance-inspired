"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const clients = [
  "/placeholder-logo.svg",
  "/placeholder-logo.svg",
  "/placeholder-logo.svg",
  "/placeholder-logo.svg",
  "/placeholder-logo.svg",
  "/placeholder-logo.svg",
  "/placeholder-logo.svg",
  "/placeholder-logo.svg",
  "/placeholder-logo.svg",
  "/placeholder-logo.svg",
]

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Tech Innovations Inc.",
    image: "/placeholder.svg?height=100&width=100",
    text: "Elegance Inspired transformed our brand identity completely. Their strategic approach and creative solutions helped us stand out in a competitive market.",
  },
  {
    name: "Michael Chen",
    company: "Global Solutions Ltd.",
    image: "/placeholder.svg?height=100&width=100",
    text: "Working with the Elegance team was a game-changer for our business. Their attention to detail and understanding of our vision exceeded our expectations.",
  },
  {
    name: "Jessica Williams",
    company: "Eco Friendly Products",
    image: "/placeholder.svg?height=100&width=100",
    text: "The branding package we received was comprehensive and perfectly aligned with our company values. Highly recommend their services to any business looking to elevate their brand.",
  },
]

export default function ClientsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-10 lg:px-12 xl:px-14">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Clients & Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            At Elegance, our clients' success is our top priority. We work closely with our clients to develop tailored
            branding solutions that resonate and make a lasting impact.
          </motion.p>
        </div>

        {/* Client Logos */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center"
          >
            {clients.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex justify-center"
              >
                <Image
                  src={logo || "/placeholder.svg"}
                  alt={`Client ${index + 1}`}
                  width={140}
                  height={70}
                  className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="mb-6 italic text-muted-foreground">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
