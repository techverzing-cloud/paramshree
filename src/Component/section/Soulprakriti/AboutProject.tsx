"use client";

import Image from "next/image";
import {
  House,
  Leaf,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  TreePine,
} from "lucide-react";

import { soulPrakritiData } from "../../../data/soulprakrtit";

import "../../css/Soul Prakriti/AboutProject.css";

const iconMap = {
  project: House,
  location: MapPin,
  type: House,
  plot: Leaf,
  developer: ShieldCheck,
};

const highlightIconMap = {
  leaf: Leaf,
  shield: ShieldCheck,
  nature: TreePine,
  star: Star,
};

export default function AboutProject() {
  const { about } = soulPrakritiData;

  return (
    <section className="soul-about">
      <div className="soul-about__container">

        {/* =========================================
            INTRO CONTENT
        ========================================= */}

        <div className="soul-about__intro">
          <div className="soul-about__eyebrow">
            <span>{about.eyebrow}</span>
            <span className="soul-about__eyebrow-line" />
          </div>

          <h2 className="soul-about__title">
            {about.title}
          </h2>

          <div className="soul-about__description">
            {about.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Highlights */}

          <div className="soul-about__highlights">
            {about.highlights.map((highlight, index) => {
              const Icon =
                highlightIconMap[
                  highlight.icon as keyof typeof highlightIconMap
                ];

              return (
                <div
                  className="soul-about__highlight"
                  key={highlight.title}
                  style={{
                    animationDelay: `${index * 100 + 150}ms`,
                  }}
                >
                  <div className="soul-about__highlight-icon">
                    <Icon size={21} strokeWidth={1.4} />
                  </div>

                  <h3>{highlight.title}</h3>

                  <p>{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>


        {/* =========================================
            IMAGE
        ========================================= */}

        <div className="soul-about__image-column">
          <div className="soul-about__image-wrapper">
            <Image
              src={about.image}
              alt={about.imageAlt}
              fill
              className="soul-about__image"
              sizes="(max-width: 900px) 100vw, 45vw"
            />
          </div>
        </div>


        {/* =========================================
            PROJECT DETAILS
        ========================================= */}

        <div className="soul-about__details">

          {about.projectDetails.map((detail, index) => {
            const Icon =
              iconMap[detail.icon as keyof typeof iconMap];

            return (
              <div
                className="soul-about__detail"
                key={`${detail.label}-${index}`}
              >
                <div className="soul-about__detail-icon">
                  <Icon size={19} strokeWidth={1.4} />
                </div>

                <div className="soul-about__detail-content">
                  <span>{detail.label}</span>
                  <strong>{detail.value}</strong>
                </div>
              </div>
            );
          })}

        </div>

      </div>

      {/* Decorative leaf/circle */}

      <div className="soul-about__decoration soul-about__decoration--left" />

      <div className="soul-about__decoration soul-about__decoration--right">
        <Sparkles size={30} strokeWidth={0.8} />
      </div>
    </section>
  );
}