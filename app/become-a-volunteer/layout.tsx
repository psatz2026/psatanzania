import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Become a Volunteer — Join Our Patient Safety Movement",
  description:
    "Join Patient Safety Alliance as a volunteer and use your skills to build a safer healthcare system for every patient.",
  path: "/become-a-volunteer",
});

export default function BecomeAVolunteerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
