import React from "react";
import { Button } from "../Button/Index";
import style from "./header.module.css";
import homeIcon from "../../assets/icon/home.svg";
import profilIcon from "../../assets/icon/profil.svg";
export const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.headerLeft}>
        <div className={style.fastHomeIcon}>
          <img src={homeIcon} alt="" />
          <span className={`${style.spanFast} ${style.span}`}>fast</span>
          <span className={`${style.spanHome} ${style.span}`}>home</span>
        </div>

        <ul>
          <li>For Sale</li>
          <li>For Rent</li>
          <li>Daily Rental</li>
          <li>Projects</li>
        </ul>
      </div>

      <div className={style.headerRight}>
        <Button text="Advertise" redBtn />
        <img src={profilIcon} alt="" />
      </div>
    </div>
  );
};
