import React from "react";
import style from "./button.module.css";

export const Button = ({ text, redBtn, whiteBtn, cardSecondRed }) => {
  return (
    <div
      className={
        redBtn
          ? style.redBtn
          : whiteBtn
          ? style.whiteBtn
          : cardSecondRed
          ? style.cardSecondRed
          : style.whiteRedBtn
      }
    >
      {text}
    </div>
  );
};
