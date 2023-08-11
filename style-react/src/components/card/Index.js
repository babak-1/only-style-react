import React from "react";
import style from "./card.module.css";

import cardIcon1 from "../../assets/icon/cardIcon1.svg";
import cardIcon2 from "../../assets/icon/cardIcon2.svg";
import cardIcon3 from "../../assets/icon/cardIcon3.svg";

export const Card = ({
  price,
  forWhat,
  city,
  street,
  date,
  roomCount,
  floor,
  square,
  cardPic,
}) => {
  return (
    <div className={style.card}>
      <img src={cardPic} alt="" className={style.cardImg} />
      <h2 className={style.cardPrice}>{price} $</h2>
      <h3 className={style.cardSale}>Apartment for {forWhat}</h3>
      <h5 className={style.cardCity}>{`${city} ${street}`}</h5>

      <h5 className={style.cardDate}>{date}</h5>

      <div className={style.cardBottom}>
        <img src={cardIcon1} alt="" />
        <span className={style.cardSpan}>{roomCount}</span>
        <img src={cardIcon2} alt="" />
        <span className={style.cardSpan}>{floor}</span>
        <img src={cardIcon3} alt="" />
        <span className={`${style.cardSpan} ${style.squareSpan}`}>
          {square} m <sup>2</sup>
        </span>
      </div>
    </div>
  );
};
