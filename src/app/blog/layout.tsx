import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata(
  "/blog",
  "Party Game Insights & Game Design Blog | Imposter",
  "Read articles on party game ideas, comparison of social deduction mechanics, psychology of bluffing, family activity guides, and design notes."
);

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
