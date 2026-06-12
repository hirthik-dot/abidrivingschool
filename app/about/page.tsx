import { PageTransition } from "@/components/layout/PageTransition";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { StatsRow } from "@/components/sections/about/StatsRow";
import { Timeline } from "@/components/sections/about/Timeline";
import { Values } from "@/components/sections/about/Values";

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="flex flex-col flex-1">
        <AboutHero />
        <StatsRow />
        <Timeline />
        <Values />
      </main>
    </PageTransition>
  );
}
