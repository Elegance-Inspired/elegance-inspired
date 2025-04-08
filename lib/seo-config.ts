import type { Metadata } from "next";

// Base metadata that will be used across the site
export const baseMetadata: Metadata = {
  metadataBase: new URL("https://eleganceinspired.org"),
  title: {
    default: "Elegance Inspired Limited - Corporate Branding Agency",
    template: "%s | Elegance Inspired Limited",
  },
  description:
    "A leading corporate branding agency dedicated to helping businesses achieve their full potential in the ever-evolving marketplace.",
  keywords: [
    "branding",
    "corporate branding",
    "brand identity",
    "marketing",
    "advertising",
    "digital transformation",
    "printing",
    "HR consulting",
    "brand strategy",
    "brand design",
  ],
  authors: [{ name: "Elegance Inspired Limited" }],
  creator: "Elegance Inspired Limited",
  publisher: "Elegance Inspired Limited",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eleganceinspired.org",
    siteName: "Elegance Inspired Limited",
    title: "Elegance Inspired Limited - Corporate Branding Agency",
    description:
      "A leading corporate branding agency dedicated to helping businesses achieve their full potential in the ever-evolving marketplace.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elegance Inspired Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elegance Inspired Limited - Corporate Branding Agency",
    description:
      "A leading corporate branding agency dedicated to helping businesses achieve their full potential in the ever-evolving marketplace.",
    images: ["/twitter-image.jpg"],
    creator: "@eleganceinspltd",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "google-site-verification-code",
  },
};

// Function to generate page-specific metadata
export function generateMetadata(
  title: string,
  description?: string,
  ogImage?: string,
  keywords?: string[]
): Metadata {
  return {
    title,
    description: description || baseMetadata.description,
    keywords: [...(baseMetadata.keywords as string[]), ...(keywords || [])],
    metadataBase: baseMetadata.metadataBase,
    openGraph: {
      ...baseMetadata.openGraph,
      title,
      description:
        description || (baseMetadata.openGraph?.description as string),
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : baseMetadata.openGraph?.images,
    },
    twitter: {
      ...baseMetadata.twitter,
      title,
      description: description || (baseMetadata.twitter?.description as string),
      images: ogImage ? [ogImage] : baseMetadata.twitter?.images,
    },
  };
}
