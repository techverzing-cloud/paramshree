"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

import { contactPageData } from "../../../data/contact";

import InquiryModal from "./InquiryModal";

import "../../css/Contact/ContactCTA.css";

export default function CTA() {
  const data = contactPageData.cta;

  const [isInquiryOpen, setIsInquiryOpen] =
    useState(false);

  return (
    <>
      <section className="contact-cta">
        {/* Background Image */}

        <div className="contact-cta__background">
          <img
            src={data.backgroundImage}
            alt={data.backgroundAlt}
          />
        </div>

        {/* Overlay */}

        <div className="contact-cta__overlay" />

        {/* Decorative glow */}

        <div className="contact-cta__texture" />

        <div className="container">
          <div className="contact-cta__content">

            {/* LEFT CONTENT */}

            <div className="contact-cta__text">
              <h2 className="contact-cta__title">
                {data.title.split("\n").map(
                  (line, index) => (
                    <span key={index}>
                      {line}

                      {index <
                        data.title.split("\n").length -
                          1 && <br />}
                    </span>
                  )
                )}
              </h2>

              <p className="contact-cta__description">
                {data.description}
              </p>
            </div>

            {/* RIGHT BUTTON */}

            <button
              type="button"
              className="button button-primary contact-cta__button"
              onClick={() => setIsInquiryOpen(true)}
            >
              <span>{data.buttonText}</span>

              <ArrowRight
                size={15}
                strokeWidth={1.7}
              />
            </button>

          </div>
        </div>

        {/* Decorative leaf */}

        <div
          className="contact-cta__leaf"
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>

      {/* SAME REUSABLE INQUIRY FORM */}

      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        source="Contact Page CTA"
      />
    </>
  );
}