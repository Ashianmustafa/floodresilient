import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "EICP + Hydrophobic FYP | Flood-Resilient Foundation Engineering",
    template: "%s | GeoFYP Research",
  },
  description:
    "Final Year Project research website presenting feasibility assessment of combined EICP biocementation and hydrophobic treatment for flood-resilient shallow foundation soils.",
  keywords: [
    "EICP",
    "hydrophobic sand",
    "geotechnical engineering",
    "biocementation",
    "flood foundation",
    "FYP",
    "soil stabilization",
    "Toyoura sand",
    "CaCO3",
    "enzyme induced carbonate precipitation",
  ],
  authors: [{ name: "GeoFYP Research Team" }],
  creator: "GeoFYP Research",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "EICP + Hydrophobic Combined Treatment | FYP Research",
    description:
      "Feasibility study on combining EICP biocementation with hydrophobic surface treatment for flood-resilient foundation soils.",
    siteName: "GeoFYP Research",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-inter antialiased bg-white text-gray-900`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
