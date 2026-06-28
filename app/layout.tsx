import type { Metadata } from "next";
import "./globals.css";
import { geist, satoshi } from "@/lib/fonts";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "PSA Tanzania — Collaborating for Better Care",
  description:
    "Patient Safety Alliance Tanzania is a youth-led nonprofit promoting patient safety, strengthening patient voices, and supporting a more responsive, inclusive, and accountable healthcare system in Tanzania.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${satoshi.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white text-carbon-black">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
