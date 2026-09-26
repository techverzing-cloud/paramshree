"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Check,
  Download,
  X,
} from "lucide-react";

import { contactPageData } from "../../../data/contact";

import "../../css/Contact/BrochureDownload.css";

export default function BrochureDownload() {
  const data = contactPageData.brochure;

  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [interestedIn, setInterestedIn] = useState("");

  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    email?: string;
    interestedIn?: string;
  }>({});

  const validateEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const validatePhone = (value: string) => {
    return /^[6-9]\d{9}$/.test(value);
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const newErrors: {
      name?: string;
      phone?: string;
      email?: string;
      interestedIn?: string;
    } = {};

    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName) {
      newErrors.name = "Please enter your name.";
    }

    if (!trimmedPhone) {
      newErrors.phone =
        "Please enter your phone number.";
    } else if (!validatePhone(trimmedPhone)) {
      newErrors.phone =
        "Please enter a valid 10-digit phone number.";
    }

    if (!trimmedEmail) {
      newErrors.email =
        "Please enter your email address.";
    } else if (!validateEmail(trimmedEmail)) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    if (!interestedIn) {
      newErrors.interestedIn =
        "Please select an option.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    /*
      Resend integration can be added here later.

      The API route can receive:

      {
        name,
        phone,
        email,
        interestedIn
      }

      After successful API response,
      show the success popup.
    */

    setShowForm(false);
    setShowSuccess(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const closeSuccess = () => {
    setShowSuccess(false);
  };

  const clearForm = () => {
    setName("");
    setPhone("");
    setEmail("");
    setInterestedIn("");
    setErrors({});
  };

  return (
    <>
      {/* =========================================
          BROCHURE SECTION
      ========================================== */}

      <section className="brochure-download">
        <div className="brochure-download__decoration brochure-download__decoration--left" />

        <div className="brochure-download__decoration brochure-download__decoration--right" />

        <div className="container">
          <div className="brochure-download__inner">

            <div className="brochure-download__content">

              <span className="brochure-download__eyebrow">
                {data.eyebrow}
              </span>

              <h2 className="brochure-download__title">
                {data.title}
              </h2>

              <p className="brochure-download__description">
                {data.description}
              </p>

            </div>

            <button
              type="button"
              className="brochure-download__button"
              onClick={() => {
                clearForm();
                setShowForm(true);
              }}
            >
              <Download
                size={16}
                strokeWidth={1.5}
              />

              <span>
                {data.buttonText}
              </span>

              <ArrowRight
                size={15}
                strokeWidth={1.5}
              />
            </button>

          </div>
        </div>
      </section>

      {/* =========================================
          BROCHURE FORM POPUP
      ========================================== */}

      {showForm && (
        <div className="brochure-modal">

          <button
            type="button"
            className="brochure-modal__backdrop"
            onClick={closeForm}
            aria-label="Close brochure form"
          />

          <div
            className="brochure-modal__box"
            role="dialog"
            aria-modal="true"
            aria-labelledby="brochure-form-title"
          >

            <button
              type="button"
              className="brochure-modal__close"
              onClick={closeForm}
              aria-label="Close"
            >
              <X
                size={18}
                strokeWidth={1.5}
              />
            </button>

            {/* Header */}

            <div className="brochure-modal__header">

              <div className="brochure-modal__icon">
                <Download
                  size={19}
                  strokeWidth={1.5}
                />
              </div>

              <span className="brochure-modal__eyebrow">
                {data.eyebrow}
              </span>

              <h3
                id="brochure-form-title"
                className="brochure-modal__title"
              >
                {data.formTitle}
              </h3>

              <p className="brochure-modal__description">
                {data.formDescription}
              </p>

            </div>

            {/* Form */}

            <form
              className="brochure-form"
              onSubmit={handleSubmit}
              noValidate
            >

              {/* Name */}

              <div className="brochure-form__field">
                <label htmlFor="brochure-name">
                  Name <span>*</span>
                </label>

                <input
                  id="brochure-name"
                  type="text"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);

                    if (errors.name) {
                      setErrors({
                        ...errors,
                        name: undefined,
                      });
                    }
                  }}
                  placeholder={data.namePlaceholder}
                  className={
                    errors.name
                      ? "brochure-form__input brochure-form__input--error"
                      : "brochure-form__input"
                  }
                />

                {errors.name && (
                  <small>
                    {errors.name}
                  </small>
                )}
              </div>

              {/* Phone */}

              <div className="brochure-form__field">
                <label htmlFor="brochure-phone">
                  Phone Number <span>*</span>
                </label>

                <input
                  id="brochure-phone"
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  value={phone}
                  onChange={(event) => {
                    const value =
                      event.target.value.replace(
                        /\D/g,
                        ""
                      );

                    setPhone(value);

                    if (errors.phone) {
                      setErrors({
                        ...errors,
                        phone: undefined,
                      });
                    }
                  }}
                  placeholder={data.phonePlaceholder}
                  className={
                    errors.phone
                      ? "brochure-form__input brochure-form__input--error"
                      : "brochure-form__input"
                  }
                />

                {errors.phone && (
                  <small>
                    {errors.phone}
                  </small>
                )}
              </div>

              {/* Email */}

              <div className="brochure-form__field">
                <label htmlFor="brochure-email">
                  Email Address <span>*</span>
                </label>

                <input
                  id="brochure-email"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);

                    if (errors.email) {
                      setErrors({
                        ...errors,
                        email: undefined,
                      });
                    }
                  }}
                  placeholder={data.emailPlaceholder}
                  className={
                    errors.email
                      ? "brochure-form__input brochure-form__input--error"
                      : "brochure-form__input"
                  }
                />

                {errors.email && (
                  <small>
                    {errors.email}
                  </small>
                )}
              </div>

              {/* Interested In */}

              <div className="brochure-form__field">
                <label htmlFor="brochure-interest">
                  Interested In <span>*</span>
                </label>

                <select
                  id="brochure-interest"
                  value={interestedIn}
                  onChange={(event) => {
                    setInterestedIn(
                      event.target.value
                    );

                    if (errors.interestedIn) {
                      setErrors({
                        ...errors,
                        interestedIn: undefined,
                      });
                    }
                  }}
                  className={
                    errors.interestedIn
                      ? "brochure-form__input brochure-form__input--error"
                      : "brochure-form__input"
                  }
                >
                  <option value="">
                    {data.interestedPlaceholder}
                  </option>

                  <option value="Farmhouse">
                    Farmhouse
                  </option>

                  <option value="Villa">
                    Villa
                  </option>

                  <option value="Plots">
                    Plots
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>

                {errors.interestedIn && (
                  <small>
                    {errors.interestedIn}
                  </small>
                )}
              </div>

              <button
                type="submit"
                className="brochure-form__submit"
              >
                <span>
                  {data.submitText}
                </span>

                <ArrowRight
                  size={15}
                  strokeWidth={1.5}
                />
              </button>

            </form>
          </div>
        </div>
      )}

      {/* =========================================
          SUCCESS POPUP
      ========================================== */}

      {showSuccess && (
        <div className="brochure-success">

          <button
            type="button"
            className="brochure-success__backdrop"
            onClick={closeSuccess}
            aria-label="Close"
          />

          <div
            className="brochure-success__box"
            role="dialog"
            aria-modal="true"
          >

            <button
              type="button"
              className="brochure-success__close"
              onClick={closeSuccess}
              aria-label="Close"
            >
              <X
                size={18}
                strokeWidth={1.5}
              />
            </button>

            <div className="brochure-success__icon">
              <Check
                size={23}
                strokeWidth={1.5}
              />
            </div>

            <span className="brochure-success__eyebrow">
              REQUEST RECEIVED
            </span>

            <h3 className="brochure-success__title">
              {data.successTitle}
            </h3>

            <p className="brochure-success__message">
              {data.successMessage}
            </p>

            <button
              type="button"
              className="brochure-success__button"
              onClick={closeSuccess}
            >
              <span>
                {data.successButton}
              </span>

              <ArrowRight
                size={14}
                strokeWidth={1.5}
              />
            </button>

          </div>
        </div>
      )}
    </>
  );
}