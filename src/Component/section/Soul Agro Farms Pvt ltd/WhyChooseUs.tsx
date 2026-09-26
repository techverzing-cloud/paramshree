"use client";

import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  ShieldCheck,
  Sun,
  Sprout,
} from "lucide-react";

import { soulAgroFarmsData } from "../../../data/soulagrofarms";

import "../../css/Soul Agro Farms Pvt ltd/WhyChooseUs.css";

const featureIcons = {
  leaf: Leaf,
  shield: ShieldCheck,
  sun: Sun,
  sprout: Sprout,
};

export default function WhyChooseUs() {
  const { whyChooseUs } = soulAgroFarmsData;

  return (
    <section className="soul-why" id="why-us">

      {/* Decorative botanical elements */}
      <div className="soul-why__decor soul-why__decor--left">
        <span />
        <span />
        <span />
      </div>

      <div className="soul-why__decor soul-why__decor--right">
        <span />
        <span />
        <span />
      </div>

      <div className="container soul-why__container">

        {/* INTRO */}
        <div className="soul-why__intro">

          <div className="soul-why__eyebrow">
            <span className="soul-why__eyebrow-line" />
            <span>{whyChooseUs.eyebrow}</span>
          </div>

          <h2 className="soul-why__title">
            {whyChooseUs.title.split("\n").map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </h2>

          <p className="soul-why__description">
            {whyChooseUs.description}
          </p>

          <Link
            href={whyChooseUs.buttonLink}
            className="button soul-why__button"
          >
            <span>{whyChooseUs.buttonText}</span>

            <ArrowRight
              size={15}
              strokeWidth={1.6}
            />
          </Link>

        </div>

        {/* FEATURES */}
        <div className="soul-why__features">

          {whyChooseUs.features.map((feature, index) => {
            const Icon =
              featureIcons[
                feature.icon as keyof typeof featureIcons
              ];

            return (
              <div
                className="soul-why__feature"
                key={feature.title}
              >

                <div className="soul-why__icon">

                  <Icon
                    size={25}
                    strokeWidth={1.2}
                  />

                </div>

                <span className="soul-why__number">
                  0{index + 1}
                </span>

                <h3>
                  {feature.title}
                </h3>

                <p>
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}