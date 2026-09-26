"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  X,
} from "lucide-react";

import { soulAgroFarmsData } from "../../../data/soulagrofarms";

import "../../css/Soul Agro Farms Pvt ltd/Gallery.css";

export default function Gallery() {
  const { gallery } = soulAgroFarmsData;

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const featuredImage = gallery.images.find(
    (image) => image.featured
  );

  const secondaryImages = gallery.images.filter(
    (image) => !image.featured
  );

  /* =========================================
     OPEN GALLERY
  ========================================= */

  const openGallery = (index = 0) => {
    setActiveIndex(index);
    setIsGalleryOpen(true);
  };

  /* =========================================
     CLOSE GALLERY
  ========================================= */

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  /* =========================================
     NEXT IMAGE
  ========================================= */

  const nextImage = () => {
    setActiveIndex((current) =>
      current === gallery.images.length - 1
        ? 0
        : current + 1
    );
  };

  /* =========================================
     PREVIOUS IMAGE
  ========================================= */

  const previousImage = () => {
    setActiveIndex((current) =>
      current === 0
        ? gallery.images.length - 1
        : current - 1
    );
  };

  /* =========================================
     KEYBOARD CONTROLS
  ========================================= */

  useEffect(() => {
    if (!isGalleryOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeGallery();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow = "";
    };
  }, [isGalleryOpen]);

  return (
    <>
      <section
        className="soul-gallery"
        id="gallery"
      >

        {/* Decorative background */}
        <div className="soul-gallery__decor soul-gallery__decor--top" />

        <div className="container soul-gallery__container">

          {/* =========================================
              LEFT CONTENT
          ========================================= */}

          <div className="soul-gallery__content">

            <div className="soul-gallery__eyebrow">
              <span className="soul-gallery__eyebrow-line" />

              <span>
                {gallery.eyebrow}
              </span>
            </div>

            <h2 className="soul-gallery__title">
              {gallery.title
                .split("\n")
                .map((line, index) => (
                  <span key={index}>
                    {line}
                  </span>
                ))}
            </h2>

            <p className="soul-gallery__description">
              {gallery.description}
            </p>

            {/* OPEN POPUP */}
            <button
              type="button"
              className="button button-primary soul-gallery__button"
              onClick={() => openGallery(0)}
            >
              <span>
                {gallery.buttonText}
              </span>

              <ArrowRight
                size={15}
                strokeWidth={1.6}
              />
            </button>

          </div>


          {/* =========================================
              IMAGE GRID
          ========================================= */}

          <div className="soul-gallery__grid">

            {/* FEATURED IMAGE */}

            {featuredImage && (
              <button
                type="button"
                className="soul-gallery__featured"
                onClick={() =>
                  openGallery(
                    gallery.images.findIndex(
                      (image) =>
                        image.src ===
                        featuredImage.src
                    )
                  )
                }
                aria-label="Open gallery"
              >

                <Image
                  src={featuredImage.src}
                  alt={featuredImage.alt}
                  fill
                  className="soul-gallery__image"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />

                <div className="soul-gallery__image-overlay" />

                <div className="soul-gallery__image-action">
                  <Maximize2
                    size={15}
                    strokeWidth={1.4}
                  />
                </div>

                <div className="soul-gallery__image-number">
                  01
                </div>

              </button>
            )}


            {/* SECONDARY IMAGES */}

            <div className="soul-gallery__secondary">

              {secondaryImages.map(
                (image, index) => {

                  const originalIndex =
                    gallery.images.findIndex(
                      (item) =>
                        item.src === image.src
                    );

                  return (
                    <button
                      type="button"
                      className="soul-gallery__item"
                      key={image.src}
                      onClick={() =>
                        openGallery(
                          originalIndex
                        )
                      }
                      aria-label={`Open gallery image ${
                        originalIndex + 1
                      }`}
                    >

                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="soul-gallery__image"
                        sizes="(max-width: 768px) 50vw, 20vw"
                      />

                      <div className="soul-gallery__image-overlay" />

                      <div className="soul-gallery__image-action">
                        <Maximize2
                          size={13}
                          strokeWidth={1.4}
                        />
                      </div>

                      <div className="soul-gallery__image-number">
                        {String(
                          originalIndex + 1
                        ).padStart(2, "0")}
                      </div>

                    </button>
                  );
                }
              )}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          GALLERY POPUP
      ========================================= */}

      {isGalleryOpen && (
        <div
          className="soul-gallery-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Soul Agro Farms gallery"
          onMouseDown={(event) => {
            if (
              event.target === event.currentTarget
            ) {
              closeGallery();
            }
          }}
        >

          <div className="soul-gallery-modal__content">

            {/* CLOSE */}

            <button
              type="button"
              className="soul-gallery-modal__close"
              onClick={closeGallery}
              aria-label="Close gallery"
            >
              <X
                size={20}
                strokeWidth={1.5}
              />
            </button>


            {/* =====================================
                TOP INFO
            ===================================== */}

            <div className="soul-gallery-modal__header">

              <div>
                <span className="soul-gallery-modal__eyebrow">
                  SOUL AGRO FARMS
                </span>

                <h3>
                  Gallery
                </h3>
              </div>

              <div className="soul-gallery-modal__counter">
                <span>
                  {String(
                    activeIndex + 1
                  ).padStart(2, "0")}
                </span>

                <span className="soul-gallery-modal__counter-line" />

                <span>
                  {String(
                    gallery.images.length
                  ).padStart(2, "0")}
                </span>
              </div>

            </div>


            {/* =====================================
                SLIDER
            ===================================== */}

            <div className="soul-gallery-modal__slider">

              {/* PREVIOUS */}

              <button
                type="button"
                className="soul-gallery-modal__arrow soul-gallery-modal__arrow--left"
                onClick={previousImage}
                aria-label="Previous image"
              >
                <ArrowLeft
                  size={20}
                  strokeWidth={1.3}
                />
              </button>


              {/* IMAGE */}

              <div className="soul-gallery-modal__image">

                <Image
                  key={gallery.images[activeIndex].src}
                  src={
                    gallery.images[
                      activeIndex
                    ].src
                  }
                  alt={
                    gallery.images[
                      activeIndex
                    ].alt
                  }
                  fill
                  priority
                  sizes="90vw"
                />

              </div>


              {/* NEXT */}

              <button
                type="button"
                className="soul-gallery-modal__arrow soul-gallery-modal__arrow--right"
                onClick={nextImage}
                aria-label="Next image"
              >
                <ArrowRight
                  size={20}
                  strokeWidth={1.3}
                />
              </button>

            </div>


            {/* =====================================
                IMAGE DESCRIPTION
            ===================================== */}

            <div className="soul-gallery-modal__caption">

              <span>
                {String(
                  activeIndex + 1
                ).padStart(2, "0")}
              </span>

              <p>
                {
                  gallery.images[
                    activeIndex
                  ].alt
                }
              </p>

            </div>


            {/* =====================================
                THUMBNAILS
            ===================================== */}

            <div className="soul-gallery-modal__thumbnails">

              {gallery.images.map(
                (image, index) => (
                  <button
                    type="button"
                    key={image.src}
                    className={`soul-gallery-modal__thumbnail ${
                      activeIndex === index
                        ? "is-active"
                        : ""
                    }`}
                    onClick={() =>
                      setActiveIndex(index)
                    }
                    aria-label={`View image ${
                      index + 1
                    }`}
                  >

                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="100px"
                    />

                    <span>
                      {String(
                        index + 1
                      ).padStart(2, "0")}
                    </span>

                  </button>
                )
              )}

            </div>

          </div>

        </div>
      )}
    </>
  );
}