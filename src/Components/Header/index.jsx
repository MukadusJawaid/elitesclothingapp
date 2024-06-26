// components/Header.js
import React from "react";
import classes from "./Header.module.css";
import Button from "../Button";
import { CircleUserRound, ShoppingCart } from "lucide-react";

const Header = ({ isLoggedIn }) => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        {isLoggedIn ? (
          <div className={classes.loggedInHeader}>
            <div className={classes.logo}>Elite Mens Clothing</div>
            <div className={classes.icons}>
              <ShoppingCart color="white" />
              <CircleUserRound color="white" />
            </div>
          </div>
        ) : (
          <div className={classes.loggedOutHeader}>
            <div className={classes.brand}>Elite Mens Clothing</div>
            <div className={classes.actions}>
              <Button className={classes.button}>View Products</Button>
              <Button
                className={classes.button}
                onClick={() => router?.push("/login")}
              >
                Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
