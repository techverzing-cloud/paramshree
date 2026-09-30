

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Download,
  FileText,
} from "lucide-react";

import type { ProjectPageProject } from "../../../data/ProjectPageProject";
import InquiryModal from "../Contact/InquiryModal";

import "../../css/ProjectPageProjects/FloorPlans.css";

type FloorPlansProps = {
  project: ProjectPageProject;
};

export default function FloorPlans({ project }: FloorPlansProps) {
  const { floorPlans } = project;

  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <>
      <section className="soul-floorplans">
        <div className="soul-floorplans__container">

          {/* HEADER */}
          <div className="soul-floorplans__header">
            <div className="soul-floorplans__eyebrow">
              <span className="soul-floorplans__eyebrow-line" />
              {floorPlans.eyebrow}
            </div>

            <h2 className="soul-floorplans__title">
              {floorPlans.title}
            </h2>

            <p className="soul-floorplans__description">
              {floorPlans.description}
            </p>
          </div>

          {/* FLOOR PLANS */}
          <div className="soul-floorplans__plans">
            {floorPlans.plans.map((plan) => (
              <article
                key={plan.id}
                className="soul-floorplans__plan"
              >
                {/* IMAGE */}
                <div className="soul-floorplans__image-wrapper">
                  <Image
                    src={plan.image}
                    alt={plan.name}
                    fill
                    className="soul-floorplans__image"
                  />
                </div>

                {/* CONTENT */}
                <div className="soul-floorplans__plan-content">

                  <div className="soul-floorplans__plan-header">
                    <div>
                      <span className="soul-floorplans__plan-type">
                        {plan.type}
                      </span>

                      <h3>{plan.name}</h3>
                    </div>

                    <span className="soul-floorplans__plan-price">
                      {plan.price}
                    </span>
                  </div>

                  <div className="soul-floorplans__plan-info">
                    <div className="soul-floorplans__info-item">
                      <span>Area</span>
                      <strong>{plan.area}</strong>
                    </div>

                    <div className="soul-floorplans__info-item">
                      <span>Configuration</span>
                      <strong>{plan.configuration}</strong>
                    </div>
                  </div>

                </div>
              </article>
            ))}
          </div>

          {/* STARTING FROM */}
          {/* <div className="soul-floorplans__starting">
            <span className="soul-floorplans__starting-label">
              {floorPlans.startingFrom.label}
            </span>

            <strong>
              {floorPlans.startingFrom.value}
            </strong>

            <p>
              {floorPlans.startingFrom.description}
            </p>
          </div> */}

          {/* DOCUMENTS */}
          <div className="soul-floorplans__documents">

            <div className="soul-floorplans__documents-header">
              <div>
                <div className="soul-floorplans__eyebrow">
                  <span className="soul-floorplans__eyebrow-line" />
                  {floorPlans.documents.eyebrow}
                </div>

                <h3>
                  {floorPlans.documents.title}
                </h3>
              </div>

              <FileText
                size={24}
                strokeWidth={1.4}
              />
            </div>

            <div className="soul-floorplans__documents-list">
              {floorPlans.documents.items.map((document) => (
                <a
                  key={document.name}
                  href={document.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="soul-floorplans__document"
                >
                  <span className="soul-floorplans__document-icon">
                    <FileText
                      size={18}
                      strokeWidth={1.4}
                    />
                  </span>

                  <span className="soul-floorplans__document-content">
                    <strong>{document.name}</strong>
                    <small>{document.type}</small>
                  </span>

                  <Download
                    size={17}
                    strokeWidth={1.5}
                  />
                </a>
              ))}
            </div>

          </div>

          {/* ACTIONS */}
          <div className="soul-floorplans__actions">

            {/* SCHEDULE A VISIT → INQUIRY MODAL */}
            <button
              type="button"
              className="soul-floorplans__button soul-floorplans__button--primary"
              onClick={() => setIsInquiryOpen(true)}
            >
              <span>
                {floorPlans.actions.primary}
              </span>

              <ArrowUpRight
                size={18}
                strokeWidth={1.5}
              />
            </button>

            {/* ENQUIRE NOW → /contact */}
            <Link
              href="/contact"
              className="soul-floorplans__button soul-floorplans__button--secondary"
            >
              <span>
                {floorPlans.actions.secondary}
              </span>

              <ArrowUpRight
                size={18}
                strokeWidth={1.5}
              />
            </Link>

          </div>

        </div>
      </section>

      {/* REUSABLE INQUIRY MODAL */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        source={`${project.name} - Schedule a Visit`}
      />
    </>
  );
}