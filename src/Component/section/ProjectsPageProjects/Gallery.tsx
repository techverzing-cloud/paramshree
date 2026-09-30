"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import type { ProjectPageProject } from "../../../data/ProjectPageProject";

import "../../css/ProjectPageProjects/Gallery.css";

type GalleryProps = {
  project: ProjectPageProject;
};

export default function Gallery({ project }: GalleryProps) {
  const { gallery } = project;

  const [activeFilter, setActiveFilter] = useState(
    gallery.filters[0]?.id || "all"
  );

  const [activeImage, setActiveImage] = useState<number | null>(null);

  const filteredImages = gallery.images.filter(
    (image) => image.category === activeFilter
  );

  const openSlider = (index: number) => {
    setActiveImage(index);
  };

  const closeSlider = () => {
    setActiveImage(null);
  };

  const showPrevious = () => {
    if (activeImage === null || filteredImages.length === 0) return;

    setActiveImage(
      activeImage === 0
        ? filteredImages.length - 1
        : activeImage - 1
    );
  };

  const showNext = () => {
    if (activeImage === null || filteredImages.length === 0) return;

    setActiveImage(
      activeImage === filteredImages.length - 1
        ? 0
        : activeImage + 1
    );
  };

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    setActiveImage(null);
  };

  return (
    <section className="soul-gallery">
      <div className="soul-gallery__container">

        {/* HEADER */}
        <div className="soul-gallery__header">

          <div className="soul-gallery__eyebrow">
            <span className="soul-gallery__eyebrow-line" />
            {gallery.eyebrow}
          </div>

          <h2 className="soul-gallery__title">
            {gallery.title}
          </h2>

          <p className="soul-gallery__description">
            {gallery.description}
          </p>

        </div>

        {/* FILTERS */}
        <div className="soul-gallery__filters">

          {gallery.filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className={`soul-gallery__filter ${
                activeFilter === filter.id
                  ? "soul-gallery__filter--active"
                  : ""
              }`}
              onClick={() => handleFilterChange(filter.id)}
            >
              {filter.label}
            </button>
          ))}

        </div>

        {/* IMAGE GRID */}
        <div className="soul-gallery__grid">

          {filteredImages.map((image, index) => (
            <button
              key={image.id}
              type="button"
              className="soul-gallery__item"
              onClick={() => openSlider(index)}
            >
              <div className="soul-gallery__image-wrapper">

                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="soul-gallery__image"
                />

                <div className="soul-gallery__overlay">
                  <span>{image.title}</span>
                </div>

              </div>
            </button>
          ))}

        </div>
      </div>

      {/* =====================================================
          IMAGE SLIDER MODAL
         ===================================================== */}

      {activeImage !== null && filteredImages[activeImage] && (
        <div
          className="soul-gallery__modal"
          onClick={closeSlider}
        >

          {/* CLOSE */}
          <button
            type="button"
            className="soul-gallery__modal-close"
            onClick={closeSlider}
            aria-label="Close gallery"
          >
            <X size={24} />
          </button>

          {/* PREVIOUS */}
          <button
            type="button"
            className="soul-gallery__modal-prev"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          {/* IMAGE */}
          <div
            className="soul-gallery__modal-content"
            onClick={(event) => event.stopPropagation()}
          >

            <div className="soul-gallery__modal-image">
              <Image
                src={filteredImages[activeImage].src}
                alt={filteredImages[activeImage].alt}
                fill
                sizes="90vw"
              />
            </div>

            <div className="soul-gallery__modal-caption">
              <h3>
                {filteredImages[activeImage].title}
              </h3>

              <span>
                {filteredImages[activeImage].categoryLabel}
              </span>

              <p>
                {activeImage + 1} / {filteredImages.length}
              </p>
            </div>

          </div>

          {/* NEXT */}
          <button
            type="button"
            className="soul-gallery__modal-next"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>

        </div>
      )}
    </section>
  );
}