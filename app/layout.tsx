import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar"; // Navbar එක import කිරීම

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// වෙබ් අඩවියේ නම සහ විස්තර මෙතැනින් වෙනස් කළ හැකියි
export const metadata: Metadata = {
  title: "Sarasavi English Academy | Perfecting the Rule",
  description: "Perfecting the rule, Polishing The voice and building the person. The best English academy in Sri Lanka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* සියලුම පිටු වලට Navbar එක පෙන්වීම සඳහා මෙතැනට ඇතුළත් කරයි */}
        <Navbar /> 
        
        {/* පිටු වල අන්තර්ගතය මෙතැනින් දිස්වේ */}
        {children}
      </body>
    </html>
  );
}