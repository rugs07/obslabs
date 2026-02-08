import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/ui/feedback/ToastProvider";

import Cursor from "@/components/ui/cursor/Cursor";
import SmoothScroll from "@/components/dom/SmoothScroll";
import NoiseOverlay from '@/components/ui/NoiseOverlay';

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ObsidianLabs — Digital Excellence",
  description: "Premium digital solutions, immersive experiences, and next-generation web applications for visionary enterprises.",
  keywords: ["digital agency", "web development", "3D experiences", "SaaS", "AI solutions", "enterprise"],
  openGraph: {
    title: "ObsidianLabs — Digital Excellence",
    description: "Premium digital solutions for visionary enterprises.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${mono.variable} scroll-smooth`}>
      <body className="bg-[#030308] text-white antialiased selection:bg-[#00d4ff] selection:text-black">
        <NoiseOverlay />
        <SmoothScroll>
          <Cursor />
          <ToastProvider>
            {children}
          </ToastProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
