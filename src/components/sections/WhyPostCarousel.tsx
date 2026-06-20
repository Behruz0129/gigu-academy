"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { WHY_POST_IMAGES } from "@/lib/why-posts";

const SLIDE_DURATION_MS = 5500;
const TICK_MS = 32;
const CROSSFADE_MS = 700;

type Post = {
  title: string;
  description: string;
};

type WhyPostCarouselProps = {
  posts: Post[];
};

export function WhyPostCarousel({ posts }: WhyPostCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const elapsedRef = useRef(0);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + posts.length) % posts.length);
      setProgress(0);
      elapsedRef.current = 0;
    },
    [posts.length],
  );

  useEffect(() => {
    WHY_POST_IMAGES.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    if (paused || posts.length <= 1) return;

    const timer = window.setInterval(() => {
      if (document.hidden) return;

      elapsedRef.current += TICK_MS;
      const nextProgress = Math.min(elapsedRef.current / SLIDE_DURATION_MS, 1);
      setProgress(nextProgress);

      if (nextProgress >= 1) {
        setActiveIndex((current) => (current + 1) % posts.length);
        setProgress(0);
        elapsedRef.current = 0;
      }
    }, TICK_MS);

    return () => window.clearInterval(timer);
  }, [activeIndex, paused, posts.length]);

  const activePost = posts[activeIndex];

  return (
    <div
      className="why-post-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="why-post-frame">
        <div className="why-post-slides" aria-live="polite">
          {posts.map((_, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={WHY_POST_IMAGES[index]}
                className={`why-post-slide ${isActive ? "is-active" : ""}`}
                aria-hidden={!isActive}
              >
                <Image
                  src={WHY_POST_IMAGES[index]}
                  alt=""
                  fill
                  className="why-post-image"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority={index < 2}
                />
              </div>
            );
          })}
        </div>

        <div className="why-post-overlay" aria-hidden="true" />

        <motion.div
          key={activeIndex}
          className="why-post-copy"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: CROSSFADE_MS / 1000,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.08,
          }}
        >
          <h3 className="why-post-title">{activePost.title}</h3>
          <p className="why-post-desc">{activePost.description}</p>
        </motion.div>
      </div>

      <div className="why-post-indicators" role="tablist" aria-label="Postlar">
        {posts.map((_, index) => {
          const isActive = index === activeIndex;
          const isComplete = index < activeIndex;
          const fill = isComplete ? 100 : isActive ? progress * 100 : 0;

          return (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`${index + 1}-post`}
              className="why-post-indicator"
              onClick={() => goTo(index)}
            >
              <span
                className="why-post-indicator-fill"
                style={{ width: `${fill}%` }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
