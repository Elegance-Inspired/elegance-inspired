"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Instagram, FileText, Search, MousePointer, Mail, Globe, Users } from "lucide-react"
import { useEffect, useState } from "react"
import { Carousel, CarouselSlideResponsive } from "@/components/ui/carousel"

const marketingServices = [
  {
    title: "Social Media Marketing",
    description:
      "We develop and implement effective social media marketing campaigns to increase brand awareness and engagement.",
    icon: <Instagram className="h-10 w-10 text-primary" />,
  },
  {
    title: "Content Creation",
    description:
      "We create and distribute valuable content such as graphics designs, copywriting, photography & videography to attract and engage audiences.",
    icon: <FileText className="h-10 w-10 text-primary" />,
  },
  {
    title: "Search Engine Optimization [SEO]",
    description: "We provide Search Engine Optimization to improve website organic rankings.",
    icon: <Search className="h-10 w-10 text-primary" />,
  },
  {
    title: "Pay Per Click [PPC]",
    description:
      "We provide paid ad promotions on search engines to drive traffic through paid adverts on digital platforms.",
    icon: <MousePointer className="h-10 w-10 text-primary" />,
  },
  {
    title: "Email Marketing",
    description: "We provide effective email marketing campaigns by sending targeted newsletters.",
    icon: <Mail className="h-10 w-10 text-primary" />,
  },
  {
    title: "Website/App Development",
    description: "We develop and design responsive websites and mobile applications to effectively represent brands.",
    icon: <Globe className="h-10 w-10 text-primary" />,
  },
  {
    title: "Influencer Marketing",
    description: "We leverage on the power of influencer marketing to help businesses achieve their marketing goal.",
    icon: <Users className="h-10 w-10 text-primary" />,
  },
]

export default function DigitalTransformation() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const renderServiceCard = (service: (typeof marketingServices)[0], index: number) => (
    <Card className="h-full border-border/50 hover:shadow-md transition-shadow duration-300">
      <CardHeader>
        <div className="mb-4">{service.icon}</div>
        <CardTitle>{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{service.description}</p>
      </CardContent>
    </Card>
  )

  return (
    <section id="digital-transformation" className="py-16 md:py-24 bg-muted scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Digital Transformation</h2>
            <div className="space-y-4">
              <p>We develop marketing strategies and campaigns to promote products or services.</p>
              <p>
                This involves market research, identifying target audiences, creating marketing plans, and executing
                campaigns across different channels.
              </p>
              <p>
                We'll help you understand your competitive marketplace and identify strategic opportunities for your
                marketing efforts.
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
              alt="Digital Transformation"
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
            We offer the following Marketing solutions:
          </motion.h3>

          {isMobile ? (
            <Carousel className="mb-8">
              {marketingServices.map((service, index) => (
                <CarouselSlideResponsive key={index} className="px-2">
                  {renderServiceCard(service, index)}
                </CarouselSlideResponsive>
              ))}
            </Carousel>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {marketingServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {renderServiceCard(service, index)}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
