"use client";

import { useI18n } from "@/components/providers/I18nProvider";
import { Icon } from "@/components/ui/Icon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  SectionHeader,
  getSectionHeaderProps,
} from "@/components/ui/SectionHeader";

const EVENT_IMAGES = {
  "fashion-show": "/images/events/fashion-show.jpg",
  "turkey-study": "/images/events/turkey-study.jpg",
  masterclass: "/images/events/masterclass.jpg",
  "team-join": "/images/events/team-join.jpg",
} as const;

export function EventsSection() {
  const { t } = useI18n();

  return (
    <section
      id="events"
      className="events-section"
      aria-label={t.events.ariaLabel}
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-10">
        <ScrollReveal>
          <SectionHeader dark {...getSectionHeaderProps(t.events)} />
        </ScrollReveal>

        <div className="events-bento">
          {t.events.items.map((item, index) => (
            <ScrollReveal
              key={item.slug}
              delay={100 + index * 80}
              className={`events-card events-card--${item.slug}`}
            >
              <div className="events-card-bg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={EVENT_IMAGES[item.slug]} alt="" loading="lazy" />
                <div className="events-card-shade" />
              </div>
              <div className="events-card-body">
                <span className="events-card-icon">
                  <Icon name={item.icon} size={20} strokeWidth={1.65} />
                </span>
                <h3 className="events-card-title">{item.title}</h3>
                <p className="events-card-text">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
