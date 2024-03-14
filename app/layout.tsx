import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
   weight: ['400'],
  variable:'--font-ibm-plex'
});

export const metadata: Metadata = {
  title: "Ai Galore",
  description: "Ai hub for tedios, day to day tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; 
}>) {
  return (
    <html lang="en">
      <body className={cn('font-IBMPlex antialiased',IBMPlex.variable)}>{children}</body>
    </html>
  );
}
