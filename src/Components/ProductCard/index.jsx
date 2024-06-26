import React from "react";
import classes from "./ProductCard.module.css";
import Image from "next/image";

export default function ProductCard({ data, isLoggedIn }) {
  console.log(data);
  return (
    <div className={classes.card}>
      <div className={classes.imageDiv}>
        <Image fill src={data?.image} alt="Product Name" />
      </div>
      <div className={classes.info}>
        <h2 className={classes.title}>{data?.title}</h2>
        <p className={classes.description}>{data?.description}</p>
        <div className={classes.footer}>
          <span className={classes.price}>{data?.price}</span>
          {isLoggedIn && (
            <button className={classes.button}>Add to Cart</button>
          )}
        </div>
      </div>
    </div>
  );
}
