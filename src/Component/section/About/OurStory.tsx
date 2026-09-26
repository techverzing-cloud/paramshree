"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { aboutPageData } from "../../../data/about";
import "../../css/About/OurStory.css";

export default function OurStory() {
  const { story } = aboutPageData;

  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`our-story ${
        isVisible ? "our-story--visible" : ""
      }`}
    >
      <div className="container our-story__container">
        {/* LEFT CONTENT */}
        <div className="our-story__content">
          <div className="our-story__eyebrow-wrap">
            <span className="section-label">
              {story.eyebrow}
            </span>
          </div>

          <h2 className="our-story__title">
            A Vision Rooted
            <br />
            in Nature & People
          </h2>

          <div className="our-story__text">
            {story.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="our-story__quote">
            <span>{story.quote}</span>

            <div className="our-story__quote-line" />

            <span className="our-story__quote-leaf">
              ♧
            </span>
          </div>
        </div>

        {/* RIGHT IMAGE COLLAGE */}
        <div className="our-story__visual">
          {/* Main Image */}
          <div className="our-story__main-image">
            <Image
              src={story.mainImage}
              alt="Luxury farmhouse surrounded by nature"
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
            />

            <div className="our-story__image-shine" />
          </div>

          {/* Small Nature Image */}
          <div className="our-story__small-image our-story__small-image--top">
            <Image
              src={story.secondaryImage}
              alt="Nature and greenery"
              fill
              sizes="220px"
            />
          </div>

          {/* Landscape Image */}
          <div className="our-story__small-image our-story__small-image--bottom">
            <Image
              src={story.landscapeImage}
              alt="Mountain landscape"
              fill
              sizes="250px"
            />
          </div>

          {/* Decorative line */}
          <div className="our-story__decoration">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </section>
  );
}