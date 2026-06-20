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

        <div className="teachers-track">
          {t.teachers.items.map((teacher, index) => (
            <ScrollReveal
              key={teacher.id}
              delay={80 + index * 70}
              className="teachers-card"
            >
              <div className="teachers-card-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/teachers/teacher-${teacher.id}.jpg`}
                  alt={teacher.name}
                  loading="lazy"
                />
                <div className="teachers-card-photo-shade" />
              </div>
              <div className="teachers-card-body">
                <p className="teachers-card-index">0{teacher.id}</p>
                <h3 className="teachers-card-name">{teacher.name}</h3>
                <dl className="teachers-card-stats">
                  <div>
                    <dt>{t.teachers.experienceLabel}</dt>
                    <dd>{teacher.experience}</dd>
                  </div>
                  <div>
                    <dt>{t.teachers.studentsLabel}</dt>
                    <dd>{teacher.students}</dd>
                  </div>
                </dl>
                <p className="teachers-card-specialty">{teacher.specialty}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
