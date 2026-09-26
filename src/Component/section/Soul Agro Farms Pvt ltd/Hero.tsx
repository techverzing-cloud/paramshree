"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MoveDown } from "lucide-react";

import { soulAgroFarmsData } from "../../../data/soulagrofarms";

import "../../css/Soul Agro Farms Pvt ltd/Hero.css";

export default function Hero() {
  const { hero } = soulAgroFarmsData;

  return (
    <section className="soul-hero" id="home">
      <div className="soul-hero__background-decoration soul-hero__background-decoration--left" />
      <div className="soul-hero__background-decoration soul-hero__background-decoration--right" />

      <div className="soul-hero__container container">

        {/* LEFT CONTENT */}
        <div className="soul-hero__content">

          <div className="soul-hero__eyebrow">
            <span className="soul-hero__eyebrow-line" />
            <span>{hero.eyebrow}</span>
          </div>

          <h1 className="soul-hero__title">
            {hero.title.split("\n").map((line, index) => (
              <span key={index} className="soul-hero__title-line">
                {line}
              </span>
            ))}
          </h1>

          <p className="soul-hero__description">
            {hero.description}
          </p>

          <div className="soul-hero__actions">

            <Link
              href="#projects"
              className="button button-primary soul-hero__primary-button"
            >
              <span>{hero.primaryButton}</span>
              <ArrowRight size={15} strokeWidth={1.6} />
            </Link>

            <Link
              href="#about"
              className="button button-outline soul-hero__secondary-button"
            >
              <span>{hero.secondaryButton}</span>
            </Link>

          </div>

          <div className="soul-hero__bottom-note">
            <MoveDown size={15} strokeWidth={1.2} />

            <span>
              Nature • Luxury • Sustainability
            </span>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="soul-hero__visual">

          <div className="soul-hero__image-wrapper">

            <Image
              src={hero.image}
              alt={hero.imageAlt}
              fill
              priority
              className="soul-hero__image"
              sizes="(max-width: 768px) 100vw, 55vw"
            />

            <div className="soul-hero__image-overlay" />

            <div className="soul-hero__image-caption">
              <span>Nature</span>
              <span>Redefined</span>
            </div>

          </div>

          <div className="soul-hero__image-frame" />

          <div className="soul-hero__accent">
            <span />
            <span />
            <span />
          </div>

        </div>

      </div>

      <div className="soul-hero__scroll">
        <span>SCROLL TO EXPLORE</span>
        <div className="soul-hero__scroll-line" />
      </div>

    </section>
  );
}