
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Trees,
  Waves,
  ShieldCheck,
  Flower2,
  Users,
  Mountain,
  Dumbbell,
  Bike,
  CircleDot,
  Sprout,
  CarFront,
  HeartPulse,
  Footprints,
} from "lucide-react";

const amenities = [
  {
    title: "Clubhouse",
    description: "A dedicated community space.",
    icon: Users,
  },
  {
    title: "Mini Golf Course",
    description: "A designated mini golf area.",
    icon: CircleDot,
  },
  {
    title: "Orchid Garden",
    description: "A garden dedicated to orchids.",
    icon: Flower2,
  },
  {
    title: "Restaurant Area",
    description: "A designated restaurant area.",
    icon: Waves,
  },
  {
    title: "Horse Riding Trail & Arena",
    description: "A designated riding trail and arena.",
    icon: Footprints,
  },
  {
    title: "Open Gym",
    description: "An outdoor gym area.",
    icon: Dumbbell,
  },
  {
    title: "Badminton Court",
    description: "A designated badminton court.",
    icon: Bike,
  },
  {
    title: "Pickleball Court",
    description: "A designated pickleball court.",
    icon: CircleDot,
  },
  {
    title: "Box Cricket",
    description: "A designated box cricket area.",
    icon: CircleDot,
  },
  {
    title: "Wellness Center",
    description: "A designated wellness center.",
    icon: HeartPulse,
  },
  {
    title: "EV Charging",
    description: "An electric vehicle charging area.",
    icon: CarFront,
  },
  {
    title: "Orchid Garden & Green Spaces",
    description: "Landscaped garden areas shown in the site plan.",
    icon: Sprout,
  },
];

export default function Amenities() {
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
      { threshold: 0.12 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="amenities"
      ref={sectionRef}
      className={`amenities-section ${
        isVisible ? "amenities-visible" : ""
      }`}
    >
      <div className="container">

        {/* Section Heading */}
        <div className="amenities-heading amenities-reveal">
          <div>
            <span className="section-label">
              LUXURY MEETS NATURE
            </span>

            <h2 className="section-title amenities-title">
              Thoughtfully Planned
              <br />
              <span>Spaces to Explore</span>
            </h2>
          </div>

          <p className="section-description amenities-intro">
            Discover the recreational, community, and
            wellness spaces shown in the Soul Prakriti
            site plan.
          </p>
        </div>

        {/* Featured Image */}
        <div className="amenities-feature amenities-reveal">

          <div className="amenities-feature-image">
            <Image
              src="/images/home/homehero/hero-landsca.jpg"
              alt="Landscaped farmhouse surroundings"
              fill
              sizes="(max-width: 760px) 100vw, 60vw"
              className="amenities-image"
            />
          </div>

          <div className="amenities-feature-content">
            <span className="amenities-feature-number">
              01 / THE EXPERIENCE
            </span>

            <h3>
              Room to
              <br />
              <em>Reconnect.</em>
            </h3>

            <p>
              Explore the planned outdoor, recreational,
              and community spaces of Soul Prakriti.
            </p>

            <Link
              href="/projects"
              className="amenities-feature-link"
            >
              Explore Projects
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        {/* Amenities Grid */}
        <div className="amenities-grid">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;

            return (
              <article
                key={amenity.title}
                className="amenity-card amenities-reveal"
                style={
                  {
                    "--amenity-index": index,
                  } as React.CSSProperties
                }
              >
                <div className="amenity-card-top">
                  <span className="amenity-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="amenity-icon">
                    <Icon size={23} strokeWidth={1.4} />
                  </span>
                </div>

                <h3>{amenity.title}</h3>

                <p>{amenity.description}</p>

                <div className="amenity-card-line" />
              </article>
            );
          })}
        </div>

        {/* Small note */}
        <p className="amenities-note">
          Amenities listed are based on the provided
          Soul Prakriti site plan. Availability,
          specifications, and development status should
          be confirmed with the developer.
        </p>

      </div>
    </section>
  );
}