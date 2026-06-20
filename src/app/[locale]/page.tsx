import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AdvantagesSection } from "@/components/sections/AdvantagesSection";
import { IntroducingGiguSection } from "@/components/sections/IntroducingGiguSection";
import { WhySection } from "@/components/sections/WhySection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AdvantagesSection />
        <WhySection />
        <IntroducingGiguSection />
      </main>
      <div id="enroll" className="sr-only" aria-hidden="true" />
    </>
  );
}
