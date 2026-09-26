import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { projectsPageData } from "../../../data/projects";

import "../../css/Projects/ProjectsHero.css";

export default function ProjectsHero() {
  const { hero } = projectsPageData;

  return (
    <section className="projects-hero" aria-labelledby="projects-hero-title">
      {/* Background Image */}
      <div className="projects-hero__image-wrapper">
        <Image
          src={hero.image}
          alt="Premium farmhouses, villas and plots"
          fill
          priority
          sizes="100vw"
          className="projects-hero__image"
        />

        <div className="projects-hero__image-overlay" />
      </div>

      {/* Main Content */}
      <div className="projects-hero__container">
        <div className="projects-hero__content">
          {/* Eyebrow */}
          <div className="projects-hero__eyebrow">
            <span>{hero.eyebrow}</span>
            <span className="projects-hero__eyebrow-line" />
          </div>

          {/* Heading */}
          <h1
            id="projects-hero-title"
            className="projects-hero__title"
          >
            {hero.title}
          </h1>

          {/* Description */}
          <p className="projects-hero__description">
            {hero.description}
          </p>

          {/* CTA */}
          <Link
            href={hero.cta.href}
            className="projects-hero__button"
          >
            <span>{hero.cta.label}</span>

            <span className="projects-hero__button-icon">
              <ArrowRight size={15} strokeWidth={1.8} />
            </span>
          </Link>
        </div>

        {/* Right-side Tagline */}
        <div className="projects-hero__tagline" aria-hidden="true">
          <span>{hero.tagline.line1}</span>
          <span>{hero.tagline.line2}</span>
          <span>{hero.tagline.line3}</span>

          <span className="projects-hero__tagline-line" />
        </div>
      </div>
    </section>
  );
}