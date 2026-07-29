import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata(
  "/play",
  "Play Imposter Online | Free Web Party Game",
  "Play Imposter now. Host custom rooms, join by code, and play pass & play on mobile or desktop."
);

export default function PlayLayout({ children }: { children: React.ReactNode }) {
  return children;
}
