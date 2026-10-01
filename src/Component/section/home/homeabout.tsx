
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  Handshake,
  House,
} from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "A Connection with Nature",
    description:
      "Explore farmhouse living surrounded by natural landscapes.",
  },
  {
    icon: House,
    title: "Farmhouse Developments",
    description:
      "Discover farmhouse properties developed by Soul Agro Farms Pvt. Ltd.",
  },
  {
    icon: Handshake,
    title: "A Channel Partner You Can Connect With",
    description:
      "Connect with ParamShree to explore available property opportunities.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
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
      id="about"
      ref={sectionRef}
      className={`about-section ${
        isVisible ? "about-visible" : ""
      }`}
    >
      <div className="container">

        <div className="about-grid">

          {/* LEFT: About Content */}
          <div className="about-content">

            <span className="section-label about-reveal">
              ABOUT PARAMSHREE
            </span>

            <h2 className="section-title about-title about-reveal">
              Your Gateway to
              <br />
              <span>Farmhouse Living</span>
            </h2>

            <p className="about-description about-reveal">
              ParamShree is a real estate channel partner
              connecting you with farmhouse developments
              by Soul Agro Farms Pvt. Ltd., powered by
              ETH Infra Pvt. Ltd.
            </p>

            <p className="about-description about-description-secondary about-reveal">
              Discover the possibilities of farmhouse
              living and explore property opportunities
              with ParamShree.
            </p>

            <div className="about-action about-reveal">
              <Link
                href="/projects"
                className="button button-outline about-button"
              >
                Explore Properties
                <ArrowRight size={16} />
              </Link>
            </div>

          </div>

          {/* CENTER: Image */}
          <div className="about-image-wrapper about-reveal">

            <div className="about-image-frame">
              <Image
                src="/images/home/homehero/hero-detail.jpg"
                alt="Farmhouse outdoor living and landscaped surroundings"
                fill
                sizes="(max-width: 760px) 100vw, (max-width: 1050px) 45vw, 30vw"
                className="about-image"
              />
            </div>

            {/* Decorative image label */}
            <div className="about-image-label">
              <span className="about-image-label-number">
                01
              </span>

              <span className="about-image-label-text">
                A CLOSER CONNECTION
                <br />
                WITH NATURE
              </span>
            </div>

          </div>

          {/* RIGHT: Features */}
          <div className="about-features">

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="about-feature about-reveal"
                  style={{
                    "--feature-index": index,
                  } as React.CSSProperties}
                >
                  <div className="about-feature-icon">
                    <Icon
                      size={25}
                      strokeWidth={1.3}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="about-feature-content">
                    <h3>{feature.title}</h3>

                    <p>{feature.description}</p>
                  </div>
                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}