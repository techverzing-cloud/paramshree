"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, ShieldCheck, Sparkles, Sprout } from "lucide-react";

import { soulAgroFarmsData } from "../../../data/soulagrofarms";

import "../../css/Soul Agro Farms Pvt ltd/About.css";

const icons = [Leaf, Sprout, Sparkles, ShieldCheck];

export default function About() {
  const { about } = soulAgroFarmsData;

  return (
    <section className="soul-about" id="about">
      <div className="soul-about__decor soul-about__decor--left" />
      <div className="soul-about__decor soul-about__decor--right" />

      <div className="container soul-about__container">

        {/* LEFT CONTENT */}
        <div className="soul-about__content">

          <div className="soul-about__eyebrow">
            <span className="soul-about__eyebrow-line" />
            <span>{about.eyebrow}</span>
          </div>

          <h2 className="soul-about__title">
            {about.title.split("\n").map((line, index) => (
              <span key={index}>
                {line}
              </span>
            ))}
          </h2>

          <p className="soul-about__description">
            {about.description}
          </p>

          <p className="soul-about__description soul-about__description--secondary">
            {about.secondaryDescription}
          </p>


          {/* STATS */}
          <div className="soul-about__stats">
            {about.stats.map((stat) => (
              <div className="soul-about__stat" key={stat.label}>
                <span className="soul-about__stat-value">
                  {stat.value}
                </span>

                <span className="soul-about__stat-label">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="soul-about__visual">

          <div className="soul-about__image-wrapper">

            <Image
              src={about.image}
              alt={about.imageAlt}
              fill
              className="soul-about__image"
              sizes="(max-width: 768px) 100vw, 48vw"
            />

            <div className="soul-about__image-overlay" />

            <div className="soul-about__image-label">
              <span>SOUL</span>
              <span>Living</span>
            </div>

          </div>

          <div className="soul-about__frame" />

          {/* HIGHLIGHT CARD */}
          <div className="soul-about__highlights">

            {about.highlights.map((item, index) => {
              const Icon = icons[index];

              return (
                <div
                  className="soul-about__highlight"
                  key={item.number}
                >
                  <div className="soul-about__highlight-icon">
                    <Icon size={17} strokeWidth={1.4} />
                  </div>

                  <div className="soul-about__highlight-content">
                    <span className="soul-about__highlight-number">
                      {item.number}
                    </span>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>
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