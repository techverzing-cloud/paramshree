"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { contactPageData } from "../../../data/contact";

import "../../css/Contact/FAQ.css";

export default function FAQ() {
  const data = contactPageData.faq;

  const [openIndex, setOpenIndex] =
    useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section className="contact-faq section">
      <div className="container">
        <div className="contact-faq__grid">

          {/* =====================================
              LEFT CONTENT
          ====================================== */}

          <div className="contact-faq__intro">
            <span className="section-label">
              {data.eyebrow}
            </span>

            <h2 className="contact-faq__title">
              {data.title}
            </h2>

            <p className="contact-faq__description">
              {data.description}
            </p>

            {/* Decorative Illustration */}

            <div className="contact-faq__illustration">
              <img
                src={data.illustration}
                alt={data.illustrationAlt}
              />
            </div>
          </div>

          {/* =====================================
              FAQ ACCORDION
          ====================================== */}

          <div className="contact-faq__accordion">
            {data.items.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  className={`contact-faq__item ${
                    isOpen
                      ? "contact-faq__item--open"
                      : ""
                  }`}
                  key={item.question}
                >
                  <button
                    type="button"
                    className="contact-faq__question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span>
                      {item.question}
                    </span>

                    <span className="contact-faq__icon">
                      <Plus
                        size={17}
                        strokeWidth={1.4}
                      />
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    className="contact-faq__answer-wrapper"
                    aria-hidden={!isOpen}
                  >
                    <div className="contact-faq__answer">
                      <p>{item.answer}</p>
                    </div>
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