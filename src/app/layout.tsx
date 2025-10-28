import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond, Raleway } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Raleway({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://goodroomhouse.com"),
  title: {
    default: "Good Room House, Jaipur — Quiet Luxury Hospitality",
    template: "%s — Good Room House, Jaipur",
  },
  description:
    "Good Room House is a design-led restaurant and boutique hospitality brand in Jaipur, India. Quiet luxury, crafted atmospheres, and soulful dining near City Palace.",
  icons: {
    icon: [
      { url: "/tab-logo.jpeg", sizes: "16x16", type: "image/jpeg" },
      { url: "/tab-logo.jpeg", sizes: "32x32", type: "image/jpeg" },
      { url: "/tab-logo.jpeg", sizes: "192x192", type: "image/jpeg" },
      { url: "/tab-logo.jpeg", sizes: "512x512", type: "image/jpeg" },
    ],
    apple: [{ url: "/tab-logo.jpeg", sizes: "180x180", type: "image/jpeg" }],
    shortcut: ["/tab-logo.jpeg"],
  },
  themeColor: "#0E1624",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Good Room House",
    title: "Good Room House, Jaipur — Quiet Luxury Hospitality",
    description:
      "Design-led restaurant and boutique hospitality in Jaipur. Quiet luxury near City Palace.",
    url: "https://goodroomhouse.com/",
    locale: "en_IN",
    images: [
      { url: "/og.jpg", width: 1200, height: 630, alt: "Good Room House logo on deep navy" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Good Room House, Jaipur — Quiet Luxury Hospitality",
    description:
      "Design-led restaurant and boutique hospitality in Jaipur. Quiet luxury near City Palace.",
    images: ["/og.jpg"],
  },
  keywords: [
    "quiet luxury restaurant Jaipur",
    "design-led hospitality India",
    "boutique dining Jaipur",
    "restaurant near City Palace Jaipur",
    "Good Room House Jaipur",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${display.variable} ${body.variable} min-h-screen font-body bg-primary-dark text-text-inverse overflow-x-hidden`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Good Room House",
              url: "https://goodroomhouse.com",
              image: "https://goodroomhouse.com/og.jpg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Jaipur",
                addressRegion: "RJ",
                addressCountry: "IN",
              },
              sameAs: [],
            }),
          }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
