"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  ClipboardCheck,
  FileText,
  Home,
  MessageCircle,
  Search,
} from "lucide-react";

import { servicesPageData } from "../../../data/services";

import "../../css/Services/ServicesProcess.css";

const icons = {
  consultation: MessageCircle,
  shortlist: Search,
  visit: Building2,
  documentation: FileText,
  possession: Home,
};

export default function ServicesProcess() {
  const { process } = servicesPageData;

  return (
    <section className="services-process">
      <div className="container services-process__container">
        {/* Left Content */}
        <div className="services-process__intro">
          <div className="services-process__eyebrow">
            <span>{process.eyebrow}</span>
            <span className="services-process__eyebrow-line" />
          </div>

          <h2 className="services-process__title">
            {process.title}
          </h2>

          <p className="services-process__description">
            {process.description}
          </p>

          <Link
            href={process.button.href}
            className="button button-outline services-process__button"
          >
            <span>{process.button.label}</span>

            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
            />
          </Link>
        </div>

        {/* Process Steps */}
        <div className="services-process__steps">
          {process.steps.map((step, index) => {
            const Icon =
              icons[step.icon as keyof typeof icons];

            const isLast =
              index === process.steps.length - 1;

            return (
              <div
                key={step.id}
                className="services-process__step-wrapper"
                style={{
                  animationDelay: `${index * 130}ms`,
                }}
              >
                <article className="services-process__step">
                  <div className="services-process__circle">
                    <Icon
                      size={22}
                      strokeWidth={1.35}
                    />

                    <span className="services-process__number">
                      {String(step.id).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="services-process__step-title">
                    {step.title}
                  </h3>

                  <p className="services-process__step-description">
                    {step.description}
                  </p>
                </article>

                {!isLast && (
                  <div
                    className="services-process__connector"
                    aria-hidden="true"
                  >
                    <ArrowRight
                      size={17}
                      strokeWidth={1.2}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}