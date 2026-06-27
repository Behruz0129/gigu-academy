"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/components/providers/I18nProvider";
import { Icon } from "@/components/ui/Icon";
import { Marquee } from "@/components/ui/Marquee";

export function HeroSection() {
  const { t } = useI18n();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const markReady = () => setVideoReady(true);

    const tryPlay = () => {
      video.play().catch(() => {
        /* autoplay bloklangan — poster/skeleton qoladi */
      });
    };

    if (video.readyState >= 2) {
      markReady();
      tryPlay();
    }

    video.addEventListener("loadeddata", markReady);
    video.addEventListener("canplay", markReady);
    video.addEventListener("playing", markReady);
    tryPlay();

    return () => {
      video.removeEventListener("loadeddata", markReady);
      video.removeEventListener("canplay", markReady);
      video.removeEventListener("playing", markReady);
    };
  }, []);

  return (
    <section
      id="showcase"
      className="relative flex min-h-[70svh] flex-col justify-end overflow-hidden bg-bg-dark md:min-h-[100svh]"
      aria-label="Showcase"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div
          className={`hero-poster absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ${
            videoReady ? "opacity-0" : "opacity-100"
          }`}
          style={{ backgroundImage: "url('/images/hero-poster.svg')" }}
        />
        {!videoReady && (
          <div className="hero-poster-skeleton skeleton-shimmer absolute inset-0" />
        )}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`hero-video absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-bg-dark/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/55 to-transparent" />
      </div>

      <div className="relative z-[1] mx-auto flex w-full max-w-[1280px] flex-1 flex-col justify-end px-4 pb-6 pt-20 sm:px-6 sm:pb-12 sm:pt-32 md:px-8 md:pb-16 lg:px-10 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="hero-content max-w-4xl text-left"
        >
          <h1 className="font-display hero-title">
            <span className="hero-title-line hero-title-line--muted">
              {t.hero.titleLine1}
            </span>
            <span className="hero-title-line hero-title-line--accent">
              {t.hero.titleLine2}
            </span>
            <span className="hero-title-line hero-title-line--solid">
              {t.hero.titleLine3}
            </span>
          </h1>

          <p className="hero-subtitle mt-6 max-w-xl font-body text-[0.9375rem] leading-relaxed text-white/80 sm:mt-7 sm:text-base md:max-w-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex justify-start sm:mt-10">
            <a href="#enroll" className="btn-shiny w-full sm:w-auto">
              <span className="inline-flex items-center gap-2">
                {t.hero.cta}
                <Icon name="scissors" size={15} strokeWidth={2} />
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="relative z-[1] border-t border-white/10 py-4">
        <Marquee items={t.hero.marquee} />
      </div>
    </section>
  );
}
