import { Fragment } from "react";
import Image from "next/image";
import classes from "./minicard.module.css";

const MiniCard = (props) => {
  return (
    <div className={classes.minicard}>
      <img src={props.imglink} alt={props.alt}></img>
      <div className={classes.textbox}>
        <h1>{props.title || "Placeholder"}</h1>
        <div>-Some Exercise </div>
        <div>-Some Exercise</div>
        <div>-Some Exercise</div>
        <div>-Some Exercise</div>
        <div>-Some Exercise</div>
        <div>-Some Exercise</div>
        <div>-Some Exercise</div>
        <div>-Some Exercise</div>
      </div>
    </div>
  );
};

export default MiniCard;
