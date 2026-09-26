"use client";

import Link from "next/link";

import {
  ArrowUpRight,
  Leaf,
} from "lucide-react";

import "../../css/Partners/PartnersCta.css";

import { partnersPageData } from "../../../data/partners";

export default function PartnersCta() {
  const data = partnersPageData.ctaBanner;

  return (
    <section className="partners-cta">
      {/* =========================================
          DECORATIVE BOTANICAL ELEMENTS
      ========================================= */}

      <div
        className="partners-cta__decoration partners-cta__decoration--left"
        aria-hidden="true"
      >
        <Leaf size={125} strokeWidth={0.55} />
      </div>

      <div
        className="partners-cta__decoration partners-cta__decoration--right"
        aria-hidden="true"
      >
        <Leaf size={110} strokeWidth={0.55} />
      </div>

      {/* =========================================
          CONTENT
      ========================================= */}

      <div className="partners-cta__container">

        <div className="partners-cta__content">

          <span className="partners-cta__eyebrow">
            {data.eyebrow}
          </span>

          <h2 className="partners-cta__title">
            {data.title}
          </h2>

          <p className="partners-cta__description">
            {data.description}
          </p>

        </div>

        {/* =====================================
            CTA BUTTON
        ===================================== */}

        <Link
          href={data.button.href}
          className="partners-cta__button"
        >
          <span>{data.button.label}</span>

          <ArrowUpRight
            size={17}
            strokeWidth={1.5}
          />
        </Link>

      </div>
    </section>
  );
}