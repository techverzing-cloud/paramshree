"use client";

import {
  ArrowUpRight,
  Award,
  Handshake,
  House,
  ShieldCheck,
  Users,
  WalletCards,
} from "lucide-react";

import { servicesPageData } from "../../../data/services";

import "../../css/Services/ServicesOffer.css";

const icons = {
  home: House,
  handshake: Handshake,
  shield: ShieldCheck,
  payment: WalletCards,
  award: Award,
  users: Users,
};

export default function ServicesOffer() {
  const { offer } = servicesPageData;

  return (
    <section className="services-offer">
      {/* Decorative Botanical Illustration */}
      <div className="services-offer__decoration" aria-hidden="true">
        <svg
          viewBox="0 0 180 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M177 5C137 43 116 83 108 126C100 170 113 220 153 295"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M139 55C126 40 113 34 99 33C105 47 118 57 139 55Z"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M116 92C99 79 85 77 72 81C82 93 97 99 116 92Z"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M107 130C89 119 74 119 61 125C73 137 89 141 107 130Z"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M111 170C94 163 79 166 68 174C81 183 96 183 111 170Z"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M124 211C108 207 94 212 85 222C99 228 113 223 124 211Z"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M140 250C125 248 112 254 104 265C118 269 131 263 140 250Z"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M128 67C141 53 155 48 168 50C162 64 149 72 128 67Z"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M111 108C127 96 141 94 154 99C144 111 130 116 111 108Z"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M107 149C124 141 139 142 151 150C139 160 124 160 107 149Z"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M117 190C133 185 147 188 158 197C145 205 131 203 117 190Z"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M133 230C148 228 161 233 169 243C155 248 143 243 133 230Z"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="container services-offer__container">
        {/* Section Heading */}
        <div className="services-offer__header">
          <div className="services-offer__eyebrow">
            <span>{offer.eyebrow}</span>
            <span className="services-offer__eyebrow-line" />
          </div>

          <h2 className="services-offer__title">
            {offer.title}
          </h2>

          <p className="services-offer__description">
            {offer.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-offer__grid">
          {offer.services.map((service, index) => {
            const Icon =
              icons[service.icon as keyof typeof icons];

            return (
              <article
                key={service.id}
                className="services-offer__card"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="services-offer__icon">
                  <Icon
                    size={25}
                    strokeWidth={1.5}
                  />
                </div>

                <div className="services-offer__card-content">
                  <h3 className="services-offer__card-title">
                    {service.title}
                  </h3>

                  <p className="services-offer__card-description">
                    {service.description}
                  </p>
                </div>

                <button
                  className="services-offer__arrow"
                  type="button"
                  aria-label={`Learn more about ${service.title}`}
                >
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.4}
                  />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}