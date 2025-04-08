import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroSection from "@/components/home/hero-section"
import ServicesHighlight from "@/components/home/services-highlight"
import AboutSection from "@/components/home/about-section"
import PackagesHighlight from "@/components/home/packages-highlight"
import TeamSection from "@/components/home/team-section"
import ClientsSection from "@/components/home/clients-section"
import PortfolioHighlight from "@/components/home/portfolio-highlight"
import BlogHighlight from "@/components/home/blog-highlight"
import CTASection from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Elegance Inspired Limited - Corporate Branding Agency",
  description:
    "We elevate brands & deliver results. A leading corporate branding agency dedicated to helping businesses achieve their full potential.",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <ServicesHighlight />
      <AboutSection />
      <PackagesHighlight />
      <TeamSection />
      <ClientsSection />
      <PortfolioHighlight />
      <BlogHighlight />
      <CTASection />
      <Footer />
    </main>
  )
}
