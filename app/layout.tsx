import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from '@clerk/nextjs'
import { Color } from "three/src/Three.js";
import Head from "next/head";


const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ['400'],
  variable: '--font-ibm-plex'
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
    <ClerkProvider appearance={{
      variables:{colorPrimary:'black'}
    }}>
      <html lang="en">
      <Head>
          <link rel="icon" href="/clipart427182.png" type="image/png"/>
        </Head>
        <body className={cn('font-IBMPlex antialiased', IBMPlex.variable)}>{children}</body>
      </html>
      </ClerkProvider>
  ); 
}
