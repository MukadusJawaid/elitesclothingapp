// HeroSection.js (or any suitable component name)
import React from "react";
import classes from "./HeroSection.module.css"; // Import your CSS classes
import Image from "next/image";
import Button from "@/Components/Button";
const HeroSection = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.content}>
        <div className={classes.text}>
          <h1>Welcome to Elite Mens Clothing</h1>
          <div className={classes.para}>
            <p>{`Discover premium men's fashion tailored to perfection.`}</p>
          </div>
          <Button className={classes.button}>Explore Products</Button>
        </div>
        <div className={classes.imageContainer}>
          <Image
            fill
            src={"/images/heroSectionBg.png"}
            alt="Elite Mens Clothing"
            className={classes.image}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
