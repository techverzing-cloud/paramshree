"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { servicesPageData } from "../../../data/services";

import "../../css/Services/ServicesCTA.css";

export default function ServicesCTA() {
  const { cta } = servicesPageData;

  return (
    <section className="services-cta">
      {/* Background Image */}
      <div
        className="services-cta__background"
        style={{
          backgroundImage: `url(${cta.image})`,
        }}
      />

      {/* Image Overlay */}
      <div className="services-cta__overlay" />

      {/* Decorative Leaves */}
      <div
        className="services-cta__decoration"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 180 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M177 4C139 24 108 53 87 84C69 111 57 137 43 157"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M135 32C120 22 106 21 94 25C103 38 117 41 135 32Z"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M108 58C92 51 79 52 68 59C80 69 94 68 108 58Z"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M84 88C69 82 56 84 46 92C58 101 72 99 84 88Z"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M68 113C53 109 41 112 32 121C44 128 57 125 68 113Z"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M105 59C117 45 130 40 143 42C137 56 124 63 105 59Z"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M78 91C91 77 104 74 117 77C111 91 97 97 78 91Z"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="container services-cta__container">
        {/* Heading */}
        <div className="services-cta__heading">
          <span className="services-cta__eyebrow">
            {cta.eyebrow}
          </span>

          <h2 className="services-cta__title">
            {cta.title}
          </h2>
        </div>

        {/* Description */}
        <div className="services-cta__description-wrapper">
          <span className="services-cta__divider" />

          <p className="services-cta__description">
            {cta.description}
          </p>
        </div>

        {/* Button */}
        <div className="services-cta__action">
          <Link
            href={cta.button.href}
            className="button button-primary services-cta__button"
          >
            <span>{cta.button.label}</span>

            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}