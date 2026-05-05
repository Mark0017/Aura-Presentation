import type { Metadata } from "next";
import Contents1 from "@/components/Chapter1/Contents-1";

export const metadata: Metadata = {
  title: "Chapter 1 — Introduction | AURA",
};

export default function Chapter1Page() {
  return <Contents1 />;
}
