
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import "../../css/GetInTouch.css";
export default function GetInTouch() {
  return (
    <section className="get-in-touch">
      <div className="get-in-touch__container">
        <div className="get-in-touch__content">
          <span className="get-in-touch__eyebrow">
            GET IN TOUCH
          </span>

          <h2>
            Let’s Start a Conversation
          </h2>

          <p>
            Have a project in mind or want to know more?
            Connect with our team to make an enquiry.
          </p>

          <Link
            href="/contact"
            className="get-in-touch__button"
          >
            Send Enquiry
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
