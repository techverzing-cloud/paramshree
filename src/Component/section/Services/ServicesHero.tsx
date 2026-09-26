"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { servicesPageData } from "../../../data/services";

import "../../css/Services/ServicesHero.css";

export default function ServicesHero() {
  const { hero } = servicesPageData;

  return (
    <section className="services-hero">
      {/* Background Image */}
      <div
        className="services-hero__background"
        style={{
          backgroundImage: `url(${hero.image})`,
        }}
      />

      {/* Background Overlay */}
      <div className="services-hero__overlay" />

      {/* Hero Content */}
      <div className="services-hero__container container">
        <div className="services-hero__content">
          <div className="services-hero__eyebrow">
            <span>{hero.eyebrow}</span>
            <span className="services-hero__eyebrow-line" />
          </div>

          <h1 className="services-hero__title">
            {hero.title}
          </h1>

          <p className="services-hero__description">
            {hero.description}
          </p>

          <Link
            href={hero.button.href}
            className="button button-primary services-hero__button"
          >
            <span>{hero.button.label}</span>
            <ArrowUpRight size={15} strokeWidth={1.6} />
          </Link>
        </div>

        {/* Bottom Right Quote */}
        <div className="services-hero__quote">
          <span>{hero.quote.lineOne}</span>
          <span>{hero.quote.lineTwo}</span>

          <span className="services-hero__quote-line" />
        </div>
      </div>
    </section>
  );
}