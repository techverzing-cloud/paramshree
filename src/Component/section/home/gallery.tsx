"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { galleryImages } from "../../../data/gallery";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0
        ? galleryImages.length - 1
        : selectedIndex - 1
    );
  };

  const showNext = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === galleryImages.length - 1
        ? 0
        : selectedIndex + 1
    );
  };

  /*
   * Prevent background scrolling while the lightbox is open.
   */
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  /*
   * Keyboard navigation for the lightbox.
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <>
      <section className="gallery-section">
        <div className="gallery-container">

          {/* Section heading */}
          <div className="gallery-heading">
            <span className="gallery-eyebrow">
              GALLERY
            </span>

            <h2>Moments Worth Coming Home To</h2>

            <p className='text-nowrap'>
              Take a closer look at the spaces and surroundings
              represented through our projects.
            </p>
          </div>

          {/* Gallery */}
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                type="button"
                className={`gallery-item gallery-item-${index + 1}`}
                onClick={() => setSelectedIndex(index)}
                aria-label={`View ${image.title}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="
                    (max-width: 600px) 100vw,
                    (max-width: 900px) 50vw,
                    33vw
                  "
                  className="gallery-image"
                />

                <div className="gallery-overlay">
                  <span>{image.title}</span>
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="gallery-lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="gallery-lightbox-close"
            onClick={closeLightbox}
            aria-label="Close gallery"
          >
            <X size={24} />
          </button>

          <button
            type="button"
            className="gallery-lightbox-arrow gallery-lightbox-prev"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous image"
          >
            <ArrowLeft size={24} />
          </button>

          <div
            className="gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedIndex].src}
              alt={galleryImages[selectedIndex].alt}
              fill
              sizes="90vw"
              className="gallery-lightbox-image"
              priority
            />

            <div className="gallery-lightbox-caption">
              {galleryImages[selectedIndex].title}
            </div>
          </div>

          <button
            type="button"
            className="gallery-lightbox-arrow gallery-lightbox-next"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      )}
    </>
  );
}