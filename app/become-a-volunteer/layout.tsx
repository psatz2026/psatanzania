import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become a Volunteer",
  description:
    "Join Patient Safety Alliance Tanzania as a volunteer and use your skills to build a safer healthcare system for every patient.",
};

export default function BecomeAVolunteerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
