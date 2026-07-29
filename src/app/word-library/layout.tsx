import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata(
  "/word-library",
  "Word Library & Custom Category Generator | Imposter",
  "Browse thousands of word categories for Imposter: movies, gourmet, travel, brainiac, and funny words. Generate custom word packs for your group."
);

export default function WordLibraryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
