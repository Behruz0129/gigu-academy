"use client";

import { useLayoutEffect, useRef, useState } from "react";

type MarqueeProps = {
  items: string[];
  speed?: number;
};

function MarqueeItem({ label }: { label: string }) {
  return (
    <span className="marquee-item inline-flex shrink-0 items-center text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-white/40">
      <span className="px-8">{label}</span>
      <span className="marquee-separator text-primary" aria-hidden="true">
        ◆
      </span>
    </span>
  );
}

function MarqueeSequence({
  items,
  idPrefix,
}: {
  items: string[];
  idPrefix: string;
}) {
  return items.map((item, index) => (
    <MarqueeItem key={`${idPrefix}-${index}-${item}`} label={item} />
  ));
}

export function Marquee({ items, speed = 28 }: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [repeatCount, setRepeatCount] = useState(2);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const measure = measureRef.current;
    if (!container || !measure) return;

    const update = () => {
      const containerWidth = container.offsetWidth;
      const singleSetWidth = measure.offsetWidth;
      if (singleSetWidth <= 0) return;

      const needed = Math.max(
        2,
        Math.ceil(containerWidth / singleSetWidth) + 1,
      );
      setRepeatCount((prev) => (prev !== needed ? needed : prev));
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(container);
    return () => observer.disconnect();
  }, [items]);

  const sequence = Array.from({ length: repeatCount }, () => items).flat();

  return (
    <div
      ref={containerRef}
      className="hero-marquee overflow-hidden"
      aria-hidden="true"
    >
      <div
        ref={measureRef}
        className="pointer-events-none invisible absolute flex w-max"
        aria-hidden="true"
      >
        <MarqueeSequence items={items} idPrefix="measure" />
      </div>

      <div
        className="marquee-track flex w-max"
        style={{ animationDuration: `${speed * repeatCount}s` }}
      >
        <div className="marquee-group flex shrink-0 items-center">
          <MarqueeSequence items={sequence} idPrefix="a" />
        </div>
        <div className="marquee-group flex shrink-0 items-center">
          <MarqueeSequence items={sequence} idPrefix="b" />
        </div>
      </div>
    </div>
  );
}
