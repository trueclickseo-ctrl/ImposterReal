import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata(
  "/encyclopedia",
  "Master Encyclopedia & Tabletop Games Theory Hub | Imposter",
  "Deep-dive reference library on tabletop social deduction theory: history of hidden-role party games, game theory mechanics, and high-authority academic bibliography."
);

export default function EncyclopediaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
