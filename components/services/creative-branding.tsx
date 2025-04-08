"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brush, MessageSquare, Palette, Zap, Search, Target } from "lucide-react"

const brandingServices = [
  {
    title: "Brand Strategy",
    description: "We develop key messages & define a brand's purpose, values, and target audience.",
    icon: <MessageSquare className="h-10 w-10 text-primary" />,
  },
  {
    title: "Brand Identity",
    description: "We create a visual identity, including logo design, color palette, typography, and imagery.",
    icon: <Palette className="h-10 w-10 text-primary" />,
  },
  {
    title: "Brand Guidelines",
    description: "We create a style guide for consistent brand application.",
    icon: <Brush className="h-10 w-10 text-primary" />,
  },
  {
    title: "Brand Activation",
    description: "We implement branding across all marketing channels and touchpoints.",
    icon: <Zap className="h-10 w-10 text-primary" />,
  },
  {
    title: "Brand Audit",
    description: "We analyze a brand across all marketing channels and touchpoints.",
    icon: <Search className="h-10 w-10 text-primary" />,
  },
  {
    title: "Strategic Positioning",
    description: "We place a new/old brand in the marketplace by creating a unique and compelling brand image.",
    icon: <Target className="h-10 w-10 text-primary" />,
  },
]

export default function CreativeBranding() {
  return (
    <section id="creative-branding" className="py-16 md:py-24 bg-muted scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Creative Branding</h2>
            <div className="space-y-4">
              <p>
                By working closely with our clients, we take the time to understand their unique values, goals, and
                target audience, enabling us to develop tailored branding solutions that resonate and make a lasting
                impact.
              </p>
              <p>
                We assist clients in developing and designing their brand identity, research, strategy and guidelines,
                therefore, establishing a unique brand voice.
              </p>
              <p>
                Our approach to branding combines creativity, strategic thinking, and meticulous attention to detail.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Creative Branding"
              width={600}
              height={500}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>

        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-8 text-center"
          >
            We offer the following Branding solutions:
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandingServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:shadow-md transition-shadow duration-300">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
