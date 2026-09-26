"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
} from "lucide-react";

import { soulAgroFarmsData } from "../../../data/soulagrofarms";

import "../../css/Soul Agro Farms Pvt ltd/Testimonials.css";

export default function Testimonials() {
  const { testimonials } = soulAgroFarmsData;

  const [activeIndex, setActiveIndex] = useState(0);

  const totalTestimonials = testimonials.items.length;

  const nextTestimonial = () => {
    setActiveIndex((current) =>
      current === totalTestimonials - 1
        ? 0
        : current + 1
    );
  };

  const previousTestimonial = () => {
    setActiveIndex((current) =>
      current === 0
        ? totalTestimonials - 1
        : current - 1
    );
  };

  const activeTestimonial = testimonials.items[activeIndex];

  return (
    <section className="soul-testimonials" id="testimonials">

      {/* Decorative element */}

      <div className="soul-testimonials__decor soul-testimonials__decor--top" />
      <div className="soul-testimonials__decor soul-testimonials__decor--bottom" />

      <div className="container soul-testimonials__container">

        {/* LEFT SIDE */}

        <div className="soul-testimonials__intro">

          <div className="soul-testimonials__eyebrow">
            <span className="soul-testimonials__eyebrow-line" />
            <span>{testimonials.eyebrow}</span>
          </div>

          <h2 className="soul-testimonials__title">
            {testimonials.title.split("\n").map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </h2>

          <p className="soul-testimonials__description">
            {testimonials.description}
          </p>

          <div className="soul-testimonials__controls">

            <button
              type="button"
              className="soul-testimonials__arrow"
              onClick={previousTestimonial}
              aria-label="Previous testimonial"
            >
              <ArrowLeft
                size={17}
                strokeWidth={1.4}
              />
            </button>

            <button
              type="button"
              className="soul-testimonials__arrow"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ArrowRight
                size={17}
                strokeWidth={1.4}
              />
            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="soul-testimonials__content">

          <div className="soul-testimonials__quote-icon">
            <Quote
              size={28}
              strokeWidth={1.2}
            />
          </div>

          <div
            className="soul-testimonials__quote"
            key={activeIndex}
          >
            <blockquote>
              “{activeTestimonial.quote}”
            </blockquote>

            <div className="soul-testimonials__person">

              <div className="soul-testimonials__avatar">
                {activeTestimonial.initials}
              </div>

              <div className="soul-testimonials__person-info">

                <h3>
                  {activeTestimonial.name}
                </h3>

                <div className="soul-testimonials__meta">
                  <span>
                    {activeTestimonial.location}
                  </span>

                  <span>
                    {activeTestimonial.project}
                  </span>
                </div>

              </div>

            </div>
          </div>

          {/* COUNTER */}

          <div className="soul-testimonials__footer">

            <div className="soul-testimonials__counter">

              <span className="soul-testimonials__counter-current">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>

              <span className="soul-testimonials__counter-line" />

              <span className="soul-testimonials__counter-total">
                {String(totalTestimonials).padStart(2, "0")}
              </span>

            </div>

            <div className="soul-testimonials__progress">

              {testimonials.items.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  className={`soul-testimonials__progress-item ${
                    activeIndex === index
                      ? "is-active"
                      : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}