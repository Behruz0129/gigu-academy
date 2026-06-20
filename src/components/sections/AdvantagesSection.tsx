"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/components/providers/I18nProvider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StatsWhyFloatDecor } from "@/components/sections/StatsWhyFloatDecor";

type AdvantageItem = {
  value: string;
  label: string;
  numericValue: number;
  suffix?: string;
};

function useCountUp(
  target: number,
  duration: number,
  started: boolean,
  suffix = "",
) {
  const [display, setDisplay] = useState(`0${suffix}`);

  useEffect(() => {
    if (!started) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      setDisplay(`${target}${suffix}`);
      return;
    }

    let startTime: number | null = null;
    let frame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      setDisplay(`${current}${suffix}`);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setDisplay(`${target}${suffix}`);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, started, suffix]);

  return display;
}

function AdvantageCard({
  item,
  index,
  started,
}: {
  item: AdvantageItem;
  index: number;
  started: boolean;
}) {
  const animatedValue = useCountUp(
    item.numericValue,
    1800 + index * 200,
    started,
    item.suffix,
  );

  return (
    <ScrollReveal delay={index * 100}>
      <article className="glass-card group p-6 sm:p-8 md:p-10">
        <p className="font-display text-5xl font-medium leading-none text-text-primary transition-all duration-300 group-hover:text-gradient-pink sm:text-6xl md:text-7xl">
          {started ? animatedValue : item.value}
        </p>
        <div className="mt-4 h-px w-8 bg-gradient-pink-line opacity-30 transition-all duration-300 group-hover:w-12 group-hover:opacity-100" />
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
          {item.label}
        </p>
      </article>
    </ScrollReveal>
  );
}

export function AdvantagesSection() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  const items: AdvantageItem[] = [
    {
      value: t.advantages.items.branches.value,
      label: t.advantages.items.branches.label,
      numericValue: 4,
    },
    {
      value: t.advantages.items.graduates.value,
      label: t.advantages.items.graduates.label,
      numericValue: 5000,
      suffix: "+",
    },
    {
      value: t.advantages.items.staff.value,
      label: t.advantages.items.staff.label,
      numericValue: 100,
      suffix: "+",
    },
    {
      value: t.advantages.items.experience.value,
      label: t.advantages.items.experience.label,
      numericValue: 14,
    },
  ];

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="advantages"
      ref={sectionRef}
      className="relative overflow-visible py-16 sm:py-20 md:py-24 lg:py-28"
      aria-label={t.advantages.ariaLabel}
    >
      <StatsWhyFloatDecor />
      <div className="relative z-[1] mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-px bg-border-pink sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <AdvantageCard
              key={item.label}
              item={item}
              index={index}
              started={started}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
