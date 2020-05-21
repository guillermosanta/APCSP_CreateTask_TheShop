import React from "react";
import Shop from "./../../../../public/Images/paris-shop-4707955_960_720.webp";
import style from "./NoPage.module.css";

export default function NoPage() {
  return (
    <div className={style.NoPage}>
      <h1> Don’t forget to come back </h1>
      <img className={style.shopy} src={Shop} alt="Shop" />
      <button onClick={() => location.reload()} className={style.Great}>
        {" "}
        Great!{" "}
      </button>
    </div>
  );
}
