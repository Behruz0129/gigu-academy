"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/components/providers/I18nProvider";
import { Icon } from "@/components/ui/Icon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  SectionHeader,
  getSectionHeaderProps,
} from "@/components/ui/SectionHeader";

const IMAGES_PER_CARD = 4;
const ROTATE_INTERVAL_MS = 3800;

const EVENT_IMAGES = {
  "fashion-show": [
    "/images/events/fashion-show-1.jpg",
    "/images/events/fashion-show-2.jpg",
    "/images/events/fashion-show-3.jpg",
    "/images/events/fashion-show-4.jpg",
  ],
  "turkey-study": [
    "/images/events/turkey-study-1.jpg",
    "/images/events/turkey-study-2.jpg",
    "/images/events/turkey-study-3.jpg",
    "/images/events/turkey-study-4.jpg",
  ],
  masterclass: [
    "/images/events/masterclass-1.jpg",
    "/images/events/masterclass-2.jpg",
    "/images/events/masterclass-3.jpg",
    "/images/events/masterclass-4.jpg",
  ],
  "team-join": [
    "/images/events/team-join-1.jpg",
    "/images/events/team-join-2.jpg",
    "/images/events/team-join-3.jpg",
    "/images/events/team-join-4.jpg",
  ],
} as const;

export function EventsSection() {
  const { t } = useI18n();
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (document.hidden) return;
      setActiveImage((current) => (current + 1) % IMAGES_PER_CARD);
    }, ROTATE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="events"
      className="events-section"
      aria-label={t.events.ariaLabel}
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-10">
        <ScrollReveal>
          <SectionHeader dark {...getSectionHeaderProps(t.events)} description="" />
        </ScrollReveal>

        <div className="events-bento">
          {t.events.items.map((item, index) => (
            <ScrollReveal
              key={item.slug}
              delay={100 + index * 80}
              className={`events-card events-card--${item.slug}`}
            >
              <div className="events-card-bg">
                {EVENT_IMAGES[item.slug].map((src, imageIndex) => (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    key={src}
                    src={src}
                    alt=""
                    loading={imageIndex === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className={`events-card-img${
                      imageIndex === activeImage ? " is-active" : ""
                    }`}
                  />
                ))}
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
