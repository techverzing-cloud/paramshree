"use client";

import { useState } from "react";
import {
  Clock3,
  MapPin,
  ArrowRight,
} from "lucide-react";

import { contactPageData } from "../../../data/contact";

import InquiryModal from "./InquiryModal";

import "../../css/Contact/OfficeVisit.css";

export default function OfficeVisit() {
  const data = contactPageData.officeVisit;

  const [isInquiryOpen, setIsInquiryOpen] =
    useState(false);

  return (
    <>
      <section className="office-visit">
        <div className="office-visit__image">
          <img
            src={data.image}
            alt={data.imageAlt}
          />
        </div>

        <div className="office-visit__content">
          <div className="office-visit__main">
            <span className="section-label">
              {data.eyebrow}
            </span>

            <h2 className="office-visit__title">
              {data.title.split("\n").map(
                (line, index) => (
                  <span key={index}>
                    {line}

                    {index <
                      data.title.split("\n").length - 1 && (
                      <br />
                    )}
                  </span>
                )
              )}
            </h2>

            <p className="office-visit__description">
              {data.description}
            </p>

            <button
              type="button"
              className="button button-primary office-visit__button"
              onClick={() => setIsInquiryOpen(true)}
            >
              <span>{data.buttonText}</span>

              <ArrowRight
                size={15}
                strokeWidth={1.7}
              />
            </button>
          </div>

          <div className="office-visit__details">
            {/* ADDRESS */}

            <div className="office-visit__detail">
              <div className="office-visit__detail-icon">
                <MapPin
                  size={19}
                  strokeWidth={1.4}
                />
              </div>

              <div className="office-visit__detail-content">
                <h3>{data.address.title}</h3>

                <p className="office-visit__detail-value">
                  {data.address.value}
                </p>

                <p className="office-visit__detail-secondary">
                  {data.address.location
                    .split("\n")
                    .map((line, index) => (
                      <span key={index}>
                        {line}

                        {index <
                          data.address.location.split(
                            "\n"
                          ).length -
                            1 && <br />}
                      </span>
                    ))}
                </p>
              </div>
            </div>

            {/* WORKING HOURS */}

            <div className="office-visit__detail">
              <div className="office-visit__detail-icon">
                <Clock3
                  size={19}
                  strokeWidth={1.4}
                />
              </div>

              <div className="office-visit__detail-content">
                <h3>
                  {data.workingHours.title}
                </h3>

                <p className="office-visit__detail-value">
                  {data.workingHours.value}
                </p>

                <p className="office-visit__detail-secondary">
                  {data.workingHours.secondary}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SAME REUSABLE FORM */}

      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        source="Plan a Site Visit"
      />
    </>
  );
}