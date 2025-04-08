"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

const team = [
  {
    name: "Temitope Ruth Jacob",
    position: "CEO/Founder",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      instagram: "#",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Cornelius Emmanuel",
    position: "Chief Operating Officer",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      instagram: "#",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Rebecca Jumoke Kinrin",
    position: "Brands & Comms. Manager",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      instagram: "#",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Joseph Audu Olufu",
    position: "Manager",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      instagram: "#",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Stephanie Momoh",
    position: "Chief Marketing Officer",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      instagram: "#",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
]

export default function CreativeTeam() {
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
    <section id="creative-team" className="py-16 md:py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-10 lg:px-12 xl:px-14">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Creative Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Our team is dedicated to helping businesses enhance their brand identity, reach their target audience, and
            achieve remarkable success in the marketplace.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {team.map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden bg-card border-border/50 h-full">
                <div className="relative overflow-hidden group">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                    <div className="flex space-x-3">
                      <Link
                        href={member.social.instagram}
                        className="bg-white/20 p-2 rounded-full hover:bg-[#FF6600] transition-colors"
                      >
                        <Instagram className="h-4 w-4 text-white" />
                      </Link>
                      <Link
                        href={member.social.facebook}
                        className="bg-white/20 p-2 rounded-full hover:bg-[#FF6600] transition-colors"
                      >
                        <Facebook className="h-4 w-4 text-white" />
                      </Link>
                      <Link
                        href={member.social.twitter}
                        className="bg-white/20 p-2 rounded-full hover:bg-[#FF6600] transition-colors"
                      >
                        <Twitter className="h-4 w-4 text-white" />
                      </Link>
                      <Link
                        href={member.social.linkedin}
                        className="bg-white/20 p-2 rounded-full hover:bg-[#FF6600] transition-colors"
                      >
                        <Linkedin className="h-4 w-4 text-white" />
                      </Link>
                    </div>
                  </div>
                </div>
                <CardContent className="text-center pt-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.position}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
