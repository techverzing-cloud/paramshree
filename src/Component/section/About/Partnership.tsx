"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { aboutPageData } from "../../../data/about";
import "../../css/About/Partnership.css";

export default function Partnership() {
  const { partnership } = aboutPageData;

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
        threshold: 0.18,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`partnership ${
        isVisible ? "partnership--visible" : ""
      }`}
    >
      {/* Background Image */}
      <div className="partnership__background">
        <Image
          src={partnership.image}
          alt="Natural surroundings of the project"
          fill
          sizes="100vw"
          className="partnership__image"
        />
      </div>

      {/* Overlay */}
      <div className="partnership__overlay" />

      <div className="container partnership__container">
        <div className="partnership__content">
          <span className="partnership__eyebrow">
            {partnership.eyebrow}
          </span>

          <h2 className="partnership__title">
            {partnership.title}
          </h2>

          <p className="partnership__description">
            {partnership.description}
          </p>

          {/* Partnership Relationship */}
          <div className="partnership__relationship">
            <div className="partnership__partner">
              <span>{partnership.partner.label}</span>
              <strong>{partnership.partner.name}</strong>
            </div>

            <div className="partnership__connector">
              <span />
              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
              />
            </div>

            <div className="partnership__partner">
              <span>{partnership.developer.label}</span>
              <strong>{partnership.developer.name}</strong>
            </div>
          </div>

          {/* Powered By */}
          <div className="partnership__powered">
            <span>{partnership.poweredBy.label}</span>

            <strong>
              {partnership.poweredBy.name}
            </strong>
          </div>

          <a
            href={partnership.button.href}
            className="button button-outline partnership__button"
          >
            {partnership.button.label}

            <ArrowRight
              size={15}
              strokeWidth={1.8}
            />
          </a>
        </div>
      </div>
    </section>
  );
}