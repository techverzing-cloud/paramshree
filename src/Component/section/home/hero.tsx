
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MoveRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">

        {/* LEFT: Editorial Content */}
        <div className="hero-content">

          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            <span>PREMIUM FARMHOUSE LIVING</span>
          </div>

          <h1 className="hero-title">
            A Life Closer
            <br />
            <span>to Nature.</span>
          </h1>

          <p className="hero-description">
            Discover a more peaceful way of living
            with thoughtfully developed farmhouse
            communities by Soul Agro Farms Pvt. Ltd.
          </p>

          <p className="hero-partner-note">
            A Channel Partner of Soul Agro Farms Pvt. Ltd.
            <span> · </span>
            Powered by ETH Infra Pvt. Ltd.
          </p>

          <div className="hero-actions">
            <Link
              href="/projects"
              className="button button-primary hero-primary-button"
            >
              Explore Projects
              <ArrowUpRight size={17} />
            </Link>

            <Link
              href="#about"
              className="hero-text-link"
            >
              Discover ParamShree
              <MoveRight size={17} />
            </Link>
          </div>

          {/* Scroll indicator */}
          <a
            href="#about"
            className="hero-scroll-indicator"
            aria-label="Scroll to discover more"
          >
            <span className="hero-scroll-icon">
              <ArrowDown size={15} />
            </span>
            <span>SCROLL TO DISCOVER</span>
          </a>
        </div>

        {/* RIGHT: Image Composition */}
        <div className="hero-visual">

          {/* Main Image */}
          <div className="hero-main-image">
            <Image
              src="/images/home/homehero/hero1.jpg"
              alt="Farmhouse architecture surrounded by greenery"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 58vw"
              className="hero-image"
            />

            <div className="hero-image-overlay" />

            <div className="hero-image-caption">
              <span className="hero-caption-label">
                A CLOSER CONNECTION
              </span>
              <span className="hero-caption-title">
                Nature. Space. Living.
              </span>
            </div>
          </div>

          {/* Floating Detail Image */}
          <div className="hero-floating-image">
            <Image
              src="/images/home/homehero/hero-detail.jpg"
              alt="Outdoor living space at a farmhouse"
              fill
              sizes="(max-width: 760px) 45vw, 220px"
              className="hero-image"
            />
          </div>

          {/* Decorative Index */}
          <div className="hero-image-index">
            <span>01</span>
            <span className="hero-index-line" />
            <span>03</span>
          </div>

          {/* Image-side label */}
          <div className="hero-side-label">
            <span>PARAMSHREE</span>
            <span>REAL ESTATE · CHANNEL PARTNER</span>
          </div>
        </div>

      </div>

      {/* Bottom visual transition */}
      <div className="hero-bottom-line">
        <span />
        <span>DESIGNED AROUND A MORE NATURAL WAY OF LIFE</span>
        <span />
      </div>
    </section>
  );
}