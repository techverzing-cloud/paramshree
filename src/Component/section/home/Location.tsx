
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Compass,
  Leaf,
} from "lucide-react";

export default function Location() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="location"
      ref={sectionRef}
      className={`location-section ${
        isVisible ? "location-visible" : ""
      }`}
    >
      <div className="container">

        <div className="location-grid">

          {/* LEFT: Content */}
          <div className="location-content">

            <span className="section-label location-reveal">
              THE LOCATION
            </span>

            <h2 className="section-title location-title location-reveal">
              Find Your Place
              <br />
              <span>Closer to Nature.</span>
            </h2>

            <p className="location-description location-reveal">
              Discover the setting of Soul Agro Farms'
              farmhouse developments and explore the
              possibilities of a more nature-connected
              lifestyle.
            </p>

            <p className="location-description-secondary location-reveal">
              Connect with ParamShree for project
              location details, directions, and
              information about available properties.
            </p>

            {/* Location information */}
            <div className="location-info location-reveal">

              <div className="location-info-icon">
                <MapPin size={22} strokeWidth={1.4} />
              </div>

              <div>
                <span className="location-info-label">
                  PROJECT LOCATION
                </span>

                <h3>Discover the Project Address</h3>

                <p>
                  Contact our team for the exact
                  project location and directions.
                </p>
              </div>

            </div>

            {/* CTA */}
            <div className="location-actions location-reveal">

              <Link
                href="/contact"
                className="button button-primary location-button"
              >
                Enquire About Location
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/projects"
                className="location-secondary-link"
              >
                Explore Projects
                <ArrowUpRight size={16} />
              </Link>

            </div>

          </div>

          {/* RIGHT: Image composition */}
          <div className="location-visual location-reveal">

            <div className="location-image-main">

              <Image
                src="/homehero/hero-landscape.jpg"
                alt="Scenic landscape surrounding farmhouse developments"
                fill
                sizes="(max-width: 760px) 100vw, 55vw"
                className="location-image"
              />

              <div className="location-image-overlay" />

              <div className="location-image-caption">
                <span>DISCOVER THE SETTING</span>
                <h3>A Different Pace of Life</h3>
              </div>

            </div>

            {/* Floating detail card */}
            <div className="location-floating-card">

              <div className="location-floating-icon">
                <Compass size={23} strokeWidth={1.4} />
              </div>

              <div>
                <span>YOUR NEXT DISCOVERY</span>
                <p>Explore the project with ParamShree.</p>
              </div>

            </div>

            {/* Decorative vertical label */}
            <div className="location-side-label">
              PARAMSHREE · LOCATION
            </div>

          </div>

        </div>

        {/* Bottom strip */}
        <div className="location-bottom-strip location-reveal">

          <div className="location-bottom-icon">
            <Leaf size={20} strokeWidth={1.4} />
          </div>

          <p>
            Every journey begins with discovering
            the right place.
          </p>

          <Link href="#contact" aria-label="Contact ParamShree">
            <ArrowUpRight size={19} />
          </Link>

        </div>

      </div>
    </section>
  );
}