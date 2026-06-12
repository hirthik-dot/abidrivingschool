import { PageTransition } from "@/components/layout/PageTransition";
import { Hero } from "@/components/sections/home/Hero";
import { ServicesGrid } from "@/components/sections/home/ServicesGrid";
import { SimulatorSection } from "@/components/sections/home/SimulatorSection";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { LocationSection } from "@/components/sections/home/LocationSection";
import { FinalCTA } from "@/components/sections/home/FinalCTA";

export default function Home() {
  return (
    <PageTransition>
      <main className="flex flex-col flex-1">
        <Hero />
        <ServicesGrid />
        <SimulatorSection />
        <WhyChooseUs />
        <Testimonials />
        <LocationSection />
        <FinalCTA />
      </main>
    </PageTransition>
  );
}
