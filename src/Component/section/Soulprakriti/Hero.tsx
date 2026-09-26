"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

import { soulPrakritiData } from "../../../data/soulprakrtit";

import "../../css/Soul Prakriti/Hero.css";

export default function Hero() {
  const { hero } = soulPrakritiData;

  return (
    <section className="soul-hero">
      <div className="soul-hero__container">
        {/* Left Content */}
        <div className="soul-hero__content">
          <div className="soul-hero__eyebrow">
            <span>{hero.eyebrow}</span>
            <span className="soul-hero__eyebrow-line" />
          </div>

          <h1 className="soul-hero__title">{hero.title}</h1>

          <h2 className="soul-hero__subtitle">{hero.subtitle}</h2>

          <p className="soul-hero__description">{hero.description}</p>

          <div className="soul-hero__actions">
            <Link
              href="/contact"
              className="button button-primary soul-hero__primary-button"
            >
              <span>{hero.primaryButton}</span>
              <ArrowRight size={15} strokeWidth={1.8} />
            </Link>

            
          </div>
        </div>

        {/* Right Image */}
        <div className="soul-hero__visual">
          <div className="soul-hero__image-wrapper">
            <Image
              src={hero.heroImage}
              alt={hero.imageAlt}
              fill
              priority
              className="soul-hero__image"
              sizes="(max-width: 768px) 100vw, 55vw"
            />

            <div className="soul-hero__image-overlay" />
          </div>

          {/* Decorative Tagline */}
          <div className="soul-hero__tagline">
            <span>{hero.tagline.small}</span>
            <strong>{hero.tagline.large}</strong>
            <span>{hero.tagline.bottom}</span>

            <div className="soul-hero__tagline-line" />
          </div>

          {/* Decorative Circle */}
          <div className="soul-hero__decorative-circle" />
        </div>
      </div>

      {/* Bottom Decorative Element */}
      <div className="soul-hero__bottom-decoration">
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}