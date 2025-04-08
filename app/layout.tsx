import type React from "react";
import type { Metadata } from "next";
import { Nunito_Sans, Raleway, Lato } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { LenisScrollProvider } from "@/components/lenis-scroll-provider";
import { NProgressProvider } from "@/components/nprogress-provider";
import { cn } from "@/lib/utils";
import "./globals.css";
import "./nprogress.css";

export const metadata: Metadata = {
  title: "Elegance Inspired Limited - Corporate Branding Agency",
  description:
    "A leading corporate branding agency dedicated to helping businesses achieve their full potential in the ever-evolving marketplace.",
};

// Load fonts
const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          nunitoSans.variable,
          raleway.variable,
          lato.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LenisScrollProvider>
            <NProgressProvider />
            {children}
          </LenisScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
