import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata(
  "/company/contact",
  "Contact Us | Imposter Game Studios",
  "Get in touch with Imposter Game Studios. Submit questions, feedback, bug reports, or partnership inquiries."
);

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
