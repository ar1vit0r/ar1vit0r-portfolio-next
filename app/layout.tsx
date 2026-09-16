import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains-mono",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ar1vit0r | Portfolio",
  description: "Developer portfolio — sci-fi themed, cyberpunk aesthetic.",
  openGraph: {
    title: "ar1vit0r | Portfolio",
    description: "Developer portfolio — sci-fi themed, cyberpunk aesthetic.",
    type: "website",
    url: "https://ar1vit0r.github.io/",
    images: [{ url: "https://ar1vit0r.github.io/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ar1vit0r | Portfolio",
    description: "Developer portfolio — sci-fi themed, cyberpunk aesthetic.",
    images: ["https://ar1vit0r.github.io/og-image.png"],
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${inter.variable}`}>
      <body className="bg-void text-body font-display text-sm leading-relaxed overflow-x-hidden">
        {children}
        <Script
          defer
          data-goatcounter="https://ar1v1t0r.goatcounter.com/count"
          src="https://gc.zgo.at/count.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
