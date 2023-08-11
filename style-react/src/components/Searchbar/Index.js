import React from "react";
import style from "./searchbar.module.css";
import searchbtn from "../../assets/icon/lupa.svg";
export const Searchbar = () => {
  return (
    <div className={style.searchbar}>
      <h1 className={style.h1}>Your dream house is here</h1>
      <div className={style.inputContainer}>
        <input className={style.input} />
        <img src={searchbtn} alt="" className={style.searchBtn} />
      </div>
    </div>
  );
};
