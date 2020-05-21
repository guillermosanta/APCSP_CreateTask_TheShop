import React from "react";
import style from "./ShopPage.module.css";

import Bananas from "./../../../../public/Images/BANANA.png";
import Apple from "./../../../../public/Images/APPLE.png";
import Grapes from "./../../../../public/Images/GRAPES.png";
import Oranges from "./../../../../public/Images/ORANGES.png";
export default class ShopPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      Bananas: 0,
      Apples: 0,
      Grapes: 0,
      Oranges: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(props) {
    console.log("onclick run");
    this.props.complete({
      Bananas: this.state.Bananas,
      Apples: this.state.Apples,
      Grapes: this.state.Grapes,
      Oranges: this.state.Oranges
    });
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log("handleChange");
  }

  render() {
    return (
      <div className={style.ShopPage}>
        <div className={style.bananas}>
          <img src={Bananas} alt="Shop" />
          <h1> Bananas </h1>
          <p> $ 0,18 each </p>
          <form>
            <label for="quantity"> Quantity: </label>
            <input
              type="number"
              name="Bananas"
              min="0"
              max="100"
              step="1"
              onChange={this.handleChange}
              value={this.state.Bananas}
            />
          </form>
        </div>
        <div className={style.Apple}>
          <img src={Apple} alt="Apple" />
          <h1> Apples </h1>
          <p> $ 0,22 each </p>
          <form>
            <label for="quantity"> Quantity: </label>
            <input
              type="number"
              name="Apples"
              min="0"
              max="100"
              step="1"
              onChange={this.handleChange}
              value={this.state.Apples}
            />
          </form>
        </div>
        <div className={style.Grapes}>
          <img src={Grapes} alt="Grapes" />
          <h1> Grapes </h1>
          <p> $ 0,50 for 50 grapes </p>
          <form>
            <label for="quantity"> Quantity: </label>
            <input
              type="number"
              name="Grapes"
              min="0"
              max="100"
              step="1"
              onChange={this.handleChange}
              value={this.state.Grapes}
            />
          </form>
        </div>
        <div>
          <img src={Oranges} alt="Oranges" />
          <h1> Grapes </h1>
          <p> $ 1,50 each </p>
          <form>
            <label for="quantity"> Quantity: </label>
            <input
              type="number"
              name="Oranges"
              min="0"
              max="100"
              step="1"
              onChange={this.handleChange}
              value={this.state.Oranges}
            />
          </form>
        </div>
        <button onClick={this.handleClick}> Done! </button>
      </div>
    );
  }
}
