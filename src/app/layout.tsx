import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The C&C House Of Hair & Beauty Salon | Fatorda, Margao, Goa",
  description:
    "Premium hair, beauty, nail, and occasion-ready services in the heart of Fatorda, Margao, South Goa. Expert stylists, premium products, and a warm welcome. Book your appointment online.",
  keywords: [
    "hair salon Fatorda",
    "beauty salon Margao",
    "hair salon Goa",
    "C&C Salon",
    "keratin treatment Margao",
    "bridal makeup Goa",
    "nail care Fatorda",
    "hair colour South Goa",
  ],
  openGraph: {
    title: "The C&C House Of Hair & Beauty Salon",
    description:
      "Premium hair, beauty, nail, and occasion-ready services in Fatorda, Margao, South Goa.",
    type: "website",
    locale: "en_IN",
    siteName: "C&C Salon",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col bg-ivory text-ink font-body antialiased">
        <a
          href="#main-content"
          className="skip-link"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
        {/* Add bottom padding on mobile for the action bar */}
        <div className="h-16 md:hidden" aria-hidden="true" />
      </body>
    </html>
  );
}
