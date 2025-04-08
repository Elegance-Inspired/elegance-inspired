"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

const brandingPackages = [
  {
    title: "Essential Branding",
    description: "Perfect for businesses looking to establish or refresh their brand identity.",
    features: [
      "Brand strategy Development",
      "Brand Naming (if needed)",
      "Basic brand messaging framework",
      "Brand Style Guide (logo, color palette, typography, logo usage)",
    ],
    cta: "Get Started",
    href: "/contact",
  },
  {
    title: "Elevated Branding",
    description: "Ideal for businesses ready to take their brand to the next level.",
    features: [
      "All inclusions from Essential Branding",
      "Brand Messaging & Positioning Strategy",
      "Brand Voice & Tone Development",
      "Mood Board & Brand Story",
    ],
    cta: "Get Started",
    href: "/contact",
    featured: true,
  },
  {
    title: "Exquisite Branding",
    description: "For businesses seeking a comprehensive brand transformation.",
    features: ["All inclusions from Elevated Branding", "Competitive Brand Analysis", "Brand Audit"],
    cta: "Get Started",
    href: "/contact",
  },
]

export default function BrandingPackages() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="branding" className="py-16 md:py-24 bg-muted scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Branding Packages
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Establish a strong brand identity that resonates with your audience and stands out in the marketplace.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {brandingPackages.map((pkg, index) => (
            <motion.div key={index} variants={itemVariants} className="flex">
              <Card
                className={`flex flex-col h-full w-full ${pkg.featured ? "border-primary shadow-lg relative" : "border-border/50"}`}
              >
                {pkg.featured && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                    Popular Choice
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{pkg.title}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className={`w-full ${pkg.featured ? "bg-primary hover:bg-primary/90" : ""}`}>
                    <Link href={pkg.href}>{pkg.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
