import React, { useState } from "react";
import "./services.css";

export default function Services() {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">خدمات</h2>
      <span className="section__subtitle">خدماتی که ارائه میدهم</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              تجربه وب <br /> پویا
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            بیشتر بدانید
            <i className="uil uil-arrow-left services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">تجربه وب پویا</h3>
              <p className="services__modal-description">
                خدمات با بیش از 1 سال تجربه. ارائه کار با کیفیت به مشتریان و
                شرکت‌ها
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    رابط‌های تعاملی برای کاربران مدرن.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    تعامل بی‌وقفه با کاربران
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    طراحی‌های مناسب برای تمامی دستگاه‌ها.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    تعامل خیلی خوب با کاربران.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    یکپارچه‌سازی داده‌ها بدون درنگ.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              افزایش <br /> حضور در وب
            </h3>
          </div>

          <span onClick={() => toggleTab(2)} className="services__button">
            بیشتر بدانید
            <i className="uil uil-arrow-left services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">افزایش حضور در وب</h3>
              <p className="services__modal-description">
                خدمات با بیش از 1 سال تجربه. ارائه کار با کیفیت به مشتریان و
                شرکت‌ها.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    افزایش بازدید آنلاین شما.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    بهینه‌سازی عملکرد و سرعت.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">توسعه سازگار با SEO.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    راه‌حل‌های سفارشی برای نیازهای خاص.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    تغییر و تحول در ردپای دیجیتال شما.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              خدمات <br /> فرانت اند
            </h3>
          </div>

          <span onClick={() => toggleTab(3)} className="services__button">
            بیشتر بدانید
            <i className="uil uil-arrow-left services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">خدمات فرانت اند</h3>
              <p className="services__modal-description">
                خدمات با بیش از 1 سال تجربه. ارائه کار با کیفیت به مشتریان و
                شرکت‌ها
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    فناوری‌های پیشرفته فرانت‌اند.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    طراحی UI/UX پیشرفته و دقیق.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    سازگاری با تمام مرورگر‌ها.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    راه‌حل‌های مناسب فرانت اند.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
