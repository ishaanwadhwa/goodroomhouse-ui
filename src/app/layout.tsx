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
  title: {
    default: "The good room house — Restaurant & Bar",
    template: "%s — The good room house",
  },
  description:
    "A modern dining group featuring Angels and Searchers and Good Room House Bar.",
  metadataBase: new URL("https://example.com"),
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${display.variable} ${body.variable} min-h-screen font-body bg-background text-text`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
