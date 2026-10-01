"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { soulAgroFarmsData } from "../../../data/soulagrofarms";

import "../../css/Soul Agro Farms Pvt ltd/Location.css";

export default function Location() {
  const { location } = soulAgroFarmsData;

  return (
    <section className="soul-location" id="location">
      <div className="soul-location__decor" />

      <div className="container soul-location__container">

        {/* LEFT CONTENT */}
        <div className="soul-location__content">

          <div className="soul-location__eyebrow">
            <span className="soul-location__eyebrow-line" />
            <span>{location.eyebrow}</span>
          </div>

          <h2 className="soul-location__title">
            {location.title.split("\n").map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </h2>

          <p className="soul-location__description">
            {location.description}
          </p>

          <div className="soul-location__highlights">
            {location.highlights.map((item) => (
              <div
                className="soul-location__highlight"
                key={item.number}
              >
                <span className="soul-location__highlight-number">
                  {item.number}
                </span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href={location.buttonLink}
            className="button button-primary soul-location__button"
          >
            <span>{location.buttonText}</span>
            <ArrowRight size={15} strokeWidth={1.6} />
          </Link>
        </div>

        {/* RIGHT MAP */}
        <div className="soul-location__map-wrapper">

          <div className="soul-location__map">
            <iframe
              src={location.iframeUrl}
              title="Soul Agro Farms Location"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="soul-location__map-label">
            <MapPin size={15} strokeWidth={1.5} />

            <div>
              <span>SOUL AGRO FARMS</span>
              <small>LOCATION</small>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}