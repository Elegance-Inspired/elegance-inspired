"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Users, BarChart } from "lucide-react"

const packageFeatures = [
  {
    title: "Free Personalized Consultation",
    description: "Discuss your specific goals and needs with our experts.",
    icon: <MessageSquare className="h-10 w-10 text-primary" />,
  },
  {
    title: "Dedicated Project Manager",
    description: "A single point of contact throughout your project.",
    icon: <Users className="h-10 w-10 text-primary" />,
  },
  {
    title: "Progress Reports",
    description: "Regular updates on your project's progress.",
    icon: <BarChart className="h-10 w-10 text-primary" />,
  },
]

export default function PackagesIntro() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-lg md:text-xl text-muted-foreground">
            Elegance Inspired Limited offers a range of services to help you build a strong and sophisticated brand
            presence thereby elevating your brand. We've designed these packages to cater to different needs and
            budgets.
          </p>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            We offer full Agency services to; Corporate Organizations, SMEs, Government Agencies & Corporate Events.
          </p>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            All agency packages can be on a contract based or a one-time purchase.
          </p>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-8 text-center"
        >
          All packages include:
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {packageFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 bg-primary/10 p-4 rounded-full">{feature.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
