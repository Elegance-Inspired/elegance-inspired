import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { generateMetadata } from "@/lib/seo-config";
import PageHeader from "@/components/page-header";
import ContactForm from "@/components/contact/contact-form";
import ContactInfo from "@/components/contact/contact-info";
import ContactMap from "@/components/contact/contact-map";

export const metadata: Metadata = generateMetadata(
  "Contact Us - Get in Touch with Elegance Inspired",
  "Contact Elegance Inspired Limited for all your branding, marketing, advertising, and printing needs. We're here to help elevate your brand.",
  "/images/contact-og.jpg",
  [
    "contact us",
    "branding agency contact",
    "get in touch",
    "branding consultation",
  ]
);

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <PageHeader
        title="Contact Us"
        description="We're your trusted partner in building a brand that inspires lasting connections and fuels business success."
      />
      <div className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-10 lg:px-12 xl:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
      <ContactMap />
      <Footer />
    </main>
  );
}
