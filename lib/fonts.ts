import { Geist } from "next/font/google";
import localFont from "next/font/local";

export const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: "600",
});

export const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});
