import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata(
  "/game-modes",
  "Interactive Game Modes & Party Variations | Imposter",
  "Explore the diverse game modes of Imposter: Classic, Dual Imposters Team Mode, Pictionary Bluff Drawing Mode, Timed Speed, Classroom, and Office Icebreaker."
);

export default function GameModesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
