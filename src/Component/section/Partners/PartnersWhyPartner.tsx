"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  Leaf,
  ShieldCheck,
  Users,
  TrendingUp,
} from "lucide-react";

import "../../css/Partners/PartnersWhyPartner.css";

import { partnersPageData } from "../../../data/partners";

const iconMap = {
  leaf: Leaf,
  shield: ShieldCheck,
  users: Users,
  growth: TrendingUp,
};

export default function PartnersWhyPartner() {
  const data = partnersPageData.whyPartner;

  return (
    <section className="partners-why-partner">
      <div className="partners-why-partner__container">

        {/* =========================================
            LEFT CONTENT
        ========================================= */}

        <div className="partners-why-partner__content">

          <div className="partners-why-partner__eyebrow">
            <span>{data.eyebrow}</span>

            <span className="partners-why-partner__eyebrow-line" />
          </div>

          <h2 className="partners-why-partner__title">
            <span>{data.title[0]}</span>
            <span>{data.title[1]}</span>
          </h2>

          <p className="partners-why-partner__description">
            {data.description}
          </p>

          <Link
            href={data.button.href}
            className="partners-why-partner__button"
          >
            <span>{data.button.label}</span>

            <ArrowUpRight
              size={15}
              strokeWidth={1.7}
            />
          </Link>

        </div>

        {/* =========================================
            RIGHT IMAGE
        ========================================= */}

        <div className="partners-why-partner__visual">

          <div className="partners-why-partner__image">
            <Image
              src={data.image}
              alt="Nature and mountain landscape"
              fill
              sizes="(max-width: 900px) 100vw, 65vw"
            />
          </div>

          {/* Image Overlay */}
          <div className="partners-why-partner__image-overlay" />

          {/* =====================================
              BENEFITS CARD
          ===================================== */}

          <div className="partners-why-partner__benefits">

            {data.benefits.map((benefit) => {
              const Icon =
                iconMap[
                  benefit.icon as keyof typeof iconMap
                ];

              return (
                <div
                  className="partners-why-partner__benefit"
                  key={benefit.id}
                >
                  <div className="partners-why-partner__benefit-icon">
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className="partners-why-partner__benefit-text">
                    <span>{benefit.title}</span>
                    <span>{benefit.subtitle}</span>
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