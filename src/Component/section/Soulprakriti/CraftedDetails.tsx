"use client";

import { useState } from "react";
import { ArrowDownRight, Plus } from "lucide-react";

import { soulPrakritiData } from "../../../data/soulprakrtit";
import "../../css/Soul Prakriti/CraftedDetails.css";

export default function CraftedDetails() {
  const { craftedDetails } = soulPrakritiData;

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section className="soul-crafted">

      <div className="soul-crafted__container">

        {/* =====================================
            HEADER
        ===================================== */}

        <div className="soul-crafted__header">

          <div className="soul-crafted__heading">

            <div className="soul-crafted__eyebrow">
              <span>{craftedDetails.eyebrow}</span>

              <span className="soul-crafted__eyebrow-line" />
            </div>

            <h2 className="soul-crafted__title">
              {craftedDetails.title}
            </h2>

          </div>

          <div className="soul-crafted__intro">

            <p>
              {craftedDetails.description}
            </p>

            <div className="soul-crafted__intro-mark">
              <ArrowDownRight
                size={25}
                strokeWidth={1.2}
              />
            </div>

          </div>

        </div>

        {/* =====================================
            DETAILS
        ===================================== */}

        <div className="soul-crafted__list">

          {craftedDetails.items.map((item, index) => {

            const isActive = activeIndex === index;

            return (
              <article
                className={`soul-crafted__item ${
                  isActive
                    ? "soul-crafted__item--active"
                    : ""
                }`}
                key={item.number}
              >

                {/* =================================
                    CLICKABLE HEADER
                ================================= */}

                <button
                  type="button"
                  className="soul-crafted__trigger"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isActive}
                >

                  <span className="soul-crafted__number">
                    {item.number}
                  </span>

                  <span className="soul-crafted__trigger-content">

                    <span className="soul-crafted__item-title">
                      {item.title}
                    </span>

                    <span className="soul-crafted__preview">
                      {item.preview}
                    </span>

                  </span>

                  <span className="soul-crafted__toggle">

                    <Plus
                      size={20}
                      strokeWidth={1.25}
                    />

                  </span>

                </button>

                {/* =================================
                    EXPANDED CONTENT
                ================================= */}

                <div
                  className="soul-crafted__content-wrapper"
                  style={{
                    gridTemplateRows: isActive
                      ? "1fr"
                      : "0fr",
                  }}
                >

                  <div className="soul-crafted__content">

                    <div className="soul-crafted__content-inner">

                      <div className="soul-crafted__content-line" />

                      <div className="soul-crafted__details">

                        {item.details.map(
                          (detail, detailIndex) => (
                            <div
                              className="soul-crafted__detail"
                              key={detailIndex}
                            >

                              <span className="soul-crafted__detail-dot" />

                              <p>{detail}</p>

                            </div>
                          )
                        )}

                      </div>

                    </div>

                  </div>

                </div>

              </article>
            );
          })}

        </div>

        {/* =====================================
            BOTTOM NOTE
        ===================================== */}

        <div className="soul-crafted__bottom">

          <span className="soul-crafted__bottom-line" />

          <p>
            Details may vary depending on the selected
            configuration and final project specifications.
          </p>

        </div>

      </div>

    </section>
  );
}