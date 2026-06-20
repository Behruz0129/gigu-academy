"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";

type MarketStat = {
  icon: IconName;
  value: string;
  tabLabel: string;
  label: string;
  description: string;
};

type WhyMarketDashboardProps = {
  cta: string;
  ctaHref: string;
  items: MarketStat[];
};

export function WhyMarketDashboard({
  cta,
  ctaHref,
  items,
}: WhyMarketDashboardProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];

  return (
    <div className="why-market">
      <div className="why-market-hero" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="why-market-hero-inner"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="why-market-hero-value text-gradient-pink">
              {active.value}
            </p>
            <p className="why-market-hero-label">{active.label}</p>
            <p className="why-market-hero-desc">{active.description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div
        className="why-market-pills"
        role="tablist"
        aria-label={active.label}
      >
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          const tabId = `why-market-tab-${index}`;

          return (
            <button
              key={item.tabLabel}
              id={tabId}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`why-market-pill ${isActive ? "is-active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="why-market-pill-icon" aria-hidden="true">
                <Icon name={item.icon} size={15} strokeWidth={1.85} />
              </span>
              <span className="why-market-pill-label">{item.tabLabel}</span>
            </button>
          );
        })}
      </div>

      <div className="why-market-footer">
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="why-market-cta"
        >
          <span className="why-market-cta-text">{cta}</span>
          <span className="why-market-cta-icon" aria-hidden="true">
            <Icon name="arrowUpRight" size={20} strokeWidth={2.25} />
          </span>
        </a>
        <span className="why-market-footer-divider" aria-hidden="true" />
        <div className="why-market-footer-logo-slot">
          <Image
            src="/hhru.png"
            alt="hh.ru"
            width={88}
            height={28}
            className="why-market-footer-logo"
          />
        </div>
      </div>
    </div>
  );
}
