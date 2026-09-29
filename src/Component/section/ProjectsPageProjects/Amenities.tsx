"use client";

import {
  Activity,
  Dumbbell,
  Leaf,
  Sparkles,
  Users,
} from "lucide-react";

import type { ProjectPageProject } from "../../../data/ProjectPageProject";

import "../../css/ProjectPageProjects/Amenities.css";

type AmenitiesProps = {
  project: ProjectPageProject;
};

const zoneIconMap = {
  north: Sparkles,
  south: Leaf,
  east: Dumbbell,
  west: Users,
  central: Activity,
};

export default function Amenities({
  project,
}: AmenitiesProps) {
  const { amenities } = project;

  return (
    <section className="soul-amenities">
      <div className="soul-amenities__container">

        {/* Header */}
        <div className="soul-amenities__header">
          <div className="soul-amenities__eyebrow">
            <span>{amenities.eyebrow}</span>
            <span className="soul-amenities__eyebrow-line" />
          </div>

          <h2 className="soul-amenities__title">
            {amenities.title}
          </h2>

          <p className="soul-amenities__description">
            {amenities.description}
          </p>
        </div>

        {/* Zones */}
        <div className="soul-amenities__zones">
          {amenities.zones.map((zone, index) => {
            const Icon =
              zoneIconMap[
                zone.id as keyof typeof zoneIconMap
              ] || Sparkles;

            return (
              <div
                className="soul-amenities__zone"
                key={zone.id}
              >
                <div className="soul-amenities__zone-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="soul-amenities__zone-icon">
                  <Icon
                    size={25}
                    strokeWidth={1.2}
                  />
                </div>

                <div className="soul-amenities__zone-content">
                  <h3>{zone.name}</h3>

                  <p className="soul-amenities__zone-subtitle">
                    {zone.subtitle}
                  </p>

                  <div className="soul-amenities__items">
                    {zone.items.map((item) => (
                      <span
                        key={item}
                        className="soul-amenities__item"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}