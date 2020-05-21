import React from "react";
import Shop from "./../../../../public/Images/paris-shop-4707955_960_720.webp";
import style from "./DisplayResults.module.css";
export default function DisplayResults(props) {
  return (
    <div className={style.DisplayResults}>
      <h1> Your total prize was of $ {props.totalPrize} </h1>
      <img src={Shop} alt="shop" />
    </div>
  );
}
