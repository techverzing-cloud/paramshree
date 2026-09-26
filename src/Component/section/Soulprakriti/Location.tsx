"use client";

import {
  ArrowUpRight,
  Building2,
  Car,
  ExternalLink,
  Hospital,
  MapPin,
  Mountain,
  Navigation,
  Trees,
} from "lucide-react";
import Link from 'next/link';

import { soulPrakritiData } from "../../../data/soulprakrtit";
import "../../css/Soul Prakriti/Location.css";

const landmarkIcons = {
  park: Trees,
  road: Car,
  town: Building2,
  hospital: Hospital,
};

export default function Location() {
  const { location } = soulPrakritiData;

  return (
    <section className="soul-location">
      <div className="soul-location__container">

        {/* --------------------------------
            LOCATION HEADER
        -------------------------------- */}

        <div className="soul-location__header">

          <div className="soul-location__heading">

            <div className="soul-location__eyebrow">
              <span>{location.eyebrow}</span>
              <span className="soul-location__eyebrow-line" />
            </div>

            <h2 className="soul-location__title">
              {location.title}
            </h2>

          </div>

          <p className="soul-location__description">
            {location.description}
          </p>

        </div>

        {/* --------------------------------
            MAIN LOCATION AREA
        -------------------------------- */}

        <div className="soul-location__main">

          {/* LEFT CONTENT */}

          <div className="soul-location__content">

            <div className="soul-location__location-mark">
              <MapPin
                size={22}
                strokeWidth={1.4}
              />
            </div>

            <span className="soul-location__small-label">
              PROJECT LOCATION
            </span>

            <h3 className="soul-location__address-title">
              {location.address.title}
            </h3>

            <p className="soul-location__address">
              {location.address.location}
            </p>

            <div className="soul-location__near">
              <Mountain
                size={17}
                strokeWidth={1.4}
              />

              <span>{location.address.landmark}</span>
            </div>

            <a
              href={location.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="soul-location__directions"
            >
              <span>Get Directions</span>

              <ArrowUpRight
                size={17}
                strokeWidth={1.4}
              />
            </a>

            {/* Landmark list */}

            <div className="soul-location__landmarks">

              <span className="soul-location__landmarks-label">
                NEARBY
              </span>

              <div className="soul-location__landmark-list">

                {location.landmarks.map((landmark) => {

                  const Icon =
                    landmarkIcons[
                      landmark.icon as keyof typeof landmarkIcons
                    ];

                  return (
                    <div
                      className="soul-location__landmark"
                      key={landmark.title}
                    >

                      <div className="soul-location__landmark-icon">
                        <Icon
                          size={17}
                          strokeWidth={1.35}
                        />
                      </div>

                      <div>
                        <h4>{landmark.title}</h4>

                        <span>
                          {landmark.distance}
                        </span>
                      </div>

                    </div>
                  );
                })}

              </div>

            </div>

          </div>

          {/* MAP */}

          <div className="soul-location__map-wrapper">

            <div className="soul-location__map">

              <iframe
                src={location.mapEmbedUrl}
                title="Soul Prakriti location map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="soul-location__map-badge">

                <Navigation
                  size={16}
                  strokeWidth={1.5}
                />

                <span>Explore Location</span>

              </div>

              <a
                href={location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="soul-location__map-link"
                aria-label="Open location in Google Maps"
              >
                <ExternalLink
                  size={17}
                  strokeWidth={1.4}
                />
              </a>

            </div>

          </div>

        </div>

        {/* --------------------------------
            AVAILABILITY
        -------------------------------- */}

        <div className="soul-location__availability">

          <div className="soul-location__availability-header">

            <div>

              <div className="soul-location__eyebrow">
                <span>
                  {location.availability.eyebrow}
                </span>

                <span className="soul-location__eyebrow-line" />
              </div>

              <h3 className="soul-location__availability-title">
                {location.availability.title}
              </h3>

            </div>

            <p>
              {location.availability.description}
            </p>

          </div>

          <div className="soul-location__availability-grid">

            {location.availability.items.map(
              (item, index) => (
                <article
                  className="soul-location__availability-card"
                  key={`${item.configuration}-${item.area}`}
                  style={{
                    animationDelay: `${index * 80}ms`,
                  }}
                >

                  <div className="soul-location__availability-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="soul-location__availability-info">

                    <span>
                      CONFIGURATION
                    </span>

                    <h4>
                      {item.configuration}
                    </h4>

                  </div>

                  <div className="soul-location__availability-detail">

                    <span>AREA</span>

                    <strong>
                      {item.area}
                    </strong>

                  </div>

                  <div className="soul-location__availability-detail">

                    <span>PRICE</span>

                    <strong className="soul-location__price">
                      {item.price}
                    </strong>

                  </div>

                  <div className="soul-location__availability-status">

                    <span
                      className={
                        item.status === "Limited"
                          ? "is-limited"
                          : ""
                      }
                    >
                      {item.status}
                    </span>

                  </div>

                  {/* <button
                    type="button"
                    className="soul-location__enquire"
                    href="/contact"
                  >
                    <span>Enquire</span>

                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.4}
                    />
                  </button> */}
                  <Link href="/contact" className="soul-location__enquire">
                    <span>Enquire</span>
                    <ArrowUpRight size={16} strokeWidth={1.4} />
                  </Link>

                </article>
              )
            )}

          </div>

        </div>

      </div>
    </section>
  );
}