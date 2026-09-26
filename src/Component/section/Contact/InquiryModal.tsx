// "use client";

// import { FormEvent, useEffect, useState } from "react";
// import { ArrowRight, Check, X } from "lucide-react";

// import { contactPageData } from "../../../data/contact";

// import "../../css/Contact/inquiry-modal.css";

// interface InquiryModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   source?: string;
// }

// interface FormData {
//   name: string;
//   phone: string;
//   email: string;
//   interest: string;
//   message: string;
// }

// const initialFormData: FormData = {
//   name: "",
//   phone: "",
//   email: "",
//   interest: "",
//   message: "",
// };

// export default function InquiryModal({
//   isOpen,
//   onClose,
//   source = "Website",
// }: InquiryModalProps) {
//   const [formData, setFormData] =
//     useState<FormData>(initialFormData);

//   const [errors, setErrors] = useState<
//     Partial<Record<keyof FormData, string>>
//   >({});

//   const [isSubmitted, setIsSubmitted] =
//     useState(false);

//   useEffect(() => {
//     if (!isOpen) return;

//     document.body.style.overflow = "hidden";

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isOpen]);

//   useEffect(() => {
//     if (!isOpen) {
//       setFormData(initialFormData);
//       setErrors({});
//       setIsSubmitted(false);
//     }
//   }, [isOpen]);

//   useEffect(() => {
//     if (!isOpen) return;

//     const handleEscape = (event: KeyboardEvent) => {
//       if (event.key === "Escape") {
//         onClose();
//       }
//     };

//     window.addEventListener("keydown", handleEscape);

//     return () => {
//       window.removeEventListener(
//         "keydown",
//         handleEscape
//       );
//     };
//   }, [isOpen, onClose]);

//   if (!isOpen) {
//     return null;
//   }

//   const validate = () => {
//     const newErrors: Partial<
//       Record<keyof FormData, string>
//     > = {};

//     const phoneRegex = /^[6-9]\d{9}$/;

//     const emailRegex =
//       /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!formData.name.trim()) {
//       newErrors.name = "Please enter your name.";
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone =
//         "Please enter your phone number.";
//     } else if (!phoneRegex.test(formData.phone.trim())) {
//       newErrors.phone =
//         "Please enter a valid 10-digit mobile number.";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email =
//         "Please enter your email address.";
//     } else if (
//       !emailRegex.test(formData.email.trim())
//     ) {
//       newErrors.email =
//         "Please enter a valid email address.";
//     }

//     if (!formData.interest) {
//       newErrors.interest =
//         "Please select your interest.";
//     }

//     return newErrors;
//   };

//   const handleChange = (
//     field: keyof FormData,
//     value: string
//   ) => {
//     setFormData((previous) => ({
//       ...previous,
//       [field]: value,
//     }));

//     if (errors[field]) {
//       setErrors((previous) => ({
//         ...previous,
//         [field]: "",
//       }));
//     }
//   };

//   const handleSubmit = async (
//     event: FormEvent<HTMLFormElement>
//   ) => {
//     event.preventDefault();

//     const validationErrors = validate();

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     /*
//       Resend API integration will be connected here.

//       IMPORTANT:
//       Never put the Resend API key in this client-side file.

//       Later:
//       POST /api/contact
//       -> server-side Resend
//       -> ParamShree email
//       -> optional customer confirmation
//     */

//     console.log("Inquiry submitted:", {
//       ...formData,
//       source,
//     });

//     setIsSubmitted(true);
//   };

//   return (
//     <div
//       className="inquiry-modal"
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="inquiry-modal-title"
//     >
//       <div
//         className="inquiry-modal__backdrop"
//         onClick={onClose}
//       />

//       <div className="inquiry-modal__wrapper">
//         <div className="inquiry-modal__card">
//           <button
//             type="button"
//             className="inquiry-modal__close"
//             onClick={onClose}
//             aria-label="Close enquiry form"
//           >
//             <X size={18} strokeWidth={1.5} />
//           </button>

