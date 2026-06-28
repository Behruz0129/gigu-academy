"use client";

import { useI18n } from "@/components/providers/I18nProvider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  SectionHeader,
  getSectionHeaderProps,
} from "@/components/ui/SectionHeader";

export function TeachersSection() {
  const { t } = useI18n();

  return (
    <section
      id="teachers"
      className="teachers-section"
      aria-label={t.teachers.ariaLabel}
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-10">
        <ScrollReveal>
          <SectionHeader {...getSectionHeaderProps(t.teachers)} />
        </ScrollReveal>

        <div className="teachers-grid">
          {t.teachers.items.map((teacher, index) => (
            <ScrollReveal
              key={teacher.id}
              delay={60 + (index % 4) * 70}
              className="teachers-card"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/teachers/teacher-${teacher.id}.jpg`}
                alt={teacher.name}
                loading="lazy"
                decoding="async"
                className="teachers-card-img"
              />
              <div className="teachers-card-overlay" />
              <div className="teachers-card-content">
                <h3 className="teachers-card-name">{teacher.name}</h3>
                <p className="teachers-card-specialty">{teacher.specialty}</p>
                <dl className="teachers-card-stats">
                  <div className="teachers-card-stat">
                    <dt>{t.teachers.experienceLabel}</dt>
                    <dd>{teacher.experience}</dd>
                  </div>
                  <div className="teachers-card-stat">
                    <dt>{t.teachers.studentsLabel}</dt>
                    <dd>{teacher.students}</dd>
                  </div>
                </dl>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
