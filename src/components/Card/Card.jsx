import React from "react";
import style from "./Card.module.css";
import { forwardRef } from "react";

export const Card = forwardRef(function Card(props, ref) {
  const { title, options, text } = props;

  return (
    <div className={style.card} ref={ref}>
      <h2>{title}</h2>
      <ul className={style.card__options}>
        {options &&
          options.map((option, index) => <li key={index}>{option}</li>)}
      </ul>
      <p>{text}</p>
    </div>
  );
});