//           {!isSubmitted ? (
//             <>
//               <div className="inquiry-modal__header">
//                 <span className="section-label">
//                   GET IN TOUCH
//                 </span>

//                 <h2 id="inquiry-modal-title">
//                   {contactPageData.inquiryForm.title}
//                 </h2>

//                 <p>
//                   {contactPageData.inquiryForm.description}
//                 </p>
//               </div>

//               <form
//                 className="inquiry-modal__form"
//                 onSubmit={handleSubmit}
//                 noValidate
//               >
//                 <div className="inquiry-modal__grid">
//                   <div className="inquiry-modal__field">
//                     <label htmlFor="inquiry-name">
//                       Name <span>*</span>
//                     </label>

//                     <input
//                       id="inquiry-name"
//                       type="text"
//                       value={formData.name}
//                       onChange={(event) =>
//                         handleChange(
//                           "name",
//                           event.target.value
//                         )
//                       }
//                       placeholder="Your name"
//                       autoComplete="name"
//                     />

//                     {errors.name && (
//                       <small>{errors.name}</small>
//                     )}
//                   </div>

//                   <div className="inquiry-modal__field">
//                     <label htmlFor="inquiry-phone">
//                       Phone Number <span>*</span>
//                     </label>

//                     <input
//                       id="inquiry-phone"
//                       type="tel"
//                       inputMode="numeric"
//                       maxLength={10}
//                       value={formData.phone}
//                       onChange={(event) =>
//                         handleChange(
//                           "phone",
//                           event.target.value.replace(
//                             /\D/g,
//                             ""
//                           )
//                         )
//                       }
//                       placeholder="Your phone number"
//                       autoComplete="tel"
//                     />

//                     {errors.phone && (
//                       <small>{errors.phone}</small>
//                     )}
//                   </div>
//                 </div>

//                 <div className="inquiry-modal__grid">
//                   <div className="inquiry-modal__field">
//                     <label htmlFor="inquiry-email">
//                       Email Address <span>*</span>
//                     </label>

//                     <input
//                       id="inquiry-email"
//                       type="email"
//                       value={formData.email}
//                       onChange={(event) =>
//                         handleChange(
//                           "email",
//                           event.target.value
//                         )
//                       }
//                       placeholder="Your email address"
//                       autoComplete="email"
//                     />

//                     {errors.email && (
//                       <small>{errors.email}</small>
//                     )}
//                   </div>

//                   <div className="inquiry-modal__field">
//                     <label htmlFor="inquiry-interest">
//                       Interested In <span>*</span>
//                     </label>

//                     <select
//                       id="inquiry-interest"
//                       value={formData.interest}
//                       onChange={(event) =>
//                         handleChange(
//                           "interest",
//                           event.target.value
//                         )
//                       }
//                     >
//                       <option value="">
//                         Select an option
//                       </option>

//                       <option value="Farmhouse">
//                         Farmhouse
//                       </option>

//                       <option value="Villa">
//                         Villa
//                       </option>

//                       <option value="Plot">
//                         Plot
//                       </option>

//                       <option value="Site Visit">
//                         Site Visit
//                       </option>

//                       <option value="General Enquiry">
//                         General Enquiry
//                       </option>
//                     </select>

//                     {errors.interest && (
//                       <small>{errors.interest}</small>
//                     )}
//                   </div>
//                 </div>

//                 <div className="inquiry-modal__field">
//                   <label htmlFor="inquiry-message">
//                     Message
//                   </label>

//                   <textarea
//                     id="inquiry-message"
//                     rows={4}
//                     value={formData.message}
//                     onChange={(event) =>
//                       handleChange(
//                         "message",
//                         event.target.value
//                       )
//                     }
//                     placeholder="Tell us more about your requirements..."
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="button button-primary inquiry-modal__submit"
//                 >
//                   <span>
//                     {contactPageData.inquiryForm.submitText}
//                   </span>

