"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/components/providers/I18nProvider";
import { Icon, type IconName } from "@/components/ui/Icon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StatsWhyFloatDecor } from "@/components/sections/StatsWhyFloatDecor";

const STATS_VIDEO = "/videos/stats.mp4";
const STATS_POSTER = "/images/stats/poster.jpg";

type AdvantageItem = {
  key: string;
  value: string;
  label: string;
  numericValue: number;
  suffix?: string;
  note?: string;
  icon: IconName;
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

    const format = (n: number) => `${n.toLocaleString("en-US")}${suffix}`;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      setDisplay(format(target));
      return;
    }

    let startTime: number | null = null;
    let frame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      setDisplay(format(current));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setDisplay(format(target));
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, started, suffix]);

  return display;
}

function StatCard({
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
    <ScrollReveal
      delay={index * 90}
      as="article"
      className={`stats-card stats-card--${item.key}`}
    >
      <span className="stats-card-icon" aria-hidden="true">
        <Icon name={item.icon} size={44} strokeWidth={1.5} />
      </span>
      <div className="stats-card-text">
        <p className="stats-card-value">
          {started ? animatedValue : item.value}
        </p>
        <p className="stats-card-label">{item.label}</p>
        {item.note ? <p className="stats-card-note">{item.note}</p> : null}
      </div>
    </ScrollReveal>
  );
}

export function AdvantagesSection() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const items: AdvantageItem[] = [
    {
      key: "branches",
      value: t.advantages.items.branches.value,
      label: t.advantages.items.branches.label,
      numericValue: 4,
      icon: "building",
    },
    {
      key: "graduates",
      value: t.advantages.items.graduates.value,
      label: t.advantages.items.graduates.label,
      numericValue: 5000,
      suffix: "+",
      icon: "graduation",
    },
    {
      key: "staff",
      value: t.advantages.items.staff.value,
      label: t.advantages.items.staff.label,
      numericValue: 100,
      suffix: "+",
      icon: "users",
    },
    {
      key: "experience",
      value: t.advantages.items.experience.value,
      label: t.advantages.items.experience.label,
      numericValue: 14,
      suffix: t.advantages.items.experience.value.replace(/[\d,]/g, ""),
      icon: "award",
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

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {
      /* play bloklangan bo'lsa hech narsa qilmaymiz */
    });
  };

  const handlePause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      handlePlay();
    } else {
      video.pause();
    }
  };

  return (
    <section
      id="advantages"
      ref={sectionRef}
      className="stats-section relative overflow-visible py-16 sm:py-20 md:py-24 lg:py-28"
      aria-label={t.advantages.ariaLabel}
    >
      <StatsWhyFloatDecor />
      <div className="relative z-[1] mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="stats-layout">
          <ScrollReveal className="stats-video-wrap">
            <div className={`stats-video${playing ? " is-playing" : ""}`}>
              <video
                ref={videoRef}
                className="stats-video-el"
                poster={STATS_POSTER}
                playsInline
                preload="metadata"
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onEnded={() => setPlaying(false)}
                onClick={handlePause}
              >
                <source src={STATS_VIDEO} type="video/mp4" />
              </video>

              <button
                type="button"
                className="stats-video-play"
                aria-label={t.advantages.playLabel}
                onClick={handlePlay}
              >
                <span className="stats-video-play-ring" aria-hidden="true" />
                <Icon name="play" size={24} strokeWidth={1.75} />
              </button>
            </div>
          </ScrollReveal>

          <div className="stats-bento">
            {items.map((item, index) => (
              <StatCard
                key={item.key}
                item={item}
                index={index}
                started={started}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
