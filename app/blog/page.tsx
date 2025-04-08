import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { generateMetadata } from "@/lib/seo-config"
import PageHeader from "@/components/page-header"
import BlogGrid from "@/components/blog/blog-grid"
import BlogCategories from "@/components/blog/blog-categories"
import BlogNewsletter from "@/components/blog/blog-newsletter"

export const metadata: Metadata = generateMetadata(
  "Blog - Branding and Marketing Insights",
  "Discover branding and marketing insights, industry trends, and client success stories from Elegance Inspired Limited.",
  "/images/blog-og.jpg",
  ["branding blog", "marketing insights", "branding tips", "industry trends", "branding success stories"],
)

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <PageHeader
        title="Our Blog"
        description="Discover branding and marketing insights, industry trends, and client success stories."
      />
      <BlogCategories />
      <BlogGrid />
      <BlogNewsletter />
      <Footer />
    </main>
  )
}
