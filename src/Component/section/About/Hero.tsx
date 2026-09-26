import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { aboutPageData } from "../../../data/AboutPage";
import "../../css/About/AboutHero.css";
import Link from "next/link";

export default function AboutHero() {
  const { hero } = aboutPageData;

  return (
    <section className="about-hero">
      <div className="about-hero__background">
        <Image
          src={hero.image}
          alt="Luxury farmhouse surrounded by nature"
          fill
          priority
          sizes="100vw"
          className="about-hero__image"
        />
      </div>

      <div className="about-hero__overlay" />

      <div className="about-hero__container container">
        <div className="about-hero__content">
          <span className="about-hero__label">
            {hero.eyebrow}
          </span>

          <h1 className="about-hero__title">
            Turning Dreams
            <br />
            into Address
          </h1>

          <p className="about-hero__description">
            {hero.description}
          </p>

          <div className="about-hero__actions">
            <a
              href={hero.primaryButton.href}
              className="button button-primary about-hero__button"
            >
              {hero.primaryButton.label}
              <ArrowRight size={15} strokeWidth={1.8} />
            </a>

            <Link
            
             href={hero.secondaryButton.href}
              className="button button-outline about-hero__button"
            >
             
              {hero.secondaryButton.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}