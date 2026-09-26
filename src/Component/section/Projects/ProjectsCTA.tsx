import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { projectsPageData } from "../../../data/projects";

import "../../css/Projects/ProjectsCTA.css";

export default function ProjectsCTA() {
  const { ctaBanner } = projectsPageData;

  return (
    <section className="projects-cta">
      {/* Background Image */}
      <div className="projects-cta__image-wrapper">
        <Image
          src={ctaBanner.image}
          alt="Premium farmhouse surrounded by nature"
          fill
          sizes="100vw"
          className="projects-cta__image"
        />

        <div className="projects-cta__overlay" />
      </div>

      {/* Content */}
      <div className="projects-cta__container">
        <div className="projects-cta__content">

          {/* Eyebrow */}
          <div className="projects-cta__eyebrow">
            <span>{ctaBanner.eyebrow}</span>

            <span className="projects-cta__eyebrow-line" />
          </div>

          {/* Heading */}
          <h2 className="projects-cta__title">
            {ctaBanner.title}
          </h2>

          {/* Description */}
          <p className="projects-cta__description">
            {ctaBanner.description}
          </p>

          {/* Button */}
          <Link
            href={ctaBanner.button.href}
            className="projects-cta__button"
          >
            <span>{ctaBanner.button.label}</span>

            <span className="projects-cta__button-icon">
              <ArrowRight
                size={15}
                strokeWidth={1.8}
              />
            </span>
          </Link>
        </div>

        {/* Decorative Element */}
        <div
          className="projects-cta__decorative-line"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}