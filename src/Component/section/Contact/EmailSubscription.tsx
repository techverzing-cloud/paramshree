"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Check,
  X,
} from "lucide-react";

import { contactPageData } from "../../../data/contact";

import "../../css/Contact/EmailSubscription.css";

export default function EmailSubscription() {
  const data = contactPageData.subscription;

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] =
    useState(false);

  const validateEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      value
    );
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError("Please enter your email address.");
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      setError(
        "Please enter a valid email address."
      );
      return;
    }

    setError("");

    /*
      Resend integration will be added here later.

      Example:
      await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({
          email: trimmedEmail,
        }),
      });
    */

    setShowSuccess(true);
    setEmail("");
  };

  const closeSuccessPopup = () => {
    setShowSuccess(false);
  };

  return (
    <>
      {/* =====================================
          SUBSCRIPTION SECTION
      ====================================== */}

      <section className="contact-subscription">
        <div className="contact-subscription__background">
          <div className="contact-subscription__glow contact-subscription__glow--one" />
          <div className="contact-subscription__glow contact-subscription__glow--two" />
        </div>

        <div className="container">
          <div className="contact-subscription__content">

            {/* Eyebrow */}

            <span className="contact-subscription__eyebrow">
              {data.eyebrow}
            </span>

            {/* Heading */}

            <h2 className="contact-subscription__title">
              {data.title.split("\n").map(
                (line, index) => (
                  <span key={index}>
                    {line}

                    {index <
                      data.title.split("\n")
                        .length - 1 && <br />}
                  </span>
                )
              )}
            </h2>

            {/* Description */}

            <p className="contact-subscription__description">
              {data.description}
            </p>

            {/* FORM */}

            <form
              className="contact-subscription__form"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="contact-subscription__input-wrapper">
                <input
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);

                    if (error) {
                      setError("");
                    }
                  }}
                  placeholder={data.placeholder}
                  aria-label="Email address"
                  aria-invalid={!!error}
                  className={
                    error
                      ? "contact-subscription__input contact-subscription__input--error"
                      : "contact-subscription__input"
                  }
                />

                {email && (
                  <button
                    type="button"
                    className="contact-subscription__clear"
                    onClick={() => {
                      setEmail("");
                      setError("");
                    }}
                    aria-label="Clear email"
                  >
                    <X
                      size={14}
                      strokeWidth={1.6}
                    />
                  </button>
                )}
              </div>

              <button
                type="submit"
                className="contact-subscription__button"
              >
                <span>{data.buttonText}</span>

                <ArrowRight
                  size={15}
                  strokeWidth={1.6}
                />
              </button>
            </form>

            {/* Validation error */}

            {error && (
              <p
                className="contact-subscription__error"
                role="alert"
              >
                {error}
              </p>
            )}

            <p className="contact-subscription__privacy">
              We respect your privacy. No spam, only
              relevant property updates.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================
          SUCCESS POPUP
      ====================================== */}

      {showSuccess && (
        <div
          className="subscription-success"
          role="dialog"
          aria-modal="true"
          aria-labelledby="subscription-success-title"
        >
          <button
            type="button"
            className="subscription-success__backdrop"
            onClick={closeSuccessPopup}
            aria-label="Close popup"
          />

          <div className="subscription-success__modal">
            <button
              type="button"
              className="subscription-success__close"
              onClick={closeSuccessPopup}
              aria-label="Close"
            >
              <X
                size={18}
                strokeWidth={1.5}
              />
            </button>

            {/* Success Icon */}

            <div className="subscription-success__icon">
              <Check
                size={22}
                strokeWidth={1.5}
              />
            </div>

            {/* Content */}

            <span className="subscription-success__eyebrow">
              SUBSCRIPTION CONFIRMED
            </span>

            <h3
              id="subscription-success-title"
              className="subscription-success__title"
            >
              {data.successTitle}
            </h3>

            <p className="subscription-success__message">
              {data.successMessage}
            </p>

            <button
              type="button"
              className="button button-primary subscription-success__button"
              onClick={closeSuccessPopup}
            >
              <span>
                {data.successButton}
              </span>

              <ArrowRight
                size={14}
                strokeWidth={1.6}
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
}