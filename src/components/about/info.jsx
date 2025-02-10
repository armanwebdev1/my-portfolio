import React from "react";

export default function info() {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">تجربه</h3>
        <span className="about__subtitle">بیش از 1 سال</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">تکمیل شده</h3>
        <span className="about__subtitle">بیش از 10 پروژه</span>
      </div>

      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">پشتیبانی</h3>
        <span className="about__subtitle"> آنلاین 24/7</span>
      </div>
    </div>
  );
}
