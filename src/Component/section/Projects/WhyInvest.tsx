import {
  Handshake,
  Leaf,
  ShieldCheck,
  Users,
} from "lucide-react";

import { projectsPageData } from "../../../data/projects";

import "../../css/Projects/WhyInvest.css";

const icons = {
  shield: ShieldCheck,
  users: Users,
  leaf: Leaf,
  handshake: Handshake,
};

export default function WhyInvest() {
  const { whyInvest } = projectsPageData;

  return (
    <section className="why-invest">
      <div className="why-invest__container">

        {/* Left Content */}
        <div className="why-invest__intro">

          <span className="why-invest__eyebrow">
            {whyInvest.eyebrow}
          </span>

          <h2 className="why-invest__title">
            {whyInvest.title}
          </h2>

          <p className="why-invest__description">
            {whyInvest.description}
          </p>

        </div>

        {/* Benefits */}
        <div className="why-invest__benefits">
          {whyInvest.benefits.map((benefit, index) => {
            const Icon =
              icons[
                benefit.icon as keyof typeof icons
              ];

            return (
              <div
                className="why-invest__benefit"
                key={benefit.id}
                style={
                  {
                    "--benefit-delay": `${index * 120}ms`,
                  } as React.CSSProperties
                }
              >
                {/* Icon */}
                <div className="why-invest__icon">
                  <Icon
                    size={25}
                    strokeWidth={1.4}
                  />
                </div>

                {/* Text */}
                <div className="why-invest__content">
                  <h3>{benefit.title}</h3>

                  <p>{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}