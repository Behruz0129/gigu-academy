"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
  const items = t.branches.items;
  const len = items.length;
  const loopItems = [...items, ...items, ...items];

  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(len);
  const [animate, setAnimate] = useState(false);
  const [step, setStep] = useState(0);
  const [inset, setInset] = useState(16);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".branches-card");
    if (!card) return;
    const styles = getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || "0") || 0;
    const cardW = card.offsetWidth;
    setStep(cardW + gap);
    setInset((window.innerWidth - cardW) / 2);
  }, []);

  useEffect(() => {
    measure();
    const raf = requestAnimationFrame(() => setAnimate(true));
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const go = useCallback((dir: 1 | -1) => {
    setAnimate(true);
    setIndex((current) => current + dir);
  }, []);

  const handleTransitionEnd = useCallback(() => {
    setIndex((current) => {
      if (current >= 2 * len) {
        setAnimate(false);
        return current - len;
      }
      if (current < len) {
        setAnimate(false);
        return current + len;
      }
      return current;
    });
  }, [len]);

  useEffect(() => {
    if (animate) return;
    const raf = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(raf);
  }, [animate]);

  const touchX = useRef<number | null>(null);
  const onTouchStart = (event: React.TouchEvent) => {
    touchX.current = event.touches[0].clientX;
  };
  const onTouchEnd = (event: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = event.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    touchX.current = null;
  };

  const translateX = inset - index * step;

  return (
    <section
      id="branches"
      className="branches-section"
      aria-label={t.branches.ariaLabel}
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-10">
        <ScrollReveal>
          <div className="branches-header">
            <SectionHeader
              dark
              {...getSectionHeaderProps(t.branches)}
              description=""
            />
            <div className="branches-controls">
              <button
                type="button"
                className="branches-arrow"
                onClick={() => go(-1)}
                aria-label="Oldingi"
              >
                <Icon name="chevronLeft" size={20} strokeWidth={2} />
              </button>
              <button
                type="button"
                className="branches-arrow"
                onClick={() => go(1)}
                aria-label="Keyingi"
              >
                <Icon name="chevronRight" size={20} strokeWidth={2} />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="branches-carousel">
        <div
          ref={trackRef}
          className="branches-track"
          style={{
            transform: `translate3d(${translateX}px, 0, 0)`,
            transition: animate ? undefined : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {loopItems.map((branch, i) => {
            const isClone = i < len || i >= 2 * len;
            return (
              <article
                key={`${branch.slug}-${i}`}
                className="branches-card"
                aria-hidden={isClone || undefined}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={BRANCH_IMAGES[branch.slug]}
                  alt={branch.city}
                  loading="lazy"
                  decoding="async"
                  className="branches-card-img"
                />
                <div className="branches-card-shade" />
                <div className="branches-card-info">
                  <div className="branches-card-text">
                    <h3 className="branches-card-city">{branch.city}</h3>
                    <p className="branches-card-address">{branch.address}</p>
                  </div>
                  <div className="branches-card-actions">
                    <a
                      className="branches-card-action"
                      href={`tel:${branch.phone.replace(/\s/g, "")}`}
                      aria-label={branch.phone}
                      title={branch.phone}
                      tabIndex={isClone ? -1 : undefined}
                    >
                      <Icon name="phone" size={16} strokeWidth={2} />
                    </a>
                    <a
                      className="branches-card-action"
                      href={branch.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t.branches.mapLinkLabel}
                      title={t.branches.mapLinkLabel}
                      tabIndex={isClone ? -1 : undefined}
                    >
                      <Icon name="mapPin" size={16} strokeWidth={2} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