//                   <ArrowRight
//                     size={15}
//                     strokeWidth={1.7}
//                   />
//                 </button>
//               </form>
//             </>
//           ) : (
//             <div className="inquiry-modal__success">
//               <div className="inquiry-modal__success-icon">
//                 <Check
//                   size={28}
//                   strokeWidth={1.5}
//                 />
//               </div>

//               <span className="section-label">
//                 ENQUIRY RECEIVED
//               </span>

//               <h2>
//                 {contactPageData.inquiryForm.successTitle}
//               </h2>

//               <p>
//                 {contactPageData.inquiryForm.successMessage}
//               </p>

//               <button
//                 type="button"
//                 className="button button-primary"
//                 onClick={onClose}
//               >
//                 Continue
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { FormEvent, useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  Clock3,
  UserRound,
  X,
} from "lucide-react";

import { contactPageData } from "../../../data/contact";

import "../../css/Contact/inquiry-modal.css";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;

  /**
   * Optional overrides allow the same modal
   * to be reused from different sections.
   */
  title?: string;
  description?: string;
  submitText?: string;
  successTitle?: string;
  successMessage?: string;
  eyebrow?: string;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  phone: "",
  email: "",
  interest: "",
  message: "",
};

export default function InquiryModal({
  isOpen,
  onClose,
  source = "Website",

  title,
  description,
  submitText,
  successTitle,
  successMessage,
  eyebrow,
}: InquiryModalProps) {
  const [formData, setFormData] =
    useState<FormData>(initialFormData);

  const [errors, setErrors] = useState<
    Partial<Record<keyof FormData, string>>
  >({});

  const [isSubmitted, setIsSubmitted] =
    useState(false);

  /*
   * ----------------------------------------
   * DATA
   * ----------------------------------------
   */

  const formDataConfig =
    contactPageData.inquiryForm;

  const modalTitle =
    title || formDataConfig.title;

  const modalDescription =
    description || formDataConfig.description;

  const modalSubmitText =
    submitText || formDataConfig.submitText;

  const modalSuccessTitle =
    successTitle || formDataConfig.successTitle;

  const modalSuccessMessage =
    successMessage ||
    formDataConfig.successMessage;

  const modalEyebrow =
    eyebrow || "GET IN TOUCH";

  /*
   * ----------------------------------------
   * BODY SCROLL LOCK
   * ----------------------------------------
   */

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        originalOverflow;
    };
  }, [isOpen]);

  /*
   * ----------------------------------------
   * RESET MODAL
   * ----------------------------------------
   */

  useEffect(() => {
    if (!isOpen) {
      setFormData(initialFormData);
      setErrors({});
      setIsSubmitted(false);
    }
  }, [isOpen]);

  /*
   * ----------------------------------------
   * ESCAPE KEY
   * ----------------------------------------
   */

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [isOpen, onClose]);

  /*
   * ----------------------------------------
   * VALIDATION
   * ----------------------------------------
   */

  const validate = () => {
    const newErrors: Partial<
      Record<keyof FormData, string>
    > = {};

    const phoneRegex = /^[6-9]\d{9}$/;

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name =
        "Please enter your name.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone =
        "Please enter your phone number.";
    } else if (
      !phoneRegex.test(
        formData.phone.trim()
      )
    ) {
      newErrors.phone =
        "Please enter a valid 10-digit mobile number.";
    }

    if (!formData.email.trim()) {
      newErrors.email =
        "Please enter your email address.";
    } else if (
      !emailRegex.test(
        formData.email.trim()
      )
    ) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    if (!formData.interest) {
      newErrors.interest =
        "Please select your interest.";
    }

    return newErrors;
  };

  /*
   * ----------------------------------------
   * FIELD CHANGE
   * ----------------------------------------
   */

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((previous) => ({
        ...previous,
        [field]: "",
      }));
    }
  };

  /*
   * ----------------------------------------
   * SUBMIT
   * ----------------------------------------
   */

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const validationErrors =
      validate();

    if (
      Object.keys(validationErrors)
        .length > 0
    ) {
      setErrors(validationErrors);
      return;
    }

    /*
     * ----------------------------------------
     * RESEND WILL BE CONNECTED HERE
     * ----------------------------------------
     *
     * Never expose the Resend API key
     * inside this client component.
     *
     * Later:
     *
     * POST /api/contact
     *
     * -> Next.js server route
     * -> Resend
     * -> ParamShree email
     */

    console.log("Inquiry submitted:", {
      ...formData,
      source,
    });

    setIsSubmitted(true);
  };

  /*
   * ----------------------------------------
   * DON'T RENDER
   * ----------------------------------------
   */

  if (!isOpen) {
    return null;
  }

  /*
   * ----------------------------------------
   * MODAL
   * ----------------------------------------
   */

  return (
    <div
      className="inquiry-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
    >
      {/* BACKDROP */}

      <div
        className="inquiry-modal__backdrop"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* MODAL WRAPPER */}

      <div className="inquiry-modal__wrapper">
        <div className="inquiry-modal__card">

          {/* CLOSE BUTTON */}

          <button
            type="button"
            className="inquiry-modal__close"
            onClick={onClose}
            aria-label="Close enquiry form"
          >
            <X
              size={19}
              strokeWidth={1.5}
            />
          </button>

          {!isSubmitted ? (
            <div className="inquiry-modal__layout">

              {/* ==================================
                  LEFT BRAND PANEL
              ================================== */}

              <div className="inquiry-modal__visual">

                <div className="inquiry-modal__brand">
                  <div className="inquiry-modal__brand-mark">
                    P
                  </div>

                  <div className="inquiry-modal__brand-name">
                    <strong>
                      PARAMSHREE
                    </strong>

                    <span>
                      REAL ESTATE · CHANNEL PARTNER
                    </span>
                  </div>
                </div>

                <div className="inquiry-modal__visual-content">

                  <span className="inquiry-modal__visual-eyebrow">
                    LET&apos;S CONNECT
                  </span>

                  <h2>
                    We&apos;re happy
                    <br />
                    to talk.
                  </h2>

                  <p>
                    Share a few details and
                    our team will get in touch
                    with you shortly.
                  </p>

                  <div className="inquiry-modal__visual-note">
                    <span />
                    <p>
                      A conversation starts here
                    </p>
                  </div>

                </div>

                <div className="inquiry-modal__visual-decoration">
                  <span />
                  <span />
                  <span />
                </div>

              </div>

              {/* ==================================
                  RIGHT FORM PANEL
              ================================== */}

              <div className="inquiry-modal__form-panel">

                {/* HEADER */}

                <div className="inquiry-modal__header">

                  <div className="inquiry-modal__header-icon">
                    <Clock3
                      size={20}
                      strokeWidth={1.5}
                    />
                  </div>

                  <div>
                    <span className="inquiry-modal__eyebrow">
                      {modalEyebrow}
                    </span>

                    <h2
                      id="inquiry-modal-title"
                    >
                      {modalTitle}
                    </h2>

                    <p>
                      {modalDescription}
                    </p>
                  </div>

                </div>

                {/* FORM */}

                <form
                  className="inquiry-modal__form"
                  onSubmit={handleSubmit}
                  noValidate
                >

                  {/* NAME */}

                  <div className="inquiry-modal__field">
                    <label htmlFor="inquiry-name">
                      Your name
                    </label>

                    <div className="inquiry-modal__input-wrapper">

                      <UserRound
                        size={17}
                        strokeWidth={1.5}
                      />

                      <input
                        id="inquiry-name"
                        type="text"
                        value={formData.name}
                        onChange={(event) =>
                          handleChange(
                            "name",
                            event.target.value
                          )
                        }
                        placeholder="Enter your name"
                        autoComplete="name"
                      />

                    </div>

                    {errors.name && (
                      <small>
                        {errors.name}
                      </small>
                    )}
                  </div>

                  {/* PHONE */}

                  <div className="inquiry-modal__field">
                    <label htmlFor="inquiry-phone">
                      Mobile number
                    </label>

                    <div className="inquiry-modal__input-wrapper inquiry-modal__phone-wrapper">

                      <span className="inquiry-modal__country-code">
                        +91
                      </span>

                      <span className="inquiry-modal__divider" />

                      <input
                        id="inquiry-phone"
                        type="tel"
                        inputMode="numeric"
                        maxLength={10}
                        value={formData.phone}
                        onChange={(event) =>
                          handleChange(
                            "phone",
                            event.target.value.replace(
                              /\D/g,
                              ""
                            )
                          )
                        }
                        placeholder="10-digit mobile number"
                        autoComplete="tel"
                      />

                    </div>

                    {errors.phone && (
                      <small>
                        {errors.phone}
                      </small>
                    )}
                  </div>

                  {/* EMAIL */}

                  <div className="inquiry-modal__field">
                    <label htmlFor="inquiry-email">
                      Email address
                    </label>

                    <div className="inquiry-modal__input-wrapper">

                      <input
                        id="inquiry-email"
                        type="email"
                        value={formData.email}
                        onChange={(event) =>
                          handleChange(
                            "email",
                            event.target.value
                          )
                        }
                        placeholder="Enter your email address"
                        autoComplete="email"
                      />

                    </div>

                    {errors.email && (
                      <small>
                        {errors.email}
                      </small>
                    )}
                  </div>

                  {/* INTEREST */}

                  <div className="inquiry-modal__field">
                    <label htmlFor="inquiry-interest">
                      Interested in
                    </label>

                    <div className="inquiry-modal__input-wrapper inquiry-modal__select-wrapper">

                      <select
                        id="inquiry-interest"
                        value={
                          formData.interest
                        }
                        onChange={(event) =>
                          handleChange(
                            "interest",
                            event.target.value
                          )
                        }
                      >
                        <option value="">
                          Select an option
                        </option>

                        {contactPageData.contactInformation.form.interestOptions.map(
                          (option) => (
                            <option
                              key={option}
                              value={option}
                            >
                              {option}
                            </option>
                          )
                        )}
                      </select>

                    </div>

                    {errors.interest && (
                      <small>
                        {errors.interest}
                      </small>
                    )}
                  </div>

                  {/* MESSAGE */}

                  <div className="inquiry-modal__field">
                    <label htmlFor="inquiry-message">
                      Message
                    </label>

                    <textarea
                      id="inquiry-message"
                      rows={3}
                      value={formData.message}
                      onChange={(event) =>
                        handleChange(
                          "message",
                          event.target.value
                        )
                      }
                      placeholder="Tell us more about your requirements..."
                    />
                  </div>

                  {/* SUBMIT */}

                  <button
                    type="submit"
                    className="inquiry-modal__submit"
                  >
                    <span>
                      {modalSubmitText}
                    </span>

                    <ArrowRight
                      size={17}
                      strokeWidth={1.6}
                    />
                  </button>

                  {/* FOOTNOTE */}

                  <p className="inquiry-modal__privacy">
                    <span>✦</span>
                    Your details are safe with us
                    and will only be used to
                    respond to your enquiry.
                  </p>

                </form>
              </div>
            </div>
          ) : (

            /* ==================================
               SUCCESS SCREEN
            ================================== */

            <div className="inquiry-modal__success">

              <div className="inquiry-modal__success-icon">
                <Check
                  size={30}
                  strokeWidth={1.7}
                />
              </div>

              <span className="inquiry-modal__success-eyebrow">
                REQUEST RECEIVED
              </span>

              <h2>
                {modalSuccessTitle}
              </h2>

              <p>
                {modalSuccessMessage}
              </p>

              <button
                type="button"
                className="inquiry-modal__success-button"
                onClick={onClose}
              >
                <span>
                  Continue Browsing
                </span>

                <Check
                  size={16}
                  strokeWidth={1.8}
                />
              </button>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}