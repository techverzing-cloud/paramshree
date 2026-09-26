"use client";

import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  Mountain,
  ShieldCheck,
  Sprout,
} from "lucide-react";

import { soulPrakritiData } from "../../../data/soulprakrtit";

import "../../css/Soul Prakriti/WhySoulPrakriti.css";

const featureIcons = {
  leaf: Leaf,
  shield: ShieldCheck,
  mountain: Mountain,
  sprout: Sprout,
};

export default function WhySoulPrakriti() {
  const { whySoulPrakriti } = soulPrakritiData;

  return (
    <section className="soul-why">
      <div className="soul-why__container">

        {/* Left Content */}

        <div className="soul-why__intro">
          <div className="soul-why__eyebrow">
            <span>{whySoulPrakriti.eyebrow}</span>
            <span className="soul-why__eyebrow-line" />
          </div>

          <h2 className="soul-why__title">
            {whySoulPrakriti.title}
          </h2>

          <p className="soul-why__description">
            {whySoulPrakriti.description}
          </p>
        </div>


        {/* Features */}

        <div className="soul-why__features">
          {whySoulPrakriti.features.map((feature, index) => {
            const Icon =
              featureIcons[
                feature.icon as keyof typeof featureIcons
              ];

            return (
              <article
                className="soul-why__feature"
                key={feature.title}
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >
                <div className="soul-why__feature-icon">
                  <Icon
                    size={26}
                    strokeWidth={1.3}
                  />
                </div>

                <div className="soul-why__feature-number">
                  0{index + 1}
                </div>

                <h3 className="soul-why__feature-title">
                  {feature.title}
                </h3>

                <p className="soul-why__feature-description">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>

      </div>

      {/* Decorative Element */}

      <div className="soul-why__decoration" />
    </section>
  );
}