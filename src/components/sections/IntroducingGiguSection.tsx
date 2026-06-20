"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useI18n } from "@/components/providers/I18nProvider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const INTRO_IMAGE = "/images/introducing-gigu.jpg";
const INTRO_FALLBACK = "/images/introducing-gigu-fallback.svg";

export function IntroducingGiguSection() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const [imageSrc, setImageSrc] = useState(INTRO_IMAGE);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  useEffect(() => {
    setImageSrc(INTRO_IMAGE);
  }, []);

  return (
    <section
      id="introducing-gigu"
      ref={sectionRef}
      className="introducing-gigu"
      aria-labelledby="introducing-gigu-heading"
    >
      <div className="introducing-gigu-bg" aria-hidden="true">
        <motion.div className="introducing-gigu-bg-media" style={{ y: bgY }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt=""
            className="introducing-gigu-bg-image"
            onError={() => setImageSrc(INTRO_FALLBACK)}
          />
        </motion.div>
        <div className="introducing-gigu-bg-vignette" />
        <div className="introducing-gigu-bg-gradient" />
        <div className="introducing-gigu-bg-grain" />
      </div>

      <div className="introducing-gigu-layout">
        <div className="introducing-gigu-spacer" aria-hidden="true" />

        <aside className="introducing-gigu-panel">
          <div className="introducing-gigu-panel-inner">
            <ScrollReveal>
              <span className="badge-secondary introducing-gigu-badge">
                {t.introducing.badge}
              </span>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <h2
                id="introducing-gigu-heading"
                className="introducing-gigu-title"
              >
                {t.introducing.title}{" "}
                <em className="introducing-gigu-title-em">
                  {t.introducing.titleEm}
                </em>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <p className="introducing-gigu-description">
                {t.introducing.description}
              </p>
            </ScrollReveal>

            <ul className="introducing-gigu-pillars">
              {t.introducing.pillars.map((pillar, index) => (
                <ScrollReveal
                  key={pillar.index}
                  delay={240 + index * 90}
                  as="li"
                >
                  <article className="introducing-gigu-pillar">
                    <span className="introducing-gigu-pillar-index">
                      {pillar.index}
                    </span>
                    <div>
                      <h3 className="introducing-gigu-pillar-title">
                        {pillar.title}
                      </h3>
                      <p className="introducing-gigu-pillar-text">
                        {pillar.text}
                      </p>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </ul>

            <ScrollReveal delay={700}>
              <div className="introducing-gigu-footer">
                <span className="introducing-gigu-footer-line" />
                <span className="introducing-gigu-footer-label">
                  GIGU Moda Akademiyasi
                </span>
              </div>
            </ScrollReveal>
          </div>
        </aside>
      </div>
    </section>
  );
}
