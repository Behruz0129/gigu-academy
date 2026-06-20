"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";

type AudienceItem = {
  title: string;
  description: string;
  icon: IconName;
};

type WhyAudienceAccordionProps = {
  title: string;
  items: AudienceItem[];
};

export function WhyAudienceAccordion({ title, items }: WhyAudienceAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="why-audience-surface">
      <div className="why-audience">
        <h3 className="why-audience-heading">{title}</h3>
        <ul className="why-audience-list">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `why-audience-panel-${index}`;
          const buttonId = `why-audience-trigger-${index}`;

          return (
            <li key={item.title} className="why-audience-item">
              <button
                id={buttonId}
                type="button"
                className="why-audience-trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
              >
                <span className="why-audience-trigger-main">
                  <span className="why-audience-icon-wrap" aria-hidden="true">
                    <Icon name={item.icon} size={22} strokeWidth={1.65} />
                  </span>
                  <span className="why-audience-trigger-title">{item.title}</span>
                </span>
                <span className="why-audience-toggle" aria-hidden="true">
                  <span
                    className={`why-audience-toggle-icon ${isOpen ? "is-open" : ""}`}
                  >
                    <Icon name="plus" size={18} strokeWidth={2} />
                  </span>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="why-audience-panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="why-audience-desc">{item.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
      </div>
    </div>
  );
}
