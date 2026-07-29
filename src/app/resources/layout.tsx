import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata(
  "/resources",
  "Printable Cards & Free Offline Resources | Imposter",
  "Download free PDF rules sheets, role cards, teacher's guides, and event kits to host and play Imposter offline with friends and family."
);

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
