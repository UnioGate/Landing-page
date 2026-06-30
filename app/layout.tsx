import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Plus_Jakarta_Sans,
  Sora,
} from "next/font/google";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AppWrapper from "@/components/AppWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

/**
 * SEO KEYWORDS
 */
const keywords = [
  "Uniogate",
  "stablecoin app",
  "crypto payments",
  "merchant payments",
  "web3 payments",
  "digital wallet",
  "blockchain payments",
  "crypto checkout",
  "global payments",
  "fintech app",
];

export const metadata: Metadata = {
  title: {
    default: "Uniogate",
    template: "%s | Uniogate",
  },

  description:
    "Uniogate is a stablecoin-powered payment platform designed for merchants to send, receive, and manage digital payments seamlessly across borders.",

  applicationName: "Uniogate",
  creator: "Uniogate Team",
  publisher: "Uniogate Team",
  generator: "Next.js",

  keywords,

  referrer: "origin-when-cross-origin",
  robots: "index, follow",

  viewport: "width=device-width, initial-scale=1",

  metadataBase: new URL("https://www.uniogate.com/"),

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Uniogate",
    description:
      "A stablecoin-powered payment system for modern merchants. Fast, borderless, and secure crypto transactions.",
    url: "https://www.uniogate.com/",
    siteName: "Uniogate",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Uniogate - Stablecoin Payment Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Uniogate",
    description:
      "Stablecoin payments for merchants — fast, secure, borderless.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AppWrapper>
          {children}
        </AppWrapper>

        <ToastContainer position="top-right" autoClose={3000} />
      </body>
    </html>
  );
}