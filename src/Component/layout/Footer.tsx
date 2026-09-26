
import Link from "next/link";
import { navigation } from "../../config/navigation";
// const quickLinks = [
//   { label: "Home", href: "#home" },
//   { label: "About", href: "#about" },
//   { label: "Projects", href: "#projects" },
//   { label: "Amenities", href: "#amenities" },
//   { label: "Location", href: "#location" },
//   { label: "Contact", href: "#contact" },
// ];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Main Footer */}
        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand">
            <Link
              href="#home"
              className="brand footer-brand-link"
              aria-label="ParamShree home"
            >
              <svg
                className="brand-mark footer-brand-mark"
                viewBox="0 0 48 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M24 52V5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
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
                <span className="brand-name">
                  PARAMSHREE
                </span>
                <span className="brand-tagline">
                  REAL ESTATE · CHANNEL PARTNER
                </span>
              </span>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>

            <ul className="footer-links">
              {navigation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div className="footer-column">
            <h3 className="footer-heading">Our Partners</h3>

            <ul className="footer-links">
              <li>
                <span>Soul Agro Farms Pvt. Ltd.</span>
              </li>
              <li>
                <span>ETH Infra Pvt. Ltd.</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-column">
            <h3 className="footer-heading">Follow Us</h3>

            <p className="footer-social-note">
              Stay connected with ParamShree.
            </p>

            {/* Add verified social media URLs here
                once provided by the client. */}
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>
            © {currentYear} ParamShree. All rights reserved.
          </p>

          <p className="footer-credits">
            A Channel Partner of Soul Agro Farms Pvt. Ltd.
            <span className="footer-credit-divider">|</span>
            Powered by ETH Infra Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}