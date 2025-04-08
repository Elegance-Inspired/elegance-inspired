"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const portfolioItems = [
  {
    title: "Corporate Branding",
    image: "/placeholder.svg?height=400&width=600",
    category: "Branding",
  },
  {
    title: "Event Branding",
    image: "/placeholder.svg?height=400&width=600",
    category: "Event",
  },
  {
    title: "Product Packaging",
    image: "/placeholder.svg?height=400&width=600",
    category: "Packaging",
  },
  {
    title: "Brand Style Guide",
    image: "/placeholder.svg?height=400&width=600",
    category: "Style Guide",
  },
]

export default function PortfolioHighlight() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-10 lg:px-12 xl:px-14">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Portfolio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Explore our recent projects and see how we've helped businesses transform their brand identity.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-sm text-[#FF6600] font-medium mb-2">{item.category}</span>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <Link href="/portfolio" className="text-white/80 hover:text-white text-sm underline underline-offset-2">
                  View Project
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full">
            <Link href="/portfolio">View Full Portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
