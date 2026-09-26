
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { ArrowRight, Menu, X } from "lucide-react";

// import { navigation } from "../../config/navigation";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const closeMenu = () => setIsMenuOpen(false);

//   return (
//     <header className="site-header">
//       <nav
//         className="navbar container"
//         aria-label="Main navigation"
//       >
//         {/* Brand / Logo */}
//         <Link
//           href="/#home"
//           className="brand"
//           aria-label="ParamShree home"
//           onClick={closeMenu}
//         >
//           <svg
//             className="brand-mark"
//             viewBox="0 0 48 56"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             aria-hidden="true"
//           >
//             <path
//               d="M24 52V5"
//               stroke="currentColor"
//               strokeWidth="1.4"
//             />

//             <path
//               d="M24 25C12 25 7 17 7 11C18 11 24 17 24 25Z"
//               stroke="currentColor"
//               strokeWidth="1.2"
//             />

//             <path
//               d="M24 36C36 36 41 28 41 22C30 22 24 28 24 36Z"
//               stroke="currentColor"
//               strokeWidth="1.2"
//             />

//             <path
//               d="M24 15C18 9 20 4 24 2C28 7 29 11 24 15Z"
//               stroke="currentColor"
//               strokeWidth="1.2"
//             />

//             <path
//               d="M24 52L16 46M24 44L32 38"
//               stroke="currentColor"
//               strokeWidth="1.2"
//             />
//           </svg>

//           <span className="brand-copy">
//             <span className="brand-name">
//               PARAMSHREE
//             </span>

//             <span className="brand-tagline">
//               REAL ESTATE · CHANNEL PARTNER
//             </span>
//           </span>
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="nav-links">
//           {navigation.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className="nav-link"
//             >
//               {link.label}
//             </Link>
//           ))}
//         </div>

//         {/* Desktop Enquiry Button */}
//         <Link
//           href="/contact"
//           className="button button-primary navbar-cta"
//         >
//           Enquire Now
//           <ArrowRight
//             size={15}
//             aria-hidden="true"
//           />
//         </Link>

//         {/* Mobile Menu Toggle */}
//         <button
//           type="button"
//           className="mobile-menu-toggle"
//           aria-label={
//             isMenuOpen
//               ? "Close navigation"
//               : "Open navigation"
//           }
//           aria-expanded={isMenuOpen}
//           aria-controls="mobile-navigation"
//           onClick={() => setIsMenuOpen((open) => !open)}
//         >
//           {isMenuOpen ? (
//             <X size={24} />
//           ) : (
//             <Menu size={24} />
//           )}
//         </button>
//       </nav>

//       {/* Mobile Navigation */}
//       <div
//         id="mobile-navigation"
//         className={`mobile-navigation ${
//           isMenuOpen ? "is-open" : ""
//         }`}
//         hidden={!isMenuOpen}
//       >
//         {navigation.map((link) => (
//           <Link
//             key={link.href}
//             href={link.href}
//             className="mobile-nav-link"
//             onClick={closeMenu}
//           >
//             {link.label}
//           </Link>
//         ))}

//         {/* Mobile Enquiry Button */}
//         <Link
//           href="/contact"
//           className="button button-primary mobile-cta"
//           onClick={closeMenu}
//         >
//           Enquire Now
//           <ArrowRight
//             size={16}
//             aria-hidden="true"
//           />
//         </Link>
//       </div>
//     </header>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X, Phone, Clock, UserRound, CheckCircle2 } from "lucide-react";

