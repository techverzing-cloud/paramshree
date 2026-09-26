"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { aboutPageData } from "../../../data/about";
import "../../css/About/OurCommitment.css";

export default function OurCommitment() {
  const { commitment } = aboutPageData;

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
      className={`commitment-section ${isVisible ? "is-visible" : ""}`}
    >
      <div className="container">
        <div className="commitment-wrapper">
          {/* Image */}
          <div className="commitment-image-wrap">
            <div className="commitment-image">
              <Image
                src={commitment.image}
                alt="ParamShree commitment"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>

            <div className="commitment-image-accent" />
          </div>

          {/* Content */}
          <div className="commitment-content">
            <span className="section-label commitment-eyebrow">
              {commitment.eyebrow}
            </span>

            <h2 className="commitment-title">
              {commitment.title}
            </h2>

            <div className="commitment-divider" />

            <p className="commitment-description">
              {commitment.description}
            </p>

            <div className="commitment-actions">
              <Link
                href={commitment.button.href}
                className="button button-primary commitment-primary"
              >
                {commitment.button.label}
                <ArrowRight size={18} />
              </Link>

              <Link
                href={commitment.secondaryButton.href}
                className="commitment-secondary"
              >
                {commitment.secondaryButton.label}
                <span className="commitment-secondary-icon">
                  <ArrowUpRight size={17} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}