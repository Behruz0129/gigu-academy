"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/components/providers/I18nProvider";
import { Icon } from "@/components/ui/Icon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  SectionHeader,
  getSectionHeaderProps,
} from "@/components/ui/SectionHeader";

const ROTATE_INTERVAL_MS = 3800;

const EVENT_IMAGES = {
  "fashion-show": [
    "/images/events/fashion-show-1.jpg",
    "/images/events/fashion-show-2.jpg",
    "/images/events/fashion-show-3.jpg",
  ],
  "turkey-study": [
    "/images/events/turkey-study-1.jpg",
    "/images/events/turkey-study-2.jpg",
  ],
  masterclass: ["/images/events/masterclass-1.jpg"],
  "team-join": ["/images/events/team-join-1.jpg"],
} as const;

type EventItem = (typeof EVENT_IMAGES)[keyof typeof EVENT_IMAGES];

function EventCard({
  slug,
  images,
  icon,
  title,
  text,
}: {
  slug: string;
  images: EventItem;
  icon: React.ComponentProps<typeof Icon>["name"];
  title: string;
  text: string;
}) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = window.setInterval(() => {
      if (document.hidden) return;
      setActiveImage((current) => (current + 1) % images.length);
    }, ROTATE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [images.length]);

  return (
    <div className={`events-card events-card--${slug}`}>
      <div className="events-card-bg">
        {images.map((src, imageIndex) => (
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
          <Icon name={icon} size={20} strokeWidth={1.65} />
        </span>
        <h3 className="events-card-title">{title}</h3>
        <p className="events-card-text">{text}</p>
      </div>
    </div>
  );
}

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
          <SectionHeader dark {...getSectionHeaderProps(t.events)} description="" />
        </ScrollReveal>

        <div className="events-bento">
          {t.events.items.map((item) => (
            <EventCard
              key={item.slug}
              slug={item.slug}
              images={EVENT_IMAGES[item.slug]}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
