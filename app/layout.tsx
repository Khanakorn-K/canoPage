import type { Metadata } from "next";
import { Orbitron, Share_Tech_Mono, Inter } from "next/font/google";
import "./globals.css";
import DynamicTitle from "@/components/DynamicTitle";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  variable: "--font-share-tech",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // title: "CANO",
  // description: "Elite web interface for the next generation of gamers.",
  // icons: {
  //   icon: "/favicon.ico", // ทำหน้าที่เป็นรูปไอคอนบน Tab Browser
  // },
  // title: " ",
  // description: "",
  icons: {
    icon: ["/LandingIndex/Cano.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${orbitron.variable} ${shareTechMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-white">
        <DynamicTitle /> {/* ย้ายมาไว้ตรงนี้เพื่อให้ทำงานได้เสถียรขึ้น */}
        {children}
      </body>
    </html>
  );
}
