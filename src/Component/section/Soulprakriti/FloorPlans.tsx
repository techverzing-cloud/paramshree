// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import {
//   ArrowDownToLine,
//   ArrowRight,
//   CalendarDays,
//   FileText,
//   Map,
//   Send,
// } from "lucide-react";

// import { soulPrakritiData } from "../../../data/soulprakrtit";
// import "../../css/Soul Prakriti/FloorPlans.css";

// export default function FloorPlans() {
//   const { floorPlans } = soulPrakritiData;

//   const plan = floorPlans.plans[0];

//   return (
//     <section className="soul-floor-plans" id="floor-plans">
//       <div className="soul-floor-plans__container">

//         {/* Section Header */}
//         <div className="soul-floor-plans__header">
//           <div>
//             <div className="soul-floor-plans__eyebrow">
//               <span>{floorPlans.eyebrow}</span>
//               <span className="soul-floor-plans__eyebrow-line" />
//             </div>

//             <h2 className="soul-floor-plans__title">
//               {floorPlans.title}
//             </h2>
//           </div>

//           <p className="soul-floor-plans__description">
//             {floorPlans.description}
//           </p>
//         </div>

//         {/* Main Content */}
//         <div className="soul-floor-plans__layout">

//           {/* LEFT — FLOOR PLAN */}
//           <div className="soul-floor-plans__visual">

//             <div className="soul-floor-plan-card">

//               <div className="soul-floor-plan-card__image-wrap">
//                 <Image
//                   src={plan.image}
//                   alt={`${plan.name} floor plan`}
//                   fill
//                   className="soul-floor-plan-card__image"
//                 />

//                 <div className="soul-floor-plan-card__image-label">
//                   <span>FLOOR PLAN</span>
//                 </div>
//               </div>

//               <div className="soul-floor-plan-card__content">

//                 <div className="soul-floor-plan-card__heading">
//                   <div>
//                     <span className="soul-floor-plan-card__type">
//                       {plan.type}
//                     </span>

//                     <h3>{plan.name}</h3>
//                   </div>

//                   <div className="soul-floor-plan-card__price">
//                     <span>PRICE</span>
//                     <strong>{plan.price}</strong>
//                   </div>
//                 </div>

//                 <div className="soul-floor-plan-card__details">
//                   <div>
//                     <span>AREA</span>
//                     <strong>{plan.area}</strong>
//                   </div>

//                   <div>
//                     <span>CONFIGURATION</span>
//                     <strong>{plan.configuration}</strong>
//                   </div>
//                 </div>

//               </div>
//             </div>

//           </div>

//           {/* RIGHT — INFORMATION */}
//           <aside className="soul-floor-plans__sidebar">

//             {/* Starting From */}
//             <div className="soul-starting-card">

//               <div className="soul-starting-card__top">
//                 <span>{floorPlans.startingFrom.label}</span>

//                 <div className="soul-starting-card__icon">
//                   <ArrowRight size={18} strokeWidth={1.5} />
//                 </div>
//               </div>

//               <div className="soul-starting-card__price">
//                 {floorPlans.startingFrom.value}
//               </div>

//               <p>
//                 {floorPlans.startingFrom.description}
//               </p>

//               <div className="soul-starting-card__actions">

//                 <Link
//                   href="/contact"
//                   className="button button-primary"
//                 >
//                   <CalendarDays size={17} />
//                   {floorPlans.actions.primary}
//                 </Link>

//                 <Link
//                   href="/contact"
//                   className="button button-outline"
//                 >
//                   <Send size={16} />
//                   {floorPlans.actions.secondary}
//                 </Link>

//               </div>

//             </div>

//             {/* Documents */}
//             <div className="soul-documents">

//               <div className="soul-documents__heading">
//                 <div>
//                   <span className="soul-documents__eyebrow">
//                     {floorPlans.documents.eyebrow}
//                   </span>

//                   <h3>
//                     {floorPlans.documents.title}
//                   </h3>
//                 </div>

//                 <ArrowDownToLine
//                   size={21}
//                   strokeWidth={1.4}
//                 />
//               </div>

//               <div className="soul-documents__list">

//                 {floorPlans.documents.items.map((document) => (
//                   <a
//                     href={document.href}
//                     download
//                     className="soul-document"
//                     key={document.name}
//                   >
//                     <div className="soul-document__icon">
//                       <FileText
//                         size={18}
//                         strokeWidth={1.4}
//                       />
//                     </div>

//                     <div className="soul-document__content">
//                       <strong>{document.name}</strong>
//                       <span>{document.type}</span>
//                     </div>

//                     <ArrowDownToLine
//                       className="soul-document__download"
//                       size={17}
//                       strokeWidth={1.4}
//                     />
//                   </a>
//                 ))}

//               </div>

//             </div>

//             {/* Small reassurance */}
//             <div className="soul-floor-plans__note">
//               <Map size={17} strokeWidth={1.4} />

//               <span>
//                 Need help choosing the right space?
//                 <strong> Our team can guide you.</strong>
//               </span>
//             </div>

//           </aside>

//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";

import {
  ArrowDownToLine,
  ArrowRight,
  CalendarDays,
  FileText,
  Map,
  Send,
} from "lucide-react";

