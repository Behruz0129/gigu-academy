"use client";

import { useI18n } from "@/components/providers/I18nProvider";
import { Icon } from "@/components/ui/Icon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  SectionHeader,
  getSectionHeaderProps,
} from "@/components/ui/SectionHeader";
import type { BranchSlug } from "@/lib/i18n/landing-sections";

const BRANCH_IMAGES: Record<BranchSlug, string> = {
  tashkent: "/images/branches/tashkent.jpg",
  andijon: "/images/branches/andijon.jpg",
  fargona: "/images/branches/fargona.jpg",
  samarqand: "/images/branches/samarqand.jpg",
};

export function BranchesSection() {
  const { t } = useI18n();

  return (
    <section
      id="branches"
      className="branches-section"
      aria-label={t.branches.ariaLabel}
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-10">
        <ScrollReveal>
          <SectionHeader dark {...getSectionHeaderProps(t.branches)} />
        </ScrollReveal>

        <div className="branches-grid">
          {t.branches.items.map((branch, index) => (
            <ScrollReveal
              key={branch.slug}
              delay={90 + index * 75}
              className="branches-card"
            >
              <div className="branches-card-media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={BRANCH_IMAGES[branch.slug]}
                  alt={branch.city}
                  loading="lazy"
                />
                <span className="branches-card-city">{branch.city}</span>
              </div>
              <div className="branches-card-info">
                <p className="branches-card-address">
                  <Icon name="mapPin" size={16} />
                  {branch.address}
                </p>
                <a className="branches-card-phone" href={`tel:${branch.phone.replace(/\s/g, "")}`}>
                  {branch.phone}
                </a>
                <a
                  className="branches-card-link"
                  href={branch.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.branches.mapLinkLabel}
                  <Icon name="arrowUpRight" size={14} />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
