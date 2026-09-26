"use client";

import Image from "next/image";
import {
  Handshake,
  ShieldCheck,
  Users,
  Leaf,
} from "lucide-react";

import "../../css/Partners/PartnersOverview.css";

import { partnersPageData } from "../../../data/partners";

const iconMap = {
  handshake: Handshake,
  shield: ShieldCheck,
  users: Users,
  leaf: Leaf,
};

export default function PartnersOverview() {
  const data = partnersPageData.channelPartner;

  return (
    <section className="partners-overview">
      <div className="partners-overview__container">
        {/* =========================================
            LEFT CONTENT
        ========================================= */}

        <div className="partners-overview__content">
          <div className="partners-overview__eyebrow">
            <span>{data.eyebrow}</span>

            <span className="partners-overview__eyebrow-line" />
          </div>

          <h2 className="partners-overview__title">
            {data.title}
          </h2>

          <p className="partners-overview__subtitle">
            {data.subtitle}
          </p>

          <p className="partners-overview__description">
            {data.description}
          </p>

          {/* Benefits */}
          <div className="partners-overview__benefits">
            {data.benefits.map((benefit) => {
              const Icon =
                iconMap[
                  benefit.icon as keyof typeof iconMap
                ];

              return (
                <div
                  className="partners-overview__benefit"
                  key={benefit.id}
                >
                  <div className="partners-overview__benefit-icon">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>

                  <div className="partners-overview__benefit-text">
                    <span>{benefit.title}</span>
                    <span>{benefit.subtitle}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================
            RIGHT IMAGE COLLAGE
        ========================================= */}

        <div className="partners-overview__visual">
          {/* Decorative leaves */}
          <div className="partners-overview__leaf partners-overview__leaf--top">
            <Leaf size={76} strokeWidth={0.7} />
          </div>

          <div className="partners-overview__leaf partners-overview__leaf--bottom">
            <Leaf size={70} strokeWidth={0.7} />
          </div>

          {/* Main image */}
          <div className="partners-overview__image partners-overview__image--primary">
            <Image
              src={data.imagePrimary}
              alt="Luxury property developed by Soul Agro Farms"
              fill
              sizes="(max-width: 900px) 70vw, 500px"
            />
          </div>

          {/* Secondary image */}
          <div className="partners-overview__image partners-overview__image--secondary">
            <Image
              src={data.imageSecondary}
              alt="Premium farmhouse property"
              fill
              sizes="(max-width: 900px) 45vw, 300px"
            />
          </div>

          {/* ParamShree logo card */}
          <div className="partners-overview__logo-card">
            <Image
              src={data.logo}
              alt="ParamShree"
              width={230}
              height={110}
            />
          </div>
        </div>
      </div>
    </section>
  );
}