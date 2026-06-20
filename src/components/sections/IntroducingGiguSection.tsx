"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/components/providers/I18nProvider";

const INTRO_IMAGE = "/images/introducing-gigu.jpg";
const INTRO_FALLBACK = "/images/introducing-gigu-fallback.svg";

export function IntroducingGiguSection() {
  const { t } = useI18n();
  const [imageSrc, setImageSrc] = useState(INTRO_IMAGE);

  useEffect(() => {
    setImageSrc(INTRO_IMAGE);
  }, []);

  return (
    <section
      id="introducing-gigu"
      className="introducing-gigu"
      aria-labelledby="introducing-gigu-heading"
    >
      <div className="introducing-gigu-bg" aria-hidden="true">
        <div className="introducing-gigu-bg-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt=""
            className="introducing-gigu-bg-image"
            onError={() => setImageSrc(INTRO_FALLBACK)}
          />
        </div>
        <div className="introducing-gigu-bg-vignette" />
        <div className="introducing-gigu-bg-gradient" />
        <div className="introducing-gigu-bg-grain" />
      </div>

      <div className="introducing-gigu-layout">
        <div className="introducing-gigu-spacer" aria-hidden="true" />

        <aside className="introducing-gigu-panel">
          <div className="introducing-gigu-panel-inner">
            <div className="introducing-gigu-intro">
              <span className="badge-secondary badge-secondary--on-dark introducing-gigu-badge">
                {t.introducing.badge}
              </span>

              <h2
                id="introducing-gigu-heading"
                className="introducing-gigu-title"
              >
                {t.introducing.title}{" "}
                <em className="introducing-gigu-title-em">
                  {t.introducing.titleEm}
                </em>
              </h2>

              <p className="introducing-gigu-description">
                {t.introducing.description}
              </p>
              <div className="introducing-gigu-intro-divider" aria-hidden="true" />
            </div>

            <ul className="introducing-gigu-pillars">
              {t.introducing.pillars.map((pillar) => (
                <li key={pillar.index}>
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
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
