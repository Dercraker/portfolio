import { ContactDialog } from "@components/contact/contactDialog";
import { Footer } from "@components/layout/footer";
import { Navbar } from "@components/layout/navbar";
import { NextTopLoader } from "@components/page/nextTopLoader";
import { TailwindIndicator } from "@components/utils/tailwindDevIndicator";
import { cn } from "@lib/utils";
import type { LayoutParams } from "@type/next";
import { personJsonLd } from "constant/jsonLd";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { Providers } from "./providers";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Antoine Capitain",
  description:
    "Antoine Capitain's portfolio (Dercraker) - Passionate Full Stack developer specializing in Next.Js and .Net. Mastering modern technologies, I'm a versatile and innovative developer. Find out more about my projects and development skills",
  keywords: [
    "full stack developer",
    "react",
    "typescript",
    "node.js",
    ".Net",
    "c#",
    "golang",
    "vue.js",
    "docker",
    "kubernetes",
    "portfolio",
    "antoine capitain",
    "dercraker",
    "web developer",
    "developer",
    "full stack",
    "programmer",
    "software engineer",
  ],
  authors: [{ name: "Antoine Capitain", url: "https://github.com/Dercraker" }],
  creator: "Antoine Capitain",
  publisher: "Antoine Capitain",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://portfolio.dercraker.dev",
    siteName: "Antoine Capitain - Portfolio",
    title: "Antoine Capitain - Full Stack Developer",
    description:
      "Antoine Capitain's portfolio (Dercraker) - Passionate Full Stack developer specializing in Next.Js and .Net. Mastering modern technologies, I'm a versatile and innovative developer. Find out more about my projects and development skills",
    images: [
      {
        url: "/og-image.jpg", // Assurez-vous d'avoir cette image dans votre dossier public
        width: 1200,
        height: 630,
        alt: "Antoine Capitain - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antoine Capitain - Full Stack Developer",
    description:
      "Antoine Capitain's portfolio (Dercraker) - Passionate Full Stack developer specializing in Next.Js and .Net. Mastering modern technologies, I'm a versatile and innovative developer. Find out more about my projects and development skills",
    images: ["/og-image.jpg"], // Même image que pour OpenGraph
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "google-site-verification-code", // À remplacer par votre code de vérification Google
  },
  alternates: {
    canonical: "https://portfolio.dercraker.dev",
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/apple-icon.png",
        type: "image/png",
      },
      {
        url: "/icon.png",
        type: "image/png",
      },
      {
        url: "/public/images/photoPro.png",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/apple-icon.png",
        type: "image/png",
      },
      {
        url: "/icon.png",
        type: "image/png",
      },
      {
        url: "/public/images/photoPro.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-icon.png",
        type: "image/png",
      },
    ],
  },
};

const RootLayout = ({ children }: LayoutParams) => {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <header>
        <Navbar />
      </header>
      <body
        suppressHydrationWarning
        className={cn(
          "bg-background h-full font-sans antialiased",
          geistMono.variable,
          geistSans.variable,
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Providers>
          <Toaster />
          {children}
          <TailwindIndicator />
          <NextTopLoader />
          <ContactDialog />
        </Providers>
      </body>
      <footer>
        <Footer />
      </footer>
    </html>
  );
};

export default RootLayout;
