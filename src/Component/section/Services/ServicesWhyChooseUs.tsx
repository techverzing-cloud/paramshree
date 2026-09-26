"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  Crown,
  IndianRupee,
  UsersRound,
} from "lucide-react";

import { servicesPageData } from "../../../data/services";

import "../../css/Services/ServicesWhyChooseUs.css";

const icons = {
  verified: BadgeCheck,
  guidance: UsersRound,
  transparent: IndianRupee,
  value: Crown,
};

export default function ServicesWhyChooseUs() {
  const { whyChooseUs } = servicesPageData;

  return (
    <section className="services-why">
      {/* Decorative Botanical - Left */}
      <div
        className="services-why__decoration services-why__decoration--left"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 180 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 256C30 218 48 184 54 148C61 109 53 70 15 8"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M45 176C29 163 17 160 5 164C13 177 26 182 45 176Z"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M53 139C37 128 23 127 11 133C21 145 35 148 53 139Z"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M52 101C38 91 24 91 13 98C23 108 37 110 52 101Z"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M43 65C30 55 18 56 8 63C18 73 31 74 43 65Z"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M51 181C66 169 79 167 91 173C81 185 67 190 51 181Z"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M55 142C70 131 84 130 96 136C86 148 72 151 55 142Z"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M52 103C66 93 80 93 91 100C81 111 67 113 52 103Z"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Decorative Botanical - Right */}
      <div
        className="services-why__decoration services-why__decoration--right"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 180 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M176 256C150 218 132 184 126 148C119 109 127 70 165 8"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M135 176C151 163 163 160 175 164C167 177 154 182 135 176Z"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M127 139C143 128 157 127 169 133C159 145 145 148 127 139Z"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M128 101C142 91 156 91 167 98C157 108 143 110 128 101Z"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M137 65C150 55 162 56 172 63C162 73 149 74 137 65Z"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M129 181C114 169 101 167 89 173C99 185 113 190 129 181Z"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M125 142C110 131 96 130 84 136C94 148 108 151 125 142Z"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M128 103C114 93 100 93 89 100C99 111 113 113 128 103Z"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="container services-why__container">
        {/* Intro */}
        <div className="services-why__intro">
          <div className="services-why__eyebrow">
            <span>{whyChooseUs.eyebrow}</span>
            <span className="services-why__eyebrow-line" />
          </div>

          <h2 className="services-why__title">
            {whyChooseUs.title}
          </h2>

          <p className="services-why__description">
            {whyChooseUs.description}
          </p>

          <Link
            href={whyChooseUs.button.href}
            className="button button-primary services-why__button"
          >
            <span>{whyChooseUs.button.label}</span>

            <ArrowUpRight
              size={15}
              strokeWidth={1.6}
            />
          </Link>
        </div>

        {/* Highlights */}
        <div className="services-why__highlights">
          {whyChooseUs.highlights.map((item, index) => {
            const Icon =
              icons[item.icon as keyof typeof icons];

            return (
              <div
                key={item.id}
                className="services-why__highlight"
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >
                <div className="services-why__icon">
                  <Icon
                    size={27}
                    strokeWidth={1.35}
                  />
                </div>

                <h3 className="services-why__highlight-title">
                  {item.title}
                </h3>

                <p className="services-why__highlight-description">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}