import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PreFooterCTA } from "@/components/layout/PreFooterCTA";
import { contactDetails, siteLogoPath, siteMotto, siteName } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emmaushopefoundation.org"),
  applicationName: siteName,
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description:
    "Emmaus Hope Foundation is a faith-based non-profit restoring hope, protecting human dignity, and improving lives through sustainable humanitarian and development initiatives.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Emmaus Hope Foundation",
    "NGO",
    "humanitarian aid",
    "poverty alleviation",
    "education support",
    "women empowerment",
    "donation",
  ],
  category: "nonprofit",
  manifest: "/manifest.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  authors: [{ name: siteName, url: "https://emmaushopefoundation.org" }],
  creator: siteName,
  publisher: siteName,
  openGraph: {
    title: siteName,
    description:
      "Leaving No One Behind - By Giving Them Hope through sustainable, faith-driven humanitarian action.",
    url: "https://emmaushopefoundation.org",
    siteName,
    type: "website",
    locale: "en_NG",
    images: [siteLogoPath],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description:
      "Faith-driven humanitarian initiatives that restore hope, uphold dignity, and strengthen vulnerable communities.",
    images: [siteLogoPath],
  },
  icons: {
    icon: siteLogoPath,
    apple: siteLogoPath,
    shortcut: siteLogoPath,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ea580c",
  colorScheme: "light",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: siteName,
  slogan: siteMotto,
  url: "https://emmaushopefoundation.org",
  logo: `https://emmaushopefoundation.org${siteLogoPath}`,
  email: `mailto:${contactDetails[0]?.description}`,
  telephone: contactDetails[1]?.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: contactDetails[2]?.description,
    addressCountry: "NG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="focus-ring sr-only-focusable fixed left-4 top-4 z-[70] rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <div className="relative min-h-screen overflow-x-clip">
          <Navbar />
          <main id="main-content">{children}</main>
          <PreFooterCTA />
          <Footer />
        </div>
      </body>
    </html>
  );
}
