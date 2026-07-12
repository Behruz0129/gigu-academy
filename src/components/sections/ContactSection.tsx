"use client";

import { useI18n } from "@/components/providers/I18nProvider";
import { LeadForm } from "@/components/forms/LeadForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  SectionHeader,
  getSectionHeaderProps,
} from "@/components/ui/SectionHeader";

export function ContactSection() {
  const { t } = useI18n();
  const c = t.contact;

  return (
    <section id="enroll" className="contact-section" aria-label={c.ariaLabel}>
      <div className="contact-section-glow" aria-hidden="true" />

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="contact-layout">
          <ScrollReveal className="contact-head">
            <SectionHeader {...getSectionHeaderProps(c)} />
          </ScrollReveal>

          <ScrollReveal variant="scale" className="contact-form-wrap" delay={60}>
            <LeadForm source="web" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
