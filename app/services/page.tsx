import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { generateMetadata } from "@/lib/seo-config"
import PageHeader from "@/components/page-header"
import ServicesIntro from "@/components/services/services-intro"
import CreativeBranding from "@/components/services/creative-branding"
import StrategicAdvertising from "@/components/services/strategic-advertising"
import DigitalTransformation from "@/components/services/digital-transformation"
import QualityPrinting from "@/components/services/quality-printing"
import HrConsulting from "@/components/services/hr-consulting"
import ServicesCTA from "@/components/services/services-cta"

export const metadata: Metadata = generateMetadata(
  "Our Services - Branding, Advertising, Marketing & More",
  "Explore our comprehensive range of services including Creative Branding, Strategic Advertising, Digital Transformation, Quality Printing, and HR Consulting.",
  "/images/services-og.jpg",
  ["branding services", "advertising services", "digital marketing", "printing services", "HR consulting"],
)

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <PageHeader
        title="Our Services"
        description="Explore our comprehensive range of services designed to elevate your brand."
      />
      <ServicesIntro />
      <CreativeBranding />
      <StrategicAdvertising />
      <DigitalTransformation />
      <QualityPrinting />
      <HrConsulting />
      <ServicesCTA />
      <Footer />
    </main>
  )
}
