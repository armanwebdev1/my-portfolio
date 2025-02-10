import React from "react";
import "./skills.css";
import Frontend from "./Frontend";

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">مهارت‌ها</h2>
      <span className="section__subtitle">سطح فنی من</span>

      <div className="skills__container container grid">
        <Frontend />
      </div>
    </section>
  );
}
