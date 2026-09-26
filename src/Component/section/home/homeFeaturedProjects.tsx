
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "../../../data/featuredProjects";

export default function FeaturedProjects() {
  return (
    <section className="featured-projects">
      <div className="featured-projects__container">
        <div className="featured-projects__heading">
          <span className="featured-projects__eyebrow">
            OUR PROJECTS
          </span>

          <h2>Explore Our Featured Projects</h2>

          <p>
            Discover projects represented by ParamShree.
          </p>
        </div>

        <div className="featured-projects__grid">
          {featuredProjects.map((project) => (
            <article
              className="featured-project-card"
              key={project.id}
            >
              <div className="featured-project-card__image">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1100px) 50vw,
                         33vw"
                  className="featured-project-card__photo"
                />
              </div>

              <div className="featured-project-card__content">
                <span className="featured-project-card__category">
                  {project.category}
                </span>

                <h3>{project.name}</h3>

                <p>{project.description}</p>

                <Link
                  href={project.href}
                  className="featured-project-card__link"
                  rel="noopener noreferrer"
                >
                  Explore Project
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}