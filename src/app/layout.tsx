import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { studio } from "@/data/business";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${studio.name} — Websites & Cinematic Media for Local Businesses`,
  description: studio.description,
  metadataBase: new URL("https://arman-digital.vercel.app"),
  openGraph: {
    title: `${studio.name} — Websites & Cinematic Media for Local Businesses`,
    description: studio.description,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-ink text-cream">
        <div className="pointer-events-none fixed inset-0 z-[54] bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.55)_100%)]" />
        <div className="grain-overlay pointer-events-none fixed inset-0 z-[55] opacity-[0.05]" />
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
