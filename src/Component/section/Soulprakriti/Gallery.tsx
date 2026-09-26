"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  X,
} from "lucide-react";

import { soulPrakritiData } from "../../../data/soulprakrtit";
import "../../css/Soul Prakriti/Gallery.css";

export default function Gallery() {
  const { gallery } = soulPrakritiData;

  const [activeFilter, setActiveFilter] = useState("northzone");
  const [selectedImage, setSelectedImage] = useState<
    (typeof gallery.images)[number] | null
  >(null);

const filteredImages = gallery.images.filter(
  (image) => image.category === activeFilter
);

  const selectedIndex = selectedImage
    ? filteredImages.findIndex(
        (image) => image.id === selectedImage.id
      )
    : -1;

  const showPrevious = () => {
    if (selectedIndex === -1) return;

    const previousIndex =
      selectedIndex === 0
        ? filteredImages.length - 1
        : selectedIndex - 1;

    setSelectedImage(filteredImages[previousIndex]);
  };

  const showNext = () => {
    if (selectedIndex === -1) return;

    const nextIndex =
      selectedIndex === filteredImages.length - 1
        ? 0
        : selectedIndex + 1;

    setSelectedImage(filteredImages[nextIndex]);
  };

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage, selectedIndex]);

  return (
    <>
      <section className="soul-gallery">
        <div className="soul-gallery__container">

          {/* Header */}
          <div className="soul-gallery__header">

            <div className="soul-gallery__heading">

              <div className="soul-gallery__eyebrow">
                <span className="soul-gallery__eyebrow-line" />
                <span>{gallery.eyebrow}</span>
              </div>

              <h2 className="soul-gallery__title">
                {gallery.title}
              </h2>

            </div>

            <p className="soul-gallery__description">
              {gallery.description}
            </p>

          </div>

          {/* Filters */}
          <div className="soul-gallery__filters">
            {gallery.filters.map((filter) => {
              const isActive = activeFilter === filter.id;

              return (
                <button
                  key={filter.id}
                  type="button"
                  className={`soul-gallery__filter ${
                    isActive
                      ? "soul-gallery__filter--active"
                      : ""
                  }`}
                  onClick={() => {
                    setActiveFilter(filter.id);
                    setSelectedImage(null);
                  }}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          {/* Gallery */}
          <div className="soul-gallery__grid">
            {filteredImages.map((image, index) => (
              <button
                key={image.id}
                type="button"
                className={`soul-gallery__item soul-gallery__item--${index % 6}`}
                onClick={() => setSelectedImage(image)}
              >
                <div className="soul-gallery__image-wrapper">

                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    className="soul-gallery__image"
                  />

                  <div className="soul-gallery__overlay" />

                  <div className="soul-gallery__meta">

                    <div>
                      <span className="soul-gallery__number">
                        {String(image.id).padStart(2, "0")}
                      </span>

                      <span className="soul-gallery__category">
                        {image.categoryLabel}
                      </span>
                    </div>

                    <span className="soul-gallery__open">
                      <ArrowUpRight
                        size={19}
                        strokeWidth={1.4}
                      />
                    </span>

                  </div>

                  <div className="soul-gallery__caption">
                    {image.title}
                  </div>

                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="soul-gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={() => setSelectedImage(null)}
        >

          <div
            className="soul-gallery-lightbox__inner"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Close */}
            <button
              type="button"
              className="soul-gallery-lightbox__close"
              aria-label="Close image preview"
              onClick={() => setSelectedImage(null)}
            >
              <X size={22} strokeWidth={1.4} />
            </button>

            {/* Image */}
            <div className="soul-gallery-lightbox__image">

              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="90vw"
                className="soul-gallery-lightbox__image-element"
              />

            </div>

            {/* Bottom information */}
            <div className="soul-gallery-lightbox__bottom">

              <div>
                <span className="soul-gallery-lightbox__category">
                  {selectedImage.categoryLabel}
                </span>

                <h3>{selectedImage.title}</h3>
              </div>

              <span className="soul-gallery-lightbox__counter">
                {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                {String(filteredImages.length).padStart(2, "0")}
              </span>

            </div>

            {/* Navigation */}
            <div className="soul-gallery-lightbox__navigation">

              <button
                type="button"
                aria-label="Previous image"
                onClick={showPrevious}
              >
                <ArrowLeft
                  size={20}
                  strokeWidth={1.4}
                />
              </button>

              <button
                type="button"
                aria-label="Next image"
                onClick={showNext}
              >
                <ArrowRight
                  size={20}
                  strokeWidth={1.4}
                />
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
}