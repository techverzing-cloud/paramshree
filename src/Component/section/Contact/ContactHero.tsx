"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { contactPageData } from "../../../data/contact";
import InquiryModal from "./InquiryModal";

import "../../css/Contact/ContactHero.css";

export default function Hero() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const { hero } = contactPageData;

  return (
    <>
      <section className="contact-hero">
        <div className="contact-hero__background">
          <Image
            src={hero.backgroundImage}
            alt={hero.imageAlt}
            fill
            priority
            className="contact-hero__image"
            sizes="100vw"
          />
        </div>

        <div className="contact-hero__overlay" />

        <div className="contact-hero__container container">
          <div className="contact-hero__content">
            <div className="contact-hero__eyebrow">
              <span>{hero.eyebrow}</span>
              <span className="contact-hero__eyebrow-line" />
            </div>

            <h1 className="contact-hero__title">
              {hero.title.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  {index < hero.title.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h1>

            <p className="contact-hero__description">
              {hero.description}
            </p>

            <button
              type="button"
              className="button button-primary contact-hero__button"
              onClick={() => setIsInquiryOpen(true)}
            >
              <span>{hero.buttonText}</span>

              <ArrowRight size={15} strokeWidth={1.7} />
            </button>
          </div>
        </div>

        <div className="contact-hero__bottom-fade" />
      </section>

      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        source="Talk to Our Team"
      />
    </>
  );
}