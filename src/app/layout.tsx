import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { PropsWithChildren } from 'react';

const raleway = Raleway({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NFT",
  description: "Non-Fongible Token Website",
};

export default function RootLayout({
  children,
}: PropsWithChildren<{}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
