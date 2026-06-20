"use client";

import { useI18n } from "@/components/providers/I18nProvider";
import { Icon } from "@/components/ui/Icon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  SectionHeader,
  getSectionHeaderProps,
} from "@/components/ui/SectionHeader";

type CourseItem = {
  id: string;
  label: string;
  title: string;
  age: string;
  featured?: boolean;
  specs: Array<{ label: string; value: string }>;
};

function CoursePricingCard({
  course,
  featuredBadge,
  enrollCta,
}: {
  course: CourseItem;
  featuredBadge: string;
  enrollCta: string;
}) {
  const [heroSpec, ...features] = course.specs;

  return (
    <article
      className={`pricing-card${course.featured ? " pricing-card--featured" : ""}`}
    >
      <div className="pricing-card-border" aria-hidden="true" />
      <div className="pricing-card-inner">
        {course.featured ? (
          <span className="pricing-card-ribbon">{featuredBadge}</span>
        ) : null}

        <div className="pricing-card-top">
          <span className="pricing-card-tier">{course.label}</span>
          <span className="pricing-card-age">{course.age}</span>
        </div>

        <div className="pricing-card-hero">
          <p className="pricing-card-hero-value">{heroSpec?.value}</p>
          <p className="pricing-card-hero-label">{heroSpec?.label}</p>
        </div>

        <h3 className="pricing-card-title">{course.title}</h3>

        <ul className="pricing-card-features">
          {features.map((spec) => (
            <li key={spec.label}>
              <span className="pricing-card-check" aria-hidden="true">
                <Icon name="check" size={12} strokeWidth={2.5} />
              </span>
              <span className="pricing-card-feature-text">
                <strong>{spec.value}</strong>
                <span>{spec.label}</span>
              </span>
            </li>
          ))}
        </ul>

        <a
          href="#enroll"
          className={`pricing-card-cta${course.featured ? " btn-shiny" : " pricing-card-cta--outline"}`}
        >
          <span>{enrollCta}</span>
        </a>
      </div>
    </article>
  );
}

export function CoursesSection() {
  const { t } = useI18n();

  return (
    <section
      id="courses"
      className="courses-section"
      aria-label={t.courses.ariaLabel}
    >
      <div className="courses-section-glow" aria-hidden="true" />

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-10">
        <ScrollReveal>
          <SectionHeader {...getSectionHeaderProps(t.courses)} />
        </ScrollReveal>

        <div className="pricing-grid">
          {t.courses.items.map((course, index) => (
            <ScrollReveal key={course.id} delay={100 + index * 90}>
              <CoursePricingCard
                course={course}
                featuredBadge={t.courses.featuredBadge}
                enrollCta={t.courses.enrollCta}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
