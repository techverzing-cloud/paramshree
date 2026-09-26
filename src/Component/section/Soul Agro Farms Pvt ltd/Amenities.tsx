"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { soulAgroFarmsData } from "../../../data/soulagrofarms";

import "../../css/Soul Agro Farms Pvt ltd/Amenities.css";

export default function Amenities() {
  const { amenities } = soulAgroFarmsData;

  return (
    <section className="soul-amenities" id="amenities">
      <div className="soul-amenities__decor soul-amenities__decor--top" />

      <div className="container soul-amenities__container">

        {/* HEADER */}

        <div className="soul-amenities__header">

          <div className="soul-amenities__heading">

            <div className="soul-amenities__eyebrow">
              <span className="soul-amenities__eyebrow-line" />
              <span>{amenities.eyebrow}</span>
            </div>

            <h2 className="soul-amenities__title">
              {amenities.title.split("\n").map((line, index) => (
                <span key={index}>{line}</span>
              ))}
            </h2>

          </div>

          <div className="soul-amenities__intro">
            <p>{amenities.description}</p>

          </div>

        </div>

        {/* AMENITIES GRID */}

        <div className="soul-amenities__grid">

          {amenities.items.map((item) => (
            <article
              className="soul-amenities__card"
              key={item.number}
            >
              <div className="soul-amenities__image">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                />

                <div className="soul-amenities__overlay" />

                <span className="soul-amenities__number">
                  {item.number}
                </span>

                <div className="soul-amenities__arrow">
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.4}
                  />
                </div>

                <div className="soul-amenities__card-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}