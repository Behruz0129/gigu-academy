"use client";

import { useI18n } from "@/components/providers/I18nProvider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WhyAudienceAccordion } from "@/components/sections/WhyAudienceAccordion";
import { WhyMarketDashboard } from "@/components/sections/WhyMarketDashboard";
import { WhyPostCarousel } from "@/components/sections/WhyPostCarousel";

export function WhySection() {
  const { t } = useI18n();

  return (
    <section
      id="about"
      className="relative z-[1] pt-8 pb-16 sm:pt-10 sm:pb-20 md:pt-12 md:pb-24 lg:pt-14 lg:pb-28"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-10">
        <ScrollReveal>
          <header>
            <div className="max-w-3xl">
              <span className="badge-secondary mb-5">{t.why.badge}</span>
              <h2
                id="why-heading"
                className="font-display text-4xl font-medium leading-tight text-text-primary sm:text-5xl md:text-6xl"
              >
                {t.why.title}{" "}
                <em className="font-display italic text-gradient-pink">
                  {t.why.titleEm}
                </em>
              </h2>
            </div>
          </header>
        </ScrollReveal>

        <div className="why-content-grid mt-10 md:mt-14 lg:mt-16">
          <ScrollReveal className="why-content-col why-content-col--posts">
            <WhyPostCarousel posts={t.why.posts} />
          </ScrollReveal>

          <ScrollReveal delay={120} className="why-content-col why-content-col--audience">
            <WhyAudienceAccordion
              title={t.why.audience.title}
              items={t.why.audience.items}
            />
          </ScrollReveal>

          <ScrollReveal
            delay={200}
            className="why-content-col why-content-col--extra"
          >
            <WhyMarketDashboard
              cta={t.why.market.cta}
              ctaHref={t.why.market.ctaHref}
              items={t.why.market.items}
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
