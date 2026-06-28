"use client";

import { useState } from "react";
import { useI18n } from "@/components/providers/I18nProvider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  SectionHeader,
  getSectionHeaderProps,
} from "@/components/ui/SectionHeader";
import { SocialIcon } from "@/components/ui/SocialIcon";

const RESULT_SHOTS = Array.from(
  { length: 8 },
  (_, i) => `/images/results/result-${i + 1}.jpg`,
);

export function ResultsSection() {
  const { t } = useI18n();
  const [paused, setPaused] = useState(false);

  return (
    <section
      id="results"
      className="results-section"
      aria-label={t.results.ariaLabel}
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-10">
        <ScrollReveal>
          <SectionHeader {...getSectionHeaderProps(t.results)} />
        </ScrollReveal>
      </div>

      <div
        className="results-wall"
        onPointerDown={() => setPaused(true)}
        onPointerUp={() => setPaused(false)}
        onPointerLeave={() => setPaused(false)}
        onPointerCancel={() => setPaused(false)}
      >
        <div className={`results-track${paused ? " is-paused" : ""}`}>
          {[...RESULT_SHOTS, ...RESULT_SHOTS].map((src, index) => (
            <figure
              key={`${src}-${index}`}
              className="results-shot"
              aria-hidden={index >= RESULT_SHOTS.length || undefined}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                loading="lazy"
                decoding="async"
                className="results-shot-img"
              />
              <span className="results-shot-badge">
                <SocialIcon name="instagram" size={15} />
              </span>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
