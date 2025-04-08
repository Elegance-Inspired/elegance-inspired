"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const onlinePackages = [
  {
    title: "Targeted Reach",
    description: "Puts your brand in front of a local audience.",
    features: [
      "Ad creative design (1 format)",
      "Development of a targeted advertising strategy",
      "Creation of ad copy and visuals for one platform (social media)",
      "Campaign management for a limited duration",
    ],
    cta: "Get Started",
    href: "/contact",
  },
  {
    title: "Amplified",
    description: "Selectively targets key locations for impactful exposure.",
    features: [
      "Includes all Targeted package items",
      "Ad creative design (2 formats)",
      "Placement & management across multiple platforms (social media, search engines)",
      "A/B testing and campaign optimization",
    ],
    cta: "Get Started",
    href: "/contact",
    featured: true,
  },
  {
    title: "Max Exposure",
    description: "Creates a comprehensive digital advertising campaign.",
    features: [
      "Includes all Amplified package items",
      "Development and implementation of a multi-channel advertising campaign",
      "Ongoing campaign monitoring and performance reporting",
    ],
    cta: "Get Started",
    href: "/contact",
  },
]

const offlinePackages = [
  {
    title: "City Spotlight",
    description: "Puts your brand in front of a local audience.",
    features: ["Ad Design", "Placement of a billboard (limited size)", "Print media [1 news platform]"],
    cta: "Get Started",
    href: "/contact",
  },
  {
    title: "Strategic Showcase",
    description: "Selectively targets key locations for impactful exposure.",
    features: [
      "Includes City Spotlight",
      "Design and placement of bus stop ads (limited locations and duration)",
      "TV/Radio Ad [1 TV/Radio platform]",
    ],
    cta: "Get Started",
    href: "/contact",
    featured: true,
  },
  {
    title: "Brand Blitz",
    description: "Creates a comprehensive out-of-home advertising campaign.",
    features: [
      "Includes Strategic Showcase",
      "Billboards, bus stop ads, transit ads across a wider area and duration",
      "Print media [2 news media platform]",
      "TV/Radio Ad [2 TV/Radio platform]",
    ],
    cta: "Get Started",
    href: "/contact",
  },
]

export default function AdvertisingPackages() {
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
    <section id="advertising" className="py-16 md:py-24 bg-muted scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Advertising Packages
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Maximize your brand visibility with our comprehensive advertising solutions.
          </motion.p>
        </div>

        <Tabs defaultValue="online" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="online">Online Advertising</TabsTrigger>
              <TabsTrigger value="offline">Out-of-Home Advertising</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="online">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {onlinePackages.map((pkg, index) => (
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
          </TabsContent>

          <TabsContent value="offline">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {offlinePackages.map((pkg, index) => (
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
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
