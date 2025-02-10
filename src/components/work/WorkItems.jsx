import React from "react";

export default function WorkItems({ item }) {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a href={item.link} className="work__button" target="_blank">
        دمو پروژه <i className="bx bx-left-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
}
