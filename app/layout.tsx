import type { Metadata, Viewport } from "next";
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
import { JsonLd, organizationSchema, websiteSchema } from "@/lib/structured-data";

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
  "UnioGate",
  "accept stablecoin payments",
  "stablecoin POS",
  "crypto payments Nigeria",
  "merchant payments",
  "USDT payments",
  "USDC payments",
  "CNGN",
  "naira settlement",
  "crypto point of sale",
];

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    /*
     * The default is what ranks for the brand query, so it pairs the name with
     * the tagline the emails already sign off with. 43 characters, well inside
     * the ~60 Google truncates at.
     */
    default: "UnioGate | The Stablecoin App for Merchants",
    template: "%s | UnioGate",
  },

  alternates: { canonical: "/" },

  /*
   * Google rewrites descriptions it finds unhelpful, and the old one described
   * a generic cross-border wallet. This one says who it is for and what they
   * actually get, and stays under ~155 characters so it is not cut off.
   */
  description:
    "Accept USDT, USDC and CNGN in your shop and get paid in naira the same day. UnioGate turns stablecoin payments into cash Nigerian merchants can spend.",

  applicationName: "UnioGate",
  creator: "UnioGate Team",
  publisher: "UnioGate Team",
  generator: "Next.js",

  keywords,

  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    /*
     * Without max-image-preview:large Google may show only a thumbnail or no
     * image at all next to the result, and the page is not eligible for
     * Discover. max-snippet:-1 lets it use as much of the text as it wants.
     */
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  metadataBase: new URL("https://www.uniogate.com/"),

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "UnioGate | The Stablecoin App for Merchants",
    description:
      "Take stablecoin payments at the counter and settle in naira the same day. One terminal, no crypto knowledge needed.",
    url: "https://www.uniogate.com/",
    siteName: "UnioGate",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UnioGate — stablecoin payments for merchants",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "UnioGate | The Stablecoin App for Merchants",
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

        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </body>
    </html>
  );
}