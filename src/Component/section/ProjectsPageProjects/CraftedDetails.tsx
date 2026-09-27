"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import type { ProjectPageProject } from "../../../data/ProjectPageProject";

import "../../css/ProjectPageProjects/CraftedDetails.css";

type CraftedDetailsProps = {
  project: ProjectPageProject;
};

export default function CraftedDetails({
  project,
}: CraftedDetailsProps) {
  const { craftedDetails } = project;

  const [activeItem, setActiveItem] = useState<string | null>(
    null
  );

  const handleToggle = (number: string) => {
    setActiveItem((current) =>
      current === number ? null : number
    );
  };

  return (
    <section className="soul-crafted">
      <div className="soul-crafted__container">

        {/* Header */}
        <div className="soul-crafted__header">
          <div className="soul-crafted__eyebrow">
            <span>{craftedDetails.eyebrow}</span>
            <span className="soul-crafted__eyebrow-line" />
          </div>

          <h2 className="soul-crafted__title">
            {craftedDetails.title}
          </h2>

          <p className="soul-crafted__description">
            {craftedDetails.description}
          </p>
        </div>

        {/* Details */}
        <div className="soul-crafted__list">
          {craftedDetails.items.map((item) => {
            const isActive = activeItem === item.number;

            return (
              <div
                className={`soul-crafted__item ${
                  isActive
                    ? "soul-crafted__item--active"
                    : ""
                }`}
                key={item.number}
              >
                <button
                  type="button"
                  className="soul-crafted__item-button"
                  onClick={() =>
                    handleToggle(item.number)
                  }
                  aria-expanded={isActive}
                >
                  <span className="soul-crafted__number">
                    {item.number}
                  </span>

                  <span className="soul-crafted__item-title">
                    {item.title}
                  </span>

                  <span className="soul-crafted__icon">
                    <ChevronDown
                      size={20}
                      strokeWidth={1.4}
                    />
                  </span>
                </button>

                <div
                  className="soul-crafted__content"
                  style={{
                    maxHeight: isActive
                      ? "500px"
                      : "0px",
                  }}
                >
                  <div className="soul-crafted__content-inner">
                    <p className="soul-crafted__preview">
                      {item.preview}
                    </p>

                    <ul className="soul-crafted__details">
                      {item.details.map((detail) => (
                        <li key={detail}>
                          {detail}
                        </li>
                      ))}
                    </ul>
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