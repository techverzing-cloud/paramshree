"use client";

import { useEffect, useRef, useState } from "react";
import { aboutPageData } from "../../../data/about";
import "../../css/About/OurValues.css";

export default function OurValues() {
  const { values } = aboutPageData;

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
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`our-values ${
        isVisible ? "our-values--visible" : ""
      }`}
    >
      <div className="container our-values__container">

        {/* Intro */}
        <div className="our-values__intro">
          <span className="section-label">
            {values.eyebrow}
          </span>

          <h2 className="our-values__title">
            {values.title}
          </h2>

          <p className="our-values__description">
            {values.description}
          </p>
        </div>

        {/* Values */}
        <div className="our-values__grid">
          {values.items.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="our-values__item"
                style={
                  {
                    "--value-index": index,
                  } as React.CSSProperties
                }
              >
                <div className="our-values__icon">
                  <Icon
                    size={22}
                    strokeWidth={1.4}
                  />
                </div>

                <div className="our-values__item-content">
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}