"use client";

import Image from "next/image";

import "../../css/Partners/PartnersHero.css";

import { partnersPageData } from "../../../data/partners";

export default function PartnersHero() {
  return (
    <section className="partners-hero">
      {/* Background Image */}
      <div className="partners-hero__background">
        <Image
          src={partnersPageData.hero.image}
          alt="Luxury farmhouse surrounded by mountains"
          fill
          priority
          sizes="100vw"
          className="partners-hero__image"
        />
      </div>

      {/* Image Overlay */}
      <div className="partners-hero__overlay" />

      {/* Content */}
      <div className="partners-hero__container">
        <div className="partners-hero__content">
          <div className="partners-hero__eyebrow">
            <span>{partnersPageData.hero.eyebrow}</span>
            <span className="partners-hero__eyebrow-line" />
          </div>

          <h1 className="partners-hero__title">
            <span>{partnersPageData.hero.title[0]}</span>
            <span>{partnersPageData.hero.title[1]}</span>
          </h1>

          <p className="partners-hero__description">
            {partnersPageData.hero.description}
          </p>
        </div>

        {/* Vertical Message */}
        <div className="partners-hero__side-message">
          {partnersPageData.hero.sideText.map((text, index) => (
            <span key={index}>{text}</span>
          ))}
        </div>
      </div>
    </section>
  );
}