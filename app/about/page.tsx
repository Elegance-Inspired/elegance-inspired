import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { generateMetadata } from "@/lib/seo-config"
import WhoWeAre from "@/components/about/who-we-are"
import OurStory from "@/components/about/our-story"
import CreativeTeam from "@/components/about/creative-team"
import PageHeader from "@/components/page-header"

export const metadata: Metadata = generateMetadata(
  "About Us - Who We Are, Our Story & Team",
  "Learn about Elegance Inspired Limited, our story, vision, mission, values, and meet our creative team of branding experts.",
  "/images/about-og.jpg",
  ["about us", "branding agency", "creative team", "brand vision", "brand mission"],
)

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <PageHeader
        title="About Us"
        description="Learn about our company, our story, and the team behind Elegance Inspired."
      />
      <WhoWeAre />
      <OurStory />
      <CreativeTeam />
      <Footer />
    </main>
  )
}
