import { Navbar } from "@/components/layout/Navbar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HeroSection } from "@/components/sections/HeroSection";
import { AdvantagesSection } from "@/components/sections/AdvantagesSection";
import { IntroducingGiguSection } from "@/components/sections/IntroducingGiguSection";
import { StudyExperienceSection } from "@/components/sections/StudyExperienceSection";
import { WhySection } from "@/components/sections/WhySection";
import { EventsSection } from "@/components/sections/EventsSection";
import { TeachersSection } from "@/components/sections/TeachersSection";
import { BranchesSection } from "@/components/sections/BranchesSection";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { FaqSection } from "@/components/sections/FaqSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AdvantagesSection />
        <WhySection />
        <IntroducingGiguSection />
        <StudyExperienceSection />
        <EventsSection />
        <TeachersSection />
        <BranchesSection />
        <CoursesSection />
        <ContactSection />
        <ResultsSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  );
}
