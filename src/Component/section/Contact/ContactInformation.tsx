"use client";

import { FormEvent, useState } from "react";
import {
  Clock3,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Check,
  X,
} from "lucide-react";

import { contactPageData } from "../../../data/contact";

import "../../css/Contact/Contactinformation.css";

type FormData = {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
};

type FormErrors = Partial<
  Record<keyof FormData, string>
>;

const initialFormData: FormData = {
  name: "",
  phone: "",
  email: "",
  interest: "",
  message: "",
};

const iconMap = {
  phone: Phone,
  email: Mail,
  location: MapPin,
  clock: Clock3,
};

export default function ContactInformation() {
  const data = contactPageData.contactInformation;

  const [formData, setFormData] =
    useState<FormData>(initialFormData);

  const [errors, setErrors] =
    useState<FormErrors>({});

  const [showSuccess, setShowSuccess] =
    useState(false);

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

  const validateForm = () => {
    const newErrors: FormErrors = {};

    const phoneRegex = /^[6-9]\d{9}$/;

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone =
        "Please enter your phone number.";
    } else if (
      !phoneRegex.test(formData.phone.trim())
    ) {
      newErrors.phone =
        "Please enter a valid 10-digit mobile number.";
    }

    if (!formData.email.trim()) {
      newErrors.email =
        "Please enter your email address.";
    } else if (
      !emailRegex.test(formData.email.trim())
    ) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    if (!formData.interest) {
      newErrors.interest =
        "Please select an option.";
    }

    return newErrors;
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    /*
      Resend integration will be added later.

      The form data will be sent to:
      /api/contact

      The Resend API key must remain
      server-side in .env.local.
    */

    console.log("Contact enquiry:", formData);

    setShowSuccess(true);
  };

  const closeSuccess = () => {
    setShowSuccess(false);
    setFormData(initialFormData);
    setErrors({});
  };

  return (
    <>
      <section className="contact-information section">
        <div className="container">
          <div className="contact-information__grid">

            {/* =====================================
                LEFT — CONTACT DETAILS
            ====================================== */}

            <div className="contact-information__details">
              <div className="contact-information__heading">
                <span className="section-label">
                  {data.eyebrow}
                </span>

                <h2 className="contact-information__title">
                  {data.title.split("\n").map(
                    (line, index) => (
                      <span key={index}>
                        {line}
                        {index <
                          data.title.split("\n").length -
                            1 && <br />}
                      </span>
                    )
                  )}
                </h2>

                <p className="contact-information__description">
                  {data.description}
                </p>
              </div>

              <div className="contact-information__items">
                {data.details.map((item) => {
                  const Icon =
                    iconMap[
                      item.type as keyof typeof iconMap
                    ];

                  return (
                    <div
                      className="contact-information__item"
                      key={item.type}
                    >
                      <div className="contact-information__icon">
                        <Icon
                          size={20}
                          strokeWidth={1.4}
                        />
                      </div>

                      <div className="contact-information__item-content">
                        <h3>{item.title}</h3>

                        <p className="contact-information__item-value">
                          {item.value}
                        </p>

                        <p className="contact-information__item-secondary">
                          {item.secondary
                            .split("\n")
                            .map((line, index) => (
                              <span key={index}>
                                {line}
                                {index <
                                  item.secondary.split(
                                    "\n"
                                  ).length -
                                    1 && <br />}
                              </span>
                            ))}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* =====================================
                CENTER — ENQUIRY FORM
            ====================================== */}

            <div className="contact-information__form-card">
              <div className="contact-information__form-heading">
                <h2>{data.form.title}</h2>

                <p>{data.form.description}</p>
              </div>

              <form
                className="contact-information__form"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="contact-information__form-row">
                  <div className="contact-information__field">
                    <label htmlFor="contact-name">
                      {data.form.fields.name}{" "}
                      <span>*</span>
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      placeholder={
                        data.form.placeholders.name
                      }
                      value={formData.name}
                      onChange={(event) =>
                        handleChange(
                          "name",
                          event.target.value
                        )
                      }
                    />

                    {errors.name && (
                      <small>{errors.name}</small>
                    )}
                  </div>

                  <div className="contact-information__field">
                    <label htmlFor="contact-phone">
                      {data.form.fields.phone}{" "}
                      <span>*</span>
                    </label>

                    <input
                      id="contact-phone"
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      placeholder={
                        data.form.placeholders.phone
                      }
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
                    />

                    {errors.phone && (
                      <small>{errors.phone}</small>
                    )}
                  </div>
                </div>

                <div className="contact-information__form-row">
                  <div className="contact-information__field">
                    <label htmlFor="contact-email">
                      {data.form.fields.email}{" "}
                      <span>*</span>
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      placeholder={
                        data.form.placeholders.email
                      }
                      value={formData.email}
                      onChange={(event) =>
                        handleChange(
                          "email",
                          event.target.value
                        )
                      }
                    />

                    {errors.email && (
                      <small>{errors.email}</small>
                    )}
                  </div>

                  <div className="contact-information__field">
                    <label htmlFor="contact-interest">
                      {data.form.fields.interest}{" "}
                      <span>*</span>
                    </label>

                    <select
                      id="contact-interest"
                      value={formData.interest}
                      onChange={(event) =>
                        handleChange(
                          "interest",
                          event.target.value
                        )
                      }
                    >
                      <option value="">
                        {
                          data.form.placeholders
                            .interest
                        }
                      </option>

                      {data.form.interestOptions.map(
                        (option) => (
                          <option
                            value={option}
                            key={option}
                          >
                            {option}
                          </option>
                        )
                      )}
                    </select>

                    {errors.interest && (
                      <small>{errors.interest}</small>
                    )}
                  </div>
                </div>

                <div className="contact-information__field">
                  <label htmlFor="contact-message">
                    {data.form.fields.message}{" "}
                    <span>*</span>
                  </label>

                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder={
                      data.form.placeholders.message
                    }
                    value={formData.message}
                    onChange={(event) =>
                      handleChange(
                        "message",
                        event.target.value
                      )
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="button button-primary contact-information__submit"
                >
                  <span>{data.form.submitText}</span>

                  <ArrowRight
                    size={15}
                    strokeWidth={1.7}
                  />
                </button>
              </form>
            </div>

            {/* =====================================
                RIGHT — LOCATION
            ====================================== */}
<div className="contact-location-card">

  {/* MAP */}

  <div className="contact-location-card__map">
    <img
      src={data.location.image}
      alt={data.location.imageAlt}
    />

    <div className="contact-location-card__map-overlay">
      <div className="contact-location-card__pin">
        <MapPin
          size={19}
          strokeWidth={1.6}
        />
      </div>

      <div className="contact-location-card__map-label">
        <strong>
          ParamShree
        </strong>
      </div>
    </div>
  </div>

  {/* LOCATION DETAILS */}

  <div className="contact-location-card__details">

    <div className="contact-location-card__icon">
      <MapPin
        size={18}
        strokeWidth={1.5}
      />
    </div>

    <div className="contact-location-card__content">

      <h3>
        {data.location.title}
      </h3>

      <p className="contact-location-card__name">
        {data.location.name}
      </p>

      <p className="contact-location-card__address">
        {data.location.address}
        <br />
        {data.location.city}
      </p>

      <a
        href="#"
        className="contact-location-card__directions"
      >
        <span>
          {data.location.buttonText}
        </span>

        <ArrowRight
          size={14}
          strokeWidth={1.6}
        />
      </a>

    </div>

  </div>

</div>

          </div>
        </div>
      </section>

      {/* =====================================
          SUCCESS POPUP
      ====================================== */}

      {showSuccess && (
        <div
          className="contact-success"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="contact-success__backdrop"
            onClick={closeSuccess}
          />

          <div className="contact-success__card">
            <button
              type="button"
              className="contact-success__close"
              onClick={closeSuccess}
              aria-label="Close"
            >
              <X
                size={17}
                strokeWidth={1.5}
              />
            </button>

            <div className="contact-success__icon">
              <Check
                size={28}
                strokeWidth={1.5}
              />
            </div>

            <span className="section-label">
              ENQUIRY RECEIVED
            </span>

            <h2>{data.form.successTitle}</h2>

            <p>{data.form.successMessage}</p>

            <button
              type="button"
              className="button button-primary"
              onClick={closeSuccess}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </>
  );
}