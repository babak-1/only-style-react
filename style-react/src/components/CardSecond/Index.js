import React from "react";
import style from "./cardsecond.module.css";
import { Button } from "../Button/Index";
export const CardSecond = ({
  headerTxt,
  cardParag,
  text,
  whiteBtn,
  cardSecondRed,
  cardPic,
  cardParag2,
  whiteRedBtn,
}) => {
  return (
    <div className={style.card}>
      <div
        className={`${whiteRedBtn ? style.cardAlternative : style.cardLeft}`}
      >
        <div className={style.cardLeftTop}>
          <h2 className={style.cardHeader}>{headerTxt}</h2>
          <p className={style.cardParag}>{cardParag}</p>
          <p className={style.cardParag}>{cardParag2}</p>
        </div>
        <Button
          text={text}
          whiteBtn={whiteBtn}
          whiteRedBtn={whiteBtn}
          cardSecondRed={cardSecondRed}
        />
      </div>
      <img src={cardPic} alt="" />
    </div>
  );
};
