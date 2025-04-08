"use client"

import { motion } from "framer-motion"
import { Eye, Target, Flag, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function OurStory() {
  const values = [
    {
      title: "Creativity",
      description: "We believe in pushing boundaries and developing innovative solutions that go beyond the expected.",
      icon: <Eye className="h-6 w-6 text-[#FF6600]" />,
    },
    {
      title: "Collaboration",
      description:
        "We work closely with our clients, building strong relationships and understanding their unique needs.",
      icon: <Target className="h-6 w-6 text-[#FF6600]" />,
    },
    {
      title: "Integrity",
      description:
        "We hold ourselves to the highest ethical standards, delivering on our promises with honesty and transparency.",
      icon: <Flag className="h-6 w-6 text-[#FF6600]" />,
    },
    {
      title: "Excellence",
      description: "We settle for nothing less than exceptional results, exceeding your expectations in every step.",
      icon: <Heart className="h-6 w-6 text-[#FF6600]" />,
    },
    {
      title: "Results",
      description:
        "We're passionate about measurable outcomes, ensuring your brand translates into tangible growth and success.",
      icon: <Target className="h-6 w-6 text-[#FF6600]" />,
    },
  ]

  return (
    <section id="our-story" className="py-16 md:py-24 bg-muted scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-10 lg:px-12 xl:px-14">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground">
              Elegance Inspired Limited was born out of a passion for crafting brands that stand the test of time. We
              believe that every business regardless of its size, deserves a brand that reflects its values and
              resonates with its audience.
            </p>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="mb-4">
                We also understand the pivotal role that effective Branding, Advertising, Marketing and Printing plays
                in capturing the attention and loyalty of customers and the power of a cohesive brand experience, and
                that's why we offer a comprehensive suite of services.
              </p>
              <p className="mb-4">
                At Elegance Inspired, we believe that every brand has a unique story to tell, and it is our privilege to
                bring those stories to life through our comprehensive suite of services.
              </p>
              <p>
                We are not just a branding company – we're your trusted partner in building a brand that inspires
                lasting connections and fuels business success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Our Vision</h3>
                    <p>
                      To craft timeless brands that inspires success & enabling businesses thrive in the marketplace by
                      influencing a long lasting perception.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Our Mission</h3>
                    <p>
                      To elevate brands to new heights and drive sustainable results thereby empowering our clients with
                      remarkable success.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Flag className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Our Goal</h3>
                    <p>
                      To become the foremost branding partner for organizations across industries, recognized for our
                      unwavering commitment to excellence and transformative branding strategies.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">What Sets Us Apart</h3>
                    <p>
                      We don't just create brands; we build partnerships. We take the time to understand your vision,
                      your industry, and your target audience. We are not just a business, but the business-business. We
                      weave your story into a brand narrative that not only looks beautiful, but also connects with
                      people on a deeper level.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Our Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {values.map((value, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full shrink-0">{value.icon}</div>
                        <div>
                          <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                          <p className="text-muted-foreground">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
