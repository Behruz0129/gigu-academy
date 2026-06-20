"use client";

import { useI18n } from "@/components/providers/I18nProvider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  SectionHeader,
  getSectionHeaderProps,
} from "@/components/ui/SectionHeader";

export function ResultsSection() {
  const { t } = useI18n();

  return (
    <section
      id="results"
      className="results-section"
      aria-label={t.results.ariaLabel}
    >
      <div className="results-section-inner mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="results-layout">
          <ScrollReveal className="results-intro">
            <SectionHeader dark {...getSectionHeaderProps(t.results)} />
          </ScrollReveal>

          <div className="results-cards">
            {t.results.items.map((item, index) => (
              <ScrollReveal
                key={item.id}
                delay={120 + index * 100}
                className={`results-card${item.placeholder ? " results-card--placeholder" : ""}`}
              >
                <span className="results-card-badge">{item.role}</span>
                <h3 className="results-card-name">{item.name}</h3>
                <p className="results-card-text">
                  {item.placeholder ? t.results.placeholder : item.text}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
