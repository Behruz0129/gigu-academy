"use client";

import { useEffect, useRef, useState } from "react";

export type RevealVariant =
  | "fade"
  | "rise"
  | "scale"
  | "slide-left"
  | "slide-right";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
  /** Animation style — default is subtle fade */
  variant?: RevealVariant;
};

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  variant = "fade",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      isMobile
        ? { threshold: 0.06, rootMargin: "0px 0px 8% 0px" }
        : { threshold: 0.1, rootMargin: "0px 0px -2% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const Component = Tag as React.ElementType;
  const stateClass = visible ? "reveal-visible" : "reveal-hidden";

  return (
    <Component
      ref={ref}
      className={`${stateClass} reveal--${variant} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
