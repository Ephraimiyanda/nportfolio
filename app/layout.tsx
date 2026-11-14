import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans, fontMono } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import SEO from "@/components/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Ephraim Iyanda | Frontend Developer",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Ephraim Iyanda — Frontend Developer portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ephraim Iyanda | Frontend Developer",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-canvas font-sans text-ink antialiased",
          fontSans.variable,
          fontMono.variable,
        )}
      >
        <style>{`html:not(.gsap-ready) .intro-char,html:not(.gsap-ready) .reveal-item,html:not(.gsap-ready) .hero-fade{opacity:0}`}</style>
        <noscript>
          <style>{`.intro-char,.reveal-item,.hero-fade{opacity:1!important}`}</style>
        </noscript>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <SEO />
            <Navbar />
            <main className="mx-auto w-full max-w-6xl flex-grow px-5 pt-20 sm:px-6">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
