import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata(
  "/learn",
  "How to Play Imposter | Rules & Strategy Hub",
  "Learn how to play the Imposter social deduction word party game. Access official rules, beginner tips, advanced strategies, scoring system, and FAQs."
);

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return children;
}
