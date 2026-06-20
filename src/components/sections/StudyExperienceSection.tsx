"use client";

import { useI18n } from "@/components/providers/I18nProvider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const STUDY_IMAGES = {
  "assistant-teacher": "/images/study-experience/assistant-teacher.jpg",
  "flexible-schedule": "/images/study-experience/flexible-schedule.jpg",
  "equipped-workspace": "/images/study-experience/equipped-workspace.jpg",
  "sew-your-clothes": "/images/study-experience/sew-your-clothes.jpg",
} as const;

type StudyImageSlug = keyof typeof STUDY_IMAGES;

export function StudyExperienceSection() {
  const { t } = useI18n();

  return (
    <section
      id="study-experience"
      className="study-experience"
      aria-labelledby="study-experience-heading"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-10">
        <ScrollReveal>
          <header className="max-w-3xl">
            <span className="badge-secondary mb-5">{t.studyExperience.badge}</span>
            <h2
              id="study-experience-heading"
              className="font-display text-4xl font-medium leading-tight text-text-primary sm:text-5xl md:text-6xl"
            >
              {t.studyExperience.title}{" "}
              <em className="font-display italic text-gradient-pink">
                {t.studyExperience.titleEm}
              </em>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {t.studyExperience.description}
            </p>
          </header>
        </ScrollReveal>

        <div className="study-experience-grid">
          {t.studyExperience.features.map((feature, index) => (
            <ScrollReveal
              key={feature.slug}
              delay={120 + index * 90}
              className="study-experience-cell"
            >
              <h3 className="study-experience-cell-title">{feature.title}</h3>
              <p className="study-experience-cell-text">{feature.text}</p>
              <div className="study-experience-media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={STUDY_IMAGES[feature.slug as StudyImageSlug]}
                  alt={feature.title}
                  className="study-experience-media-image"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
