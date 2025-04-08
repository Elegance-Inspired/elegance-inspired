"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

const packages = [
  {
    title: "Branding Package",
    description: "Perfect for businesses looking to establish or refresh their brand identity.",
    features: [
      "Brand strategy Development",
      "Brand Naming (if needed)",
      "Basic brand messaging framework",
      "Brand Style Guide",
    ],
    cta: "Get Started",
    href: "/packages#branding",
  },
  {
    title: "Marketing Package",
    description: "Ideal for businesses ready to promote their brand and reach their target audience.",
    features: [
      "Social Media Profile Set-up",
      "Content Calendar Development",
      "Social Media Management",
      "Detailed Targeting",
    ],
    cta: "Get Started",
    href: "/packages#marketing",
    featured: true,
  },
  {
    title: "Advertising Package",
    description: "For businesses looking to maximize their visibility and reach potential customers.",
    features: ["Ad creative design", "Targeted advertising strategy", "Campaign management", "Performance reporting"],
    cta: "Get Started",
    href: "/packages#advertising",
  },
]

export default function PackagesHighlight() {
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
            <span className="text-secondary">Elegance Packages:</span> Choose Your Perfect Solution
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            We've designed these packages to cater to different needs and budgets. Choose the package that best suits
            your needs, or contact us for a custom quote.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {packages.map((pkg, index) => (
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

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full">
            <Link href="/packages">View All Packages</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
