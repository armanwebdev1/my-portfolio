import React from "react";
import "./work.css";
import Works from "./Works";

export default function Work() {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">نمونه‌کارها</h2>
      <span className="section__subtitle">کارهای اخیر من</span>

      <Works />
    </section>
  );
}
