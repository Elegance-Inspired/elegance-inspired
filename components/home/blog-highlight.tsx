"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, User } from "lucide-react"

const blogPosts = [
  {
    title: "10 Essential Branding Tips for Startups",
    excerpt: "Learn the key branding strategies that can help your startup stand out in a competitive market.",
    image: "/placeholder.svg?height=300&width=500",
    date: "April 5, 2023",
    author: "Temitope Ruth Jacob",
    slug: "branding-tips-for-startups",
  },
  {
    title: "The Psychology of Color in Branding",
    excerpt: "Discover how different colors can influence customer perception and behavior towards your brand.",
    image: "/placeholder.svg?height=300&width=500",
    date: "March 18, 2023",
    author: "Cornelius Emmanuel",
    slug: "psychology-of-color-in-branding",
  },
  {
    title: "Digital Marketing Trends to Watch in 2023",
    excerpt: "Stay ahead of the curve with these emerging digital marketing trends that are shaping the industry.",
    image: "/placeholder.svg?height=300&width=500",
    date: "February 22, 2023",
    author: "Rebecca Jumoke Kinrin",
    slug: "digital-marketing-trends",
  },
]

export default function BlogHighlight() {
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
            Latest from Our Blog
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Discover branding and marketing insights, industry trends, and client success stories.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full">
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
