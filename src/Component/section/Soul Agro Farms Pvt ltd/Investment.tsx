"use client";

import Link from "next/link";
import { ArrowRight, Leaf, ShieldCheck, Home, Sprout } from "lucide-react";

import { soulAgroFarmsData } from "../../../data/soulagrofarms";

import "../../css/Soul Agro Farms Pvt ltd/Investment.css";

const iconMap = {
  "01": Leaf,
  "02": Sprout,
  "03": Home,
  "04": ShieldCheck,
};

export default function Investment() {
  const { investment } = soulAgroFarmsData;

  return (
    <section className="soul-investment" id="investment">
      <div className="soul-investment__decor soul-investment__decor--top" />
      <div className="soul-investment__decor soul-investment__decor--bottom" />

      <div className="container soul-investment__container">

        {/* LEFT CONTENT */}
        <div className="soul-investment__intro">
          <div className="soul-investment__eyebrow">
            <span className="soul-investment__eyebrow-line" />
            <span>{investment.eyebrow}</span>
          </div>

          <h2 className="soul-investment__title">
            {investment.title.split("\n").map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </h2>

          <p className="soul-investment__description">
            {investment.description}
          </p>

          <Link
            href={investment.buttonLink}
            className="button button-primary soul-investment__button"
          >
            <span>{investment.buttonText}</span>
            <ArrowRight size={15} strokeWidth={1.6} />
          </Link>
        </div>

        {/* RIGHT FEATURES */}
        <div className="soul-investment__features">
          {investment.items.map((item) => {
            const Icon = iconMap[item.number as keyof typeof iconMap];

            return (
              <article
                className="soul-investment__feature"
                key={item.number}
              >
                <div className="soul-investment__feature-top">
                  <span className="soul-investment__number">
                    {item.number}
                  </span>

                  <div className="soul-investment__icon">
                    <Icon size={19} strokeWidth={1.3} />
                  </div>
                </div>

                <div className="soul-investment__feature-content">
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>

                <div className="soul-investment__feature-line" />
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}