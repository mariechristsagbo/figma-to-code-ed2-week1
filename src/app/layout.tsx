import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const raleway = Raleway({ 
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
 });

export const metadata: Metadata = {
  title: "Digit-NFT",
  description: "Non-Fongible Token Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
