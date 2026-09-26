"use client";

import { ArrowRight, MapPin } from "lucide-react";

import { soulAgroFarmsData } from "../../../data/soulagrofarms";

import "../../css/Soul Agro Farms Pvt ltd/Location.css";

export default function Location() {
  const { location } = soulAgroFarmsData;

  return (
    <section className="soul-location" id="location">
      <div className="soul-location__decor soul-location__decor--top" />
      <div className="soul-location__decor soul-location__decor--bottom" />

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

        </div>

        {/* RIGHT MAP PANEL */}
        <div className="soul-location__visual">

          <div className="soul-location__map">

            <div className="soul-location__map-grid" />

            <div className="soul-location__road soul-location__road--one" />
            <div className="soul-location__road soul-location__road--two" />
            <div className="soul-location__road soul-location__road--three" />

            <div className="soul-location__map-label soul-location__map-label--city">
              DELHI
            </div>

            <div className="soul-location__map-label soul-location__map-label--highway">
              HIGHWAY
            </div>

            <div className="soul-location__pin">
              <div className="soul-location__pin-pulse" />

              <div className="soul-location__pin-icon">
                <MapPin size={20} strokeWidth={1.5} />
              </div>

              <div className="soul-location__pin-label">
                <span>SOUL AGRO FARMS</span>
                <strong>Nature, Within Reach</strong>
              </div>
            </div>

          </div>

          {/* DISTANCE CARD */}
          <div className="soul-location__distances">

            <div className="soul-location__distance-heading">
              <span>CONNECTED TO WHAT MATTERS</span>
            </div>

            <div className="soul-location__distance-grid">
              {location.distances.map((item) => (
                <div
                  className="soul-location__distance"
                  key={item.place}
                >
                  <span>{item.place}</span>
                  <strong>{item.distance}</strong>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}