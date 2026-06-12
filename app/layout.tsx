import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFAB } from "@/components/layout/WhatsAppFAB";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { SmoothScroller } from "@/components/layout/SmoothScroller";

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-plus-jakarta" 
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space-grotesk" 
});

export const metadata: Metadata = {
  title: "Abi Driving School | Drive With Confidence",
  description: "Kallakurichi's premier driving school. We offer training for Two-wheelers, Cars, Heavy Vehicles, and state-of-the-art Simulator training.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-black-deep text-white antialiased overflow-x-hidden">
        <SmoothScroller>
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          {children}
          <Footer />
          <WhatsAppFAB />
        </SmoothScroller>
      </body>
    </html>
  );
}
