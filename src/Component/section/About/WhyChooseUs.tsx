"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { aboutPageData } from "../../../data/about";
import "../../css/About/WhyChooseUs.css";

export default function WhyChooseUs() {
  const { whyChooseUs } = aboutPageData;

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
      className={`why-choose-us ${
        isVisible ? "why-choose-us--visible" : ""
      }`}
    >
      <div className="container why-choose-us__container">
        {/* LEFT CONTENT */}
        <div className="why-choose-us__content">
          <span className="section-label">
            {whyChooseUs.eyebrow}
          </span>

          <h2 className="why-choose-us__title">
            Your Trusted
            <br />
            Real Estate Partner
          </h2>

          <p className="why-choose-us__description">
            {whyChooseUs.description}
          </p>

          <a
            href={whyChooseUs.button.href}
            className="button button-primary why-choose-us__button"
          >
            {whyChooseUs.button.label}

            <ArrowRight
              size={15}
              strokeWidth={1.8}
            />
          </a>
        </div>

        {/* BENEFITS */}
        <div className="why-choose-us__benefits">
          {whyChooseUs.benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="why-choose-us__benefit"
                style={
                  {
                    "--benefit-index": index,
                  } as React.CSSProperties
                }
              >
                <div className="why-choose-us__benefit-icon">
                  <Icon
                    size={22}
                    strokeWidth={1.4}
                  />
                </div>

                <div className="why-choose-us__benefit-content">
                  <h3>{benefit.title}</h3>

                  <p>{benefit.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}