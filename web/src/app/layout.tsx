import type { Metadata } from "next";
import { Inter, Rajdhani, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/dom/ToastProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const rajdhani = Rajdhani({
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
  title: "ObsidianLabs — Architecture for the Infinite",
  description: "Boutique AAA-quality virtual museums for the global art market. Frictionless immersive experiences.",
  keywords: ["virtual museum", "3D gallery", "digital twin", "immersive art", "WebGL", "VR ready"],
  openGraph: {
    title: "ObsidianLabs — Architecture for the Infinite",
    description: "Boutique AAA-quality virtual museums for the global art market.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${rajdhani.variable} ${mono.variable}`}>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
