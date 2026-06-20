"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useI18n } from "@/components/providers/I18nProvider";
import { Icon } from "@/components/ui/Icon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  SectionHeader,
  getSectionHeaderProps,
} from "@/components/ui/SectionHeader";

export function FaqSection() {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="faq-section" aria-label={t.faq.ariaLabel}>
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="faq-layout">
          <ScrollReveal className="faq-intro">
            <SectionHeader {...getSectionHeaderProps(t.faq)} />
          </ScrollReveal>

          <ul className="faq-list">
            {t.faq.items.map((item, index) => {
              const isOpen = openIndex === index;
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-trigger-${index}`;

              return (
                <ScrollReveal key={item.index} delay={80 + index * 60} as="li">
                  <article className={`faq-item${isOpen ? " faq-item--open" : ""}`}>
                    <button
                      id={buttonId}
                      type="button"
                      className="faq-trigger"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() =>
                        setOpenIndex((current) =>
                          current === index ? null : index,
                        )
                      }
                    >
                      <span className="faq-index">{item.index}</span>
                      <span className="faq-question">{item.question}</span>
                      <span
                        className={`faq-toggle${isOpen ? " faq-toggle--open" : ""}`}
                        aria-hidden="true"
                      >
                        <Icon name="plus" size={18} strokeWidth={2} />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          className="faq-panel"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.32,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          <p className="faq-answer">{item.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </article>
                </ScrollReveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
