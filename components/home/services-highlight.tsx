"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Brush, TrendingUp, Globe, Printer, Users } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: <Brush className="h-10 w-10 text-primary" />,
    title: "Creative Branding",
    description: "We develop key messages & define a brand's purpose, values, and target audience.",
    number: "01",
    href: "/services#creative-branding",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: "Strategic Advertising",
    description:
      "We provide advert design, media planning, and placement to maximize the impact of advertising efforts.",
    number: "02",
    href: "/services#strategic-advertising",
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Digital Transformation",
    description:
      "We develop marketing strategies and campaigns to promote products or services across different channels.",
    number: "03",
    href: "/services#digital-transformation",
  },
  {
    icon: <Printer className="h-10 w-10 text-primary" />,
    title: "Quality Printing",
    description:
      "We offer high-quality printing options to ensure that the printed materials effectively represent the client's brand.",
    number: "04",
    href: "/services#quality-printing",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "HR Consulting",
    description:
      "We offer customizable HR solutions to support businesses at every stage, from startups to established enterprises.",
    number: "05",
    href: "/services#consulting",
  },
]

export default function ServicesHighlight() {
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
            <span className="text-secondary">Our Offerings:</span> Making Your Brand Exceptional
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Elegance Inspired Limited offers a range of services to help you build a strong and sophisticated brand
            presence.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-card hover:shadow-lg transition-shadow duration-300 border border-border/50 overflow-hidden group">
                <CardHeader className="relative">
                  <span className="absolute top-4 right-4 text-4xl font-bold text-muted-foreground/10 group-hover:text-secondary/10 transition-colors duration-300">
                    {service.number}
                  </span>
                  <div className="mb-2">{service.icon}</div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="p-0 text-primary hover:text-primary/80">
                    <Link href={service.href}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