import { navigation } from "../../config/navigation";
import styles from "../css/Navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [callTime, setCallTime] = useState("");

  const closeMenu = () => setIsMenuOpen(false);

  const closeCallback = () => {
    setIsCallbackOpen(false);
    setIsSubmitted(false);
  };

  useEffect(() => {
    if (!isCallbackOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeCallback();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isCallbackOpen]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <header className="site-header">
        <nav className="navbar container" aria-label="Main navigation">
          {/* Brand / Logo */}
          <Link
            href="/#home"
            className="brand"
            aria-label="ParamShree home"
            onClick={closeMenu}
          >
            <svg
              className="brand-mark"
              viewBox="0 0 48 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M24 52V5" stroke="currentColor" strokeWidth="1.4" />
              <path
                d="M24 25C12 25 7 17 7 11C18 11 24 17 24 25Z"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M24 36C36 36 41 28 41 22C30 22 24 28 24 36Z"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M24 15C18 9 20 4 24 2C28 7 29 11 24 15Z"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M24 52L16 46M24 44L32 38"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>

            <span className="brand-copy">
              <span className="brand-name">PARAMSHREE</span>
              <span className="brand-tagline">
                REAL ESTATE · CHANNEL PARTNER
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-links">
            {navigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className={styles.desktopActions}>
            <button
              type="button"
              className={styles.callButton}
              onClick={() => setIsCallbackOpen(true)}
            >
              <Phone size={15} aria-hidden="true" />
              Call Now
            </button>

            <Link
              href="/contact"
              className="button button-primary navbar-cta"
            >
              Enquire Now
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          className={`mobile-navigation ${isMenuOpen ? "is-open" : ""}`}
          hidden={!isMenuOpen}
        >
          {navigation.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}

          <button
            type="button"
            className={styles.mobileCallButton}
            onClick={() => {
              closeMenu();
              setIsCallbackOpen(true);
            }}
          >
            <Phone size={16} aria-hidden="true" />
            Call Now
          </button>

          <Link
            href="/contact"
            className="button button-primary mobile-cta"
            onClick={closeMenu}
          >
            Enquire Now
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </header>

      {/* Callback Popup */}
      {isCallbackOpen && (
        <div
          className={styles.modalBackdrop}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeCallback();
            }
          }}
        >
          <section
            className={styles.callbackModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="callback-title"
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={closeCallback}
              aria-label="Close popup"
            >
              <X size={20} />
            </button>

            {!isSubmitted ? (
              <div className={styles.modalLayout}>
                {/* Visual panel */}
                <div className={styles.visualPanel}>
                  <div className={styles.visualTopline}>
                    <span className={styles.visualLogoMark}>P</span>
                    <span>PARAMSHREE</span>
                  </div>

                  <div className={styles.visualArtwork} aria-hidden="true">
                    <div className={styles.artSun} />
                    <div className={styles.artHillBack} />
                    <div className={styles.artHillFront} />
                    <div className={styles.artPlant}>
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>

                  <div className={styles.visualCopy}>
                    <span className={styles.visualKicker}>LET'S CONNECT</span>
                    <h2>We’re happy to talk.</h2>
                    <p>
                      Share a few details and choose a convenient time
                      for our team to call you.
                    </p>
                  </div>

                  <div className={styles.visualFooter}>
                    <span className={styles.footerDot} />
                    A conversation starts here
                  </div>
                </div>

                {/* Form panel */}
                <div className={styles.formPanel}>
                  <div className={styles.formHeading}>
                    <span className={styles.formIcon}>
                      <Phone size={19} />
                    </span>
                    <div>
                      <span className={styles.formEyebrow}>CALLBACK REQUEST</span>
                      <h2 id="callback-title">Schedule a Call</h2>
                      <p>Tell us how and when to reach you.</p>
                    </div>
                  </div>

                  <form className={styles.callbackForm} onSubmit={handleSubmit}>
                    <label className={styles.fieldLabel} htmlFor="callback-name">
                      Your name
                    </label>
                    <div className={styles.inputWrap}>
                      <UserRound size={17} aria-hidden="true" />
                      <input
                        id="callback-name"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Enter your name"
                        minLength={2}
                        maxLength={80}
                        autoComplete="name"
                        required
                      />
                    </div>

                    <label className={styles.fieldLabel} htmlFor="callback-mobile">
                      Mobile number
                    </label>
                    <div className={styles.inputWrap}>
                      <Phone size={17} aria-hidden="true" />
                      <span className={styles.countryCode}>+91</span>
                      <input
                        id="callback-mobile"
                        type="tel"
                        value={mobile}
                        onChange={(event) =>
                          setMobile(event.target.value.replace(/\D/g, "").slice(0, 10))
                        }
                        placeholder="10-digit mobile number"
                        inputMode="numeric"
                        pattern="[6-9][0-9]{9}"
                        title="Enter a valid 10-digit Indian mobile number"
                        autoComplete="tel-national"
                        required
                      />
                    </div>

                    <label className={styles.fieldLabel} htmlFor="callback-time">
                      Best time to call
                    </label>
                    <div className={styles.inputWrap}>
                      <Clock size={17} aria-hidden="true" />
                      <select
                        id="callback-time"
                        value={callTime}
                        onChange={(event) => setCallTime(event.target.value)}
                        required
                      >
                        <option value="" disabled>
                          Select a time
                        </option>
                        <option value="Morning (9 AM – 12 PM)">
                          Morning (9 AM – 12 PM)
                        </option>
                        <option value="Afternoon (12 PM – 4 PM)">
                          Afternoon (12 PM – 4 PM)
                        </option>
                        <option value="Evening (4 PM – 7 PM)">
                          Evening (4 PM – 7 PM)
                        </option>
                      </select>
                    </div>

                    <button type="submit" className={styles.submitButton}>
                      Schedule a call
                      <ArrowRight size={17} aria-hidden="true" />
                    </button>

                    <p className={styles.privacyNote}>
                      <span aria-hidden="true">✦</span>
                      Your details are for this callback request.
                    </p>
                  </form>
                </div>
              </div>
            ) : (
              <div className={styles.successView}>
                <div className={styles.successIcon}>
                  <CheckCircle2 size={34} />
                </div>
                <span className={styles.formEyebrow}>REQUEST RECEIVED</span>
                <h2 id="callback-title">Thank you!</h2>
                <p>
                  We’ll connect with you at your requested time:
                </p>
                <strong className={styles.requestedTime}>{callTime}</strong>
                <p className={styles.successSmall}>
                  Your callback request has been recorded in this page.
                  Our team will be able to follow up once the form is
                  connected to the enquiry system.
                </p>
                <button
                  type="button"
                  className={styles.successButton}
                  onClick={closeCallback}
                >
                  Done
                  <CheckCircle2 size={17} aria-hidden="true" />
                </button>
              </div>
            )}
          </section>
        </div>
      )}
    </>
  );
}