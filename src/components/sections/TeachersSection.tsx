"use client";

import { useState } from "react";
import { useI18n } from "@/components/providers/I18nProvider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  SectionHeader,
  getSectionHeaderProps,
} from "@/components/ui/SectionHeader";

type Teacher = {
  id: string;
  name: string;
  experience: string;
  students: string;
  specialty: string;
};

export function TeachersSection() {
  const { t } = useI18n();
  const [paused, setPaused] = useState(false);
  const teachers = t.teachers.items;

  const renderInner = (teacher: Teacher) => (
    <>
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
    </>
  );

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

        <div
          className="teachers-viewport"
          onPointerDown={() => setPaused(true)}
          onPointerUp={() => setPaused(false)}
          onPointerLeave={() => setPaused(false)}
          onPointerCancel={() => setPaused(false)}
        >
          <div className={`teachers-grid${paused ? " is-paused" : ""}`}>
            {teachers.map((teacher, index) => (
              <ScrollReveal
                key={teacher.id}
                delay={60 + (index % 4) * 70}
                className="teachers-card"
              >
                {renderInner(teacher)}
              </ScrollReveal>
            ))}
            {teachers.map((teacher) => (
              <div
                key={`dup-${teacher.id}`}
                className="teachers-card teachers-card--dup"
                aria-hidden="true"
              >
                {renderInner(teacher)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
