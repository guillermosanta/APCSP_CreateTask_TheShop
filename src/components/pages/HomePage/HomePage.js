import React from "react";
import Shop from "./../../../../public/Images/paris-shop-4707955_960_720.webp";

export default function HomePage(props) {
  return (
    <div className="HomePage">
      <h1>Welcome to the shop!</h1>
      <h2>Do you want to buy something?</h2>
      <img src={Shop} alt="Shop" />
      <button onClick={() => props.Continue(true)} className="Yes">
        {" "}
        Yes for sure!{" "}
      </button>
      <button onClick={() => props.Continue(false)} className="No">
        {" "}
        No thanks{" "}
      </button>
    </div>
  );
}
