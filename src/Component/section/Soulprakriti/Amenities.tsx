"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

import { soulPrakritiData } from "../../../data/soulprakrtit";
import "../../css/Soul Prakriti/Amenities.css";

export default function Amenities() {
  const { amenities } = soulPrakritiData;

  const [activeZone, setActiveZone] = useState(amenities.zones[0].id);

  const selectedZone =
    amenities.zones.find((zone) => zone.id === activeZone) ??
    amenities.zones[0];

  return (
    <section className="soul-amenities">
      <div className="soul-amenities__container">

        {/* Header */}
        <div className="soul-amenities__header">

          <div className="soul-amenities__heading">
            <div className="soul-amenities__eyebrow">
              <span className="soul-amenities__eyebrow-line" />
              <span>{amenities.eyebrow}</span>
            </div>

            <h2 className="soul-amenities__title">
              {amenities.title}
            </h2>
          </div>

          <p className="soul-amenities__description">
            {amenities.description}
          </p>

        </div>

        {/* Zone Navigation */}
        <div className="soul-amenities__zones">
          {amenities.zones.map((zone) => {
            const isActive = zone.id === activeZone;

            return (
              <button
                key={zone.id}
                type="button"
                className={`soul-zone ${
                  isActive ? "soul-zone--active" : ""
                }`}
                onClick={() => setActiveZone(zone.id)}
              >
                <span className="soul-zone__name">
                  {zone.name}
                </span>

                <span className="soul-zone__subtitle">
                  {zone.subtitle}
                </span>

                <ArrowUpRight
                  className="soul-zone__arrow"
                  size={17}
                  strokeWidth={1.5}
                />
              </button>
            );
          })}
        </div>

        {/* Active Zone Heading */}
        <div
          className="soul-amenities__active-header"
          key={selectedZone.id}
        >
          <div>
            <span className="soul-amenities__active-label">
              {selectedZone.name}
            </span>

            <h3>{selectedZone.subtitle}</h3>
          </div>

          <span className="soul-amenities__count">
            {String(selectedZone.items.length).padStart(2, "0")} Amenities
          </span>
        </div>

        {/* Amenities */}
        <div
          className="soul-amenities__list"
          key={`${selectedZone.id}-items`}
        >
          {selectedZone.items.map((item, index) => (
            <div
              className="soul-amenity"
              key={item}
              style={{
                animationDelay: `${index * 45}ms`,
              }}
            >
              <div className="soul-amenity__marker">
                <Check size={14} strokeWidth={1.7} />
              </div>

              <span className="soul-amenity__number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="soul-amenity__name">
                {item}
              </span>

              <ArrowUpRight
                className="soul-amenity__arrow"
                size={16}
                strokeWidth={1.4}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}