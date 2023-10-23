import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import Classes from "./Header.module.css";
import { HeaderCartButton } from "./HeaderCartButton";
export const Header = (props) => {
  return (
    <Fragment>
      <header className={Classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onCartOpen} />
      </header>
      <div className={Classes["main-image"]}>
        <img src={mealsImage} alt="Table full of food" />
      </div>
    </Fragment>
  );
};
