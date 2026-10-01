"use client";

import { useEffect, useState } from "react";
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react";

import type { ProjectPageProject } from "../../../data/ProjectPageProject";

import "../../css/ProjectPageProjects/Videos.css";

type VideosProps = {
  project: ProjectPageProject;
};

export default function Videos({ project }: VideosProps) {
  const { videos } = project;

  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const openVideo = (index: number) => {
    setActiveVideo(index);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  const showPrevious = () => {
    if (activeVideo === null || videos.length === 0) return;

    setActiveVideo(
      activeVideo === 0
        ? videos.length - 1
        : activeVideo - 1
    );
  };

  const showNext = () => {
    if (activeVideo === null || videos.length === 0) return;

    setActiveVideo(
      activeVideo === videos.length - 1
        ? 0
        : activeVideo + 1
    );
  };

  /*
   * Disable page scrolling while video modal is open
   */
  useEffect(() => {
    if (activeVideo === null) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeVideo();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeVideo]);

  return (
    <>
      <section className="soul-videos">
        <div className="soul-videos__container">

          {/* HEADER */}
          <div className="soul-videos__header">

            <div className="soul-videos__eyebrow">
              <span className="soul-videos__eyebrow-line" />
              PROJECT VIDEOS
            </div>

            <h2 className="soul-videos__title">
              Experience Soul Prakriti
            </h2>

            <p className="soul-videos__description">
              Take a closer look at the spaces, surroundings and
              lifestyle that make the project special.
            </p>

          </div>

          {/* VIDEO GRID */}
          <div className="soul-videos__grid">

            {videos.map((video, index) => (
              <button
                key={video.id}
                type="button"
                className="soul-videos__card"
                onClick={() => openVideo(index)}
              >

                <div className="soul-videos__preview">

                  <video
                    src={video.src}
                    poster={video.poster}
                    muted
                    playsInline
                    preload="metadata"
                    className="soul-videos__video"
                  />

                  <div className="soul-videos__overlay" />

                  <div className="soul-videos__play">
                    <Play
                      size={24}
                      strokeWidth={1.5}
                      fill="currentColor"
                    />
                  </div>

                  <div className="soul-videos__card-content">
                    <span className="soul-videos__card-number">
                      0{index + 1}
                    </span>

                    <div>
                      <h3>{video.title}</h3>
                      <p>{video.description}</p>
                    </div>
                  </div>

                </div>

              </button>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          VIDEO MODAL
      ===================================================== */}

      {activeVideo !== null && videos[activeVideo] && (
        <div
          className="soul-videos__modal"
          onClick={closeVideo}
        >

          {/* CLOSE */}
          <button
            type="button"
            className="soul-videos__modal-close"
            onClick={closeVideo}
            aria-label="Close video"
          >
            <X size={26} strokeWidth={1.5} />
          </button>

          {/* PREVIOUS */}
          {videos.length > 1 && (
            <button
              type="button"
              className="soul-videos__modal-prev"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous video"
            >
              <ChevronLeft size={34} strokeWidth={1.4} />
            </button>
          )}

          {/* VIDEO */}
          <div
            className="soul-videos__modal-content"
            onClick={(event) => event.stopPropagation()}
          >

            <video
              key={videos[activeVideo].src}
              src={videos[activeVideo].src}
              poster={videos[activeVideo].poster}
              controls
              autoPlay
              playsInline
              className="soul-videos__modal-video"
            />

            <div className="soul-videos__modal-info">

              <div>
                <span>
                  0{activeVideo + 1}
                </span>

                <h3>
                  {videos[activeVideo].title}
                </h3>
              </div>

              <p>
                {videos[activeVideo].description}
              </p>

            </div>

          </div>

          {/* NEXT */}
          {videos.length > 1 && (
            <button
              type="button"
              className="soul-videos__modal-next"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next video"
            >
              <ChevronRight size={34} strokeWidth={1.4} />
            </button>
          )}

        </div>
      )}
    </>
  );
}