import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import WhatIsResearch from "@/components/home/WhatIsResearch";
import ResearchPillars from "@/components/home/ResearchPillars";
import ExperimentGroups from "@/components/home/ExperimentGroups";
import KPISection from "@/components/home/KPISection";
import TimelineSection from "@/components/home/TimelineSection";
import ReferenceHighlight from "@/components/home/ReferenceHighlight";

export const metadata: Metadata = {
  title: "EICP + Hydrophobic FYP | Flood-Resilient Foundation Engineering",
  description:
    "Final Year Project research on combined EICP biocementation and hydrophobic treatment for flood-resilient shallow foundation soils. Geotechnical engineering FYP.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <WhatIsResearch />
      <ResearchPillars />
      <ExperimentGroups />
      <KPISection />
      <TimelineSection />
      <ReferenceHighlight />
    </>
  );
}
