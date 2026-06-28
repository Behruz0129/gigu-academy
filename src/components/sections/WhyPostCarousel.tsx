"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { WHY_POST_IMAGES } from "@/lib/why-posts";

const SLIDE_DURATION_MS = 5500;
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
  const [paused, setPaused] = useState(false);
  const remainingRef = useRef(SLIDE_DURATION_MS);
  const startRef = useRef(0);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + posts.length) % posts.length);
    },
    [posts.length],
  );

  useEffect(() => {
    WHY_POST_IMAGES.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  // Reset the remaining time whenever the active slide changes.
  useEffect(() => {
    remainingRef.current = SLIDE_DURATION_MS;
  }, [activeIndex]);

  // Advance the slide with a single timeout; pause/resume preserves the
  // remaining time so no per-frame state updates are needed.
  useEffect(() => {
    if (paused || posts.length <= 1) return;

    startRef.current = Date.now();
    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % posts.length);
    }, remainingRef.current);

    return () => {
      window.clearTimeout(timer);
      remainingRef.current -= Date.now() - startRef.current;
    };
  }, [paused, activeIndex, posts.length]);

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

          return (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`${index + 1}-post`}
              className={`why-post-indicator ${isActive ? "is-active" : ""} ${
                isComplete ? "is-complete" : ""
              }`}
              onClick={() => goTo(index)}
            >
              <span
                key={isActive ? activeIndex : `idle-${index}`}
                className="why-post-indicator-fill"
                style={{
                  animationDuration: `${SLIDE_DURATION_MS}ms`,
                  animationPlayState: paused ? "paused" : "running",
                }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
