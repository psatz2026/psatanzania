import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us — Reach PSA Tanzania",
  description:
    "Get in touch with Patient Safety Alliance Tanzania. Whether you are a patient, health worker, researcher, or organization, we want to hear from you.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
