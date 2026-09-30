"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { soulAgroFarmsData } from "../../../data/soulagrofarms";

import "../../css/Soul Agro Farms Pvt ltd/Projects.css";

export default function Projects() {
  const { projects } = soulAgroFarmsData;

  return (
    <section className="soul-projects" id="projects">
      <div className="soul-projects__decor" />

      <div className="container soul-projects__container">

        {/* HEADER */}

        <div className="soul-projects__header">

          <div>
            <div className="soul-projects__eyebrow">
              <span className="soul-projects__eyebrow-line" />
              <span>{projects.eyebrow}</span>
            </div>

            <h2 className="soul-projects__title">
              {projects.title.split("\n").map((line, index) => (
                <span key={index}>{line}</span>
              ))}
            </h2>
          </div>

          <div className="soul-projects__intro">
            <p>{projects.description}</p>
          </div>

        </div>

        {/* PROJECTS */}

        <div className="soul-projects__list">

          {projects.items.map((project) => (
            <article
              className="soul-project-card"
              key={project.number}
            >

              <Link
                href={project.href}
                className="soul-project-card__image"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="soul-project-card__overlay" />

                <span className="soul-project-card__number">
                  {project.number}
                </span>

                <span className="soul-project-card__view">
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.4}
                  />
                </span>
              </Link>

              <div className="soul-project-card__content">

                <div className="soul-project-card__meta">
                  <span>{project.type}</span>
                  <span>{project.location}</span>
                </div>

                <h3>{project.name}</h3>

                <p>{project.description}</p>

                <Link
                  href={project.href}
                  className="soul-project-card__link"
                >
                  <span>Explore Project</span>

                  <ArrowRight
                    size={14}
                    strokeWidth={1.5}
                  />
                </Link>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}