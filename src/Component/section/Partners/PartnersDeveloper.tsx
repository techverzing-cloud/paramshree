"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  Leaf,
  ShieldCheck,
  MapPin,
} from "lucide-react";

import "../../css/Partners/PartnersDeveloper.css";

import { partnersPageData } from "../../../data/partners";

const iconMap = {
  leaf: Leaf,
  shield: ShieldCheck,
  "map-pin": MapPin,
};

export default function PartnersDeveloper() {
  const data = partnersPageData.developerPartner;

  return (
    <section className="partners-developer">
      <div className="partners-developer__container">
        {/* =========================================
            DECORATIVE BOTANICAL ELEMENT
        ========================================= */}

        <div
          className="partners-developer__decoration"
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        {/* =========================================
            LEFT CONTENT
        ========================================= */}

        <div className="partners-developer__content">
          <div className="partners-developer__eyebrow">
            <span>{data.eyebrow}</span>

            <span className="partners-developer__eyebrow-line" />
          </div>

          <h2 className="partners-developer__title">
            {data.title}
          </h2>

          <p className="partners-developer__subtitle">
            {data.subtitle}
          </p>

          <p className="partners-developer__description">
            {data.description}
          </p>

          <Link
            href={data.button.href}
            className="partners-developer__button"
          >
            <span>{data.button.label}</span>

            <ArrowUpRight
              size={15}
              strokeWidth={1.7}
            />
          </Link>
        </div>

        {/* =========================================
            CENTER BRAND
        ========================================= */}

        <div className="partners-developer__brand">
          <div className="partners-developer__brand-inner">
            <Image
              src={data.logo}
              alt="Soul Agro Farms Pvt. Ltd."
              width={230}
              height={150}
              className="partners-developer__soul-logo"
            />

            <div className="partners-developer__developed">
              <span>{data.developedBy.label}</span>

              <div className="partners-developer__developed-brand">
                <Image
                  src={data.developedBy.logo}
                  alt="ETH Infra Pvt. Ltd."
                  width={150}
                  height={45}
                />

                <span className="partners-developer__developed-name">
                  {data.developedBy.name}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            RIGHT BENEFITS
        ========================================= */}

        <div className="partners-developer__benefits">
          {data.benefits.map((benefit) => {
            const Icon =
              iconMap[
                benefit.icon as keyof typeof iconMap
              ];

            return (
              <div
                className="partners-developer__benefit"
                key={benefit.id}
              >
                <div className="partners-developer__benefit-icon">
                  <Icon
                    size={22}
                    strokeWidth={1.4}
                  />
                </div>

                <div className="partners-developer__benefit-content">
                  <h3>
                    {benefit.title}
                    <br />
                    {benefit.subtitle}
                  </h3>

                  <p>{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}