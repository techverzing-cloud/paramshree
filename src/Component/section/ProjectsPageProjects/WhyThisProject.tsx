"use client";

import {
  Home,
  Leaf,
  Heart,
  Activity,
} from "lucide-react";

import type { ProjectPageProject } from "../../../data/ProjectPageProject";

import "../../css/ProjectPageProjects/WhyThisProject.css";

type WhyThisProjectProps = {
  project: ProjectPageProject;
};

const featureIconMap = {
  leaf: Leaf,
  home : Home,
  heart: Heart,
  activity: Activity,
};

export default function WhyThisProject({
  project,
}: WhyThisProjectProps) {
  const { WhyThisProject } = project;

  return (
    <section className="soul-why">
      <div className="soul-why__container">

        {/* Content */}
        <div className="soul-why__content">

          <div className="soul-why__eyebrow">
            <span>
              {WhyThisProject.eyebrow}
            </span>

            <span className="soul-why__eyebrow-line" />
          </div>

          <h2 className="soul-why__title">
            {WhyThisProject.title}
          </h2>

          <p className="soul-why__description">
            {WhyThisProject.description}
          </p>

          {/* <button
            type="button"
            className="soul-why__button"
          >
            {WhyThisProject.buttonText}
          </button> */}
        </div>

        {/* Features */}
        <div className="soul-why__features">
          {WhyThisProject.features.map(
            (feature, index) => {
              const Icon =
                featureIconMap[
                  feature.icon as keyof typeof featureIconMap
                ];

              return (
                <div
                  className="soul-why__feature"
                  key={feature.title}
                >
                  <span className="soul-why__feature-number">
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <div className="soul-why__feature-icon">
                    <Icon
                      size={23}
                      strokeWidth={1.3}
                    />
                  </div>

                  <div className="soul-why__feature-content">
                    <h3>
                      {feature.title}
                    </h3>

                    <p>
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}