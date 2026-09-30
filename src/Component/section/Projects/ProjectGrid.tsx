

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  MapPin,
  Mountain,
  Ruler,
} from "lucide-react";

import { projectsPageData } from "../../../data/projects";
import "../../css/Projects/ProjectGrid.css";

type ProjectListing =
  (typeof projectsPageData.listings)[number];

type ProjectGridProps = {
  listings: ProjectListing[];
};

export default function ProjectGrid({
  listings,
}: ProjectGridProps) {
  return (
    <section className="project-grid">
      <div className="project-grid__container">
        {listings.length > 0 ? (
          <div className="project-grid__list">
            {listings.map((project, index) => (
              <article
                className="project-card"
                key={project.id}
                style={
                  {
                    "--project-delay": `${index * 80}ms`,
                  } as React.CSSProperties
                }
              >
                {/* Project Image */}
                <div className="project-card__image-wrapper">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="
                      (max-width: 640px) 100vw,
                      (max-width: 1024px) 50vw,
                      33vw
                    "
                    className="project-card__image"
                  />

                  <div className="project-card__image-overlay" />

                  <div className="project-card__badge">
                    {project.badge}
                  </div>

                  <Link
                    href={project.href}
                    className="project-card__image-action"
                    aria-label={`View ${project.name}`}
                  >
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.5}
                    />
                  </Link>
                </div>

                {/* Project Content */}
                <div className="project-card__content">
                  <h3 className="project-card__title">
                    {project.name}
                  </h3>

                  {/* Location */}
                  <div className="project-card__location">
                    <MapPin
                      size={13}
                      strokeWidth={1.6}
                    />
                    <span>{project.location}</span>
                  </div>

                  {/* Property Details */}
                  <div className="project-card__details">
                    <div className="project-card__detail">
                      <Ruler
                        size={14}
                        strokeWidth={1.5}
                      />
                      <span>{project.area}</span>
                    </div>

                    <div className="project-card__divider" />

                    <div className="project-card__detail">
                      <Building2
                        size={14}
                        strokeWidth={1.5}
                      />
                      <span>{project.category}</span>
                    </div>

                    <div className="project-card__divider" />

                    <div className="project-card__detail">
                      <Mountain
                        size={14}
                        strokeWidth={1.5}
                      />
                      <span>{project.view}</span>
                    </div>
                  </div>

                  {/* Price and Details Link */}
                  <div className="project-card__footer">
                    {project.price ? (
                      <div className="project-card__price">
                        <strong>{project.price}</strong>
                        <span>{project.priceSuffix}</span>
                      </div>
                    ) : (
                      <div className="project-card__price">
                        <span className="project-card__price-placeholder">
                          Pricing on request
                        </span>
                      </div>
                    )}

                    <Link
                      href={project.href}
                      className="project-card__details-link"
                    >
                      <span>View Details</span>
                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.7}
                      />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="project-grid__empty">
            <h3>No projects found</h3>
            <p>
              We couldn&apos;t find any projects matching
              your selected filters. Try changing your
              preferences or clearing all filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}