"use client";

import {
  Car,
  Hospital,
  MapPin,
  Navigation,
  TreePine,
} from "lucide-react";

import type { ProjectPageProject } from "../../../data/ProjectPageProject";

import "../../css/ProjectPageProjects/Location.css";

type LocationProps = {
  project: ProjectPageProject;
};

const landmarkIconMap = {
  park: TreePine,
  road: Car,
  town: MapPin,
  hospital: Hospital,
};

export default function Location({
  project,
}: LocationProps) {
  const { location } = project;

  return (
    <section className="soul-location">
      <div className="soul-location__container">

        {/* Content */}
        <div className="soul-location__content">

          <div className="soul-location__eyebrow">
            <span>{location.eyebrow}</span>
            <span className="soul-location__eyebrow-line" />
          </div>

          <h2 className="soul-location__title">
            {location.title}
          </h2>

          <p className="soul-location__description">
            {location.description}
          </p>

          {/* Address */}
          <div className="soul-location__address">
            <div className="soul-location__address-icon">
              <MapPin
                size={21}
                strokeWidth={1.3}
              />
            </div>

            <div>
              <strong>
                {location.address.title}
              </strong>

              <span>
                {location.address.location}
              </span>

              <small>
                {location.address.landmark}
              </small>
            </div>
          </div>

          {/* Landmarks */}
          <div className="soul-location__landmarks">
            {location.landmarks.map(
              (landmark) => {
                const Icon =
                  landmarkIconMap[
                    landmark.icon as keyof typeof landmarkIconMap
                  ] || MapPin;

                return (
                  <div
                    className="soul-location__landmark"
                    key={landmark.title}
                  >
                    <div className="soul-location__landmark-icon">
                      <Icon
                        size={19}
                        strokeWidth={1.3}
                      />
                    </div>

                    <div>
                      <strong>
                        {landmark.title}
                      </strong>

                      <span>
                        {landmark.distance}
                      </span>
                    </div>
                  </div>
                );
              }
            )}
          </div>

          {/* Directions */}
          <a
            href={location.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="soul-location__directions"
          >
            <Navigation
              size={18}
              strokeWidth={1.3}
            />

            Get Directions
          </a>
        </div>

        {/* Map */}
        <div className="soul-location__map">
          <iframe
            src={location.mapEmbedUrl}
            title={`${project.name} location`}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Availability */}
        <div className="soul-location__availability">

          <div className="soul-location__availability-header">

            <div className="soul-location__eyebrow">
              <span>
                {location.availability.eyebrow}
              </span>

              <span className="soul-location__eyebrow-line" />
            </div>

            <h3>
              {location.availability.title}
            </h3>

            <p>
              {location.availability.description}
            </p>
          </div>

          <div className="soul-location__availability-list">
            {location.availability.items.map(
              (item) => (
                <div
                  className="soul-location__availability-item"
                  key={`${item.configuration}-${item.area}`}
                >
                  <div>
                    <strong>
                      {item.configuration}
                    </strong>

                    <span>
                      {item.area}
                    </span>
                  </div>

                  <div>
                    <span>
                      {item.price}
                    </span>

                    <small>
                      {item.status}
                    </small>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}