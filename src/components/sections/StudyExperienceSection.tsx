"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useI18n } from "@/components/providers/I18nProvider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Icon } from "@/components/ui/Icon";

const STUDY_IMAGES = {
  "assistant-teacher": "/images/study-experience/assistant-teacher.jpg",
  "flexible-schedule": "/images/study-experience/flexible-schedule.jpg",
  "equipped-workspace": "/images/study-experience/equipped-workspace.jpg",
  "sew-your-clothes": "/images/study-experience/sew-your-clothes.jpg",
} as const;

type StudyImageSlug = keyof typeof STUDY_IMAGES;

export function StudyExperienceSection() {
  const { t } = useI18n();
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const { scrollLeft, scrollWidth, clientWidth } = track;
    setCanPrev(scrollLeft > 4);
    setCanNext(scrollLeft + clientWidth < scrollWidth - 4);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateArrows();
    track.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      track.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scrollByCard = useCallback((direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.querySelector<HTMLElement>(
      ".study-experience-card",
    );
    const cardWidth = firstCard?.offsetWidth ?? track.clientWidth * 0.8;
    const gap = 16;
    track.scrollBy({ left: direction * (cardWidth + gap), behavior: "smooth" });
  }, []);

  return (
    <section
      id="study-experience"
      className="study-experience"
      aria-labelledby="study-experience-heading"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-10">
        <ScrollReveal>
          <header className="study-experience-header">
            <div className="max-w-3xl">
              <span className="badge-secondary mb-5">
                {t.studyExperience.badge}
              </span>
              <h2
                id="study-experience-heading"
                className="font-display text-4xl font-medium leading-tight text-text-primary sm:text-5xl md:text-6xl"
              >
                {t.studyExperience.title}{" "}
                <em className="font-display italic text-gradient-pink">
                  {t.studyExperience.titleEm}
                </em>
              </h2>
            </div>

            <div className="study-experience-controls" aria-hidden="true">
              <button
                type="button"
                className="study-experience-arrow"
                onClick={() => scrollByCard(-1)}
                disabled={!canPrev}
                aria-label="Oldingi"
              >
                <Icon name="chevronLeft" size={20} strokeWidth={2} />
              </button>
              <button
                type="button"
                className="study-experience-arrow"
                onClick={() => scrollByCard(1)}
                disabled={!canNext}
                aria-label="Keyingi"
              >
                <Icon name="chevronRight" size={20} strokeWidth={2} />
              </button>
            </div>
          </header>
        </ScrollReveal>

        <div className="study-experience-track" ref={trackRef}>
          {t.studyExperience.features.map((feature, index) => (
            <ScrollReveal
              key={feature.slug}
              delay={120 + index * 90}
              className="study-experience-card"
            >
              <div className="study-experience-card-media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={STUDY_IMAGES[feature.slug as StudyImageSlug]}
                  alt={feature.title}
                  className="study-experience-card-image"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <h3 className="study-experience-card-title">{feature.title}</h3>
              <p className="study-experience-card-text">{feature.text}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
