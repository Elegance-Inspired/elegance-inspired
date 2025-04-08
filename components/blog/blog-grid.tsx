"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Calendar, User, Tag } from "lucide-react"

const blogPosts = [
  {
    title: "10 Essential Branding Tips for Startups",
    excerpt: "Learn the key branding strategies that can help your startup stand out in a competitive market.",
    image: "/placeholder.svg?height=300&width=500",
    date: "April 5, 2023",
    author: "Temitope Ruth Jacob",
    category: "Branding",
    slug: "branding-tips-for-startups",
  },
  {
    title: "The Psychology of Color in Branding",
    excerpt: "Discover how different colors can influence customer perception and behavior towards your brand.",
    image: "/placeholder.svg?height=300&width=500",
    date: "March 18, 2023",
    author: "Cornelius Emmanuel",
    category: "Design",
    slug: "psychology-of-color-in-branding",
  },
  {
    title: "Digital Marketing Trends to Watch in 2023",
    excerpt: "Stay ahead of the curve with these emerging digital marketing trends that are shaping the industry.",
    image: "/placeholder.svg?height=300&width=500",
    date: "February 22, 2023",
    author: "Rebecca Jumoke Kinrin",
    category: "Marketing",
    slug: "digital-marketing-trends",
  },
  {
    title: "How to Create a Memorable Brand Experience",
    excerpt: "Explore strategies to create meaningful brand experiences that resonate with your audience.",
    image: "/placeholder.svg?height=300&width=500",
    date: "January 15, 2023",
    author: "Joseph Audu Olufu",
    category: "Branding",
    slug: "create-memorable-brand-experience",
  },
  {
    title: "Effective Advertising Strategies for Small Businesses",
    excerpt: "Learn cost-effective advertising techniques that can help small businesses maximize their reach.",
    image: "/placeholder.svg?height=300&width=500",
    date: "December 10, 2022",
    author: "Stephanie Momoh",
    category: "Advertising",
    slug: "advertising-strategies-small-businesses",
  },
  {
    title: "Case Study: Brand Transformation for Tech Company",
    excerpt: "See how we helped a technology company revitalize their brand and increase market share.",
    image: "/placeholder.svg?height=300&width=500",
    date: "November 5, 2022",
    author: "Temitope Ruth Jacob",
    category: "Case Studies",
    slug: "case-study-tech-company-brand-transformation",
  },
]

export default function BlogGrid() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-10 lg:px-12 xl:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden">
                <div className="overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-muted-foreground mb-2 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  </Link>
                  <div className="flex items-center text-sm">
                    <Tag className="h-4 w-4 mr-1 text-primary" />
                    <span className="text-primary">{post.category}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Link href={`/blog/${post.slug}`} className="text-primary hover:text-primary/80 font-medium">
                    Read More →
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