import { soulPrakritiData } from "../../../data/soulprakrtit";
import InquiryModal from "../Contact/InquiryModal";

import "../../css/Soul Prakriti/FloorPlans.css";

export default function FloorPlans() {
  const { floorPlans } = soulPrakritiData;

  const plan = floorPlans.plans[0];

  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <>
      <section className="soul-floor-plans" id="floor-plans">
        <div className="soul-floor-plans__container">

          {/* Section Header */}
          <div className="soul-floor-plans__header">
            <div>
              <div className="soul-floor-plans__eyebrow">
                <span>{floorPlans.eyebrow}</span>

                <span className="soul-floor-plans__eyebrow-line" />
              </div>

              <h2 className="soul-floor-plans__title">
                {floorPlans.title}
              </h2>
            </div>

            <p className="soul-floor-plans__description">
              {floorPlans.description}
            </p>
          </div>

          {/* Main Content */}
          <div className="soul-floor-plans__layout">

            {/* LEFT — FLOOR PLAN */}
            <div className="soul-floor-plans__visual">

              <div className="soul-floor-plan-card">

                <div className="soul-floor-plan-card__image-wrap">
                  <Image
                    src={plan.image}
                    alt={`${plan.name} floor plan`}
                    fill
                    className="soul-floor-plan-card__image"
                  />

                  <div className="soul-floor-plan-card__image-label">
                    <span>FLOOR PLAN</span>
                  </div>
                </div>

                <div className="soul-floor-plan-card__content">

                  <div className="soul-floor-plan-card__heading">

                    <div>
                      <span className="soul-floor-plan-card__type">
                        {plan.type}
                      </span>

                      <h3>{plan.name}</h3>
                    </div>

                    <div className="soul-floor-plan-card__price">
                      <span>PRICE</span>

                      <strong>{plan.price}</strong>
                    </div>

                  </div>

                  <div className="soul-floor-plan-card__details">

                    <div>
                      <span>AREA</span>
                      <strong>{plan.area}</strong>
                    </div>

                    <div>
                      <span>CONFIGURATION</span>
                      <strong>{plan.configuration}</strong>
                    </div>

                  </div>

                  {/* Schedule / Enquire Buttons */}
                  <div className="soul-floor-plan-card__actions">

                    <button
                      type="button"
                      className="button button-primary"
                      onClick={() => setIsInquiryOpen(true)}
                    >
                      <CalendarDays size={17} />

                      <span>Schedule a Visit</span>
                    </button>


                  </div>

                </div>
              </div>

            </div>

            {/* RIGHT — INFORMATION */}
            <aside className="soul-floor-plans__sidebar">

              {/* Starting From */}
              <div className="soul-starting-card">

                <div className="soul-starting-card__top">

                  <span>
                    {floorPlans.startingFrom.label}
                  </span>

                  <div className="soul-starting-card__icon">
                    <ArrowRight
                      size={18}
                      strokeWidth={1.5}
                    />
                  </div>

                </div>

                <div className="soul-starting-card__price">
                  {floorPlans.startingFrom.value}
                </div>

                <p>
                  {floorPlans.startingFrom.description}
                </p>

                <div className="soul-starting-card__actions">

                  {/* BOOK SITE VISIT */}
                  <button
                    type="button"
                    className="button button-primary"
                    onClick={() => setIsInquiryOpen(true)}
                  >
                    <CalendarDays size={17} />

                    {floorPlans.actions.primary}
                  </button>

                  {/* REQUEST / ENQUIRE */}
                  <button
                    type="button"
                    className="button button-outline"
                    onClick={() => setIsInquiryOpen(true)}
                  >
                    <Send size={16} />

                    {floorPlans.actions.secondary}
                  </button>

                </div>

              </div>

              {/* Documents */}
              <div className="soul-documents">

                <div className="soul-documents__heading">

                  <div>
                    <span className="soul-documents__eyebrow">
                      {floorPlans.documents.eyebrow}
                    </span>

                    <h3>
                      {floorPlans.documents.title}
                    </h3>
                  </div>

                  <ArrowDownToLine
                    size={21}
                    strokeWidth={1.4}
                  />

                </div>

                <div className="soul-documents__list">

                  {floorPlans.documents.items.map((document) => (
                    <a
                      href={document.href}
                      download
                      className="soul-document"
                      key={document.name}
                    >

                      <div className="soul-document__icon">
                        <FileText
                          size={18}
                          strokeWidth={1.4}
                        />
                      </div>

                      <div className="soul-document__content">
                        <strong>
                          {document.name}
                        </strong>

                        <span>
                          {document.type}
                        </span>
                      </div>

                      <ArrowDownToLine
                        className="soul-document__download"
                        size={17}
                        strokeWidth={1.4}
                      />

                    </a>
                  ))}

                </div>

              </div>

              {/* Small reassurance */}
              <div className="soul-floor-plans__note">

                <Map
                  size={17}
                  strokeWidth={1.4}
                />

                <span>
                  Need help choosing the right space?
                  <strong> Our team can guide you.</strong>
                </span>

              </div>

            </aside>

          </div>

        </div>
      </section>

      {/* REUSABLE INQUIRY FORM */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        source="Schedule a Site Visit"
      />
    </>
  );
}