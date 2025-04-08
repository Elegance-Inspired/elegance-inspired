import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { generateMetadata } from "@/lib/seo-config"
import PageHeader from "@/components/page-header"
import PackagesIntro from "@/components/packages/packages-intro"
import BrandingPackages from "@/components/packages/branding-packages"
import MarketingPackages from "@/components/packages/marketing-packages"
import AdvertisingPackages from "@/components/packages/advertising-packages"
import PrintingPackages from "@/components/packages/printing-packages"
import PackagesCTA from "@/components/packages/packages-cta"

export const metadata: Metadata = generateMetadata(
  "Our Packages - Branding, Marketing, Advertising & Printing",
  "Explore our comprehensive range of packages designed to cater to different needs and budgets for branding, marketing, advertising, and printing services.",
  "/images/packages-og.jpg",
  ["branding packages", "marketing packages", "advertising packages", "printing packages", "agency services"],
)

export default function PackagesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <PageHeader
        title="Our Packages"
        description="Choose the package that best suits your needs, or contact us for a custom quote."
      />
      <PackagesIntro />
      <BrandingPackages />
      <MarketingPackages />
      <AdvertisingPackages />
      <PrintingPackages />
      <PackagesCTA />
      <Footer />
    </main>
  )
}
