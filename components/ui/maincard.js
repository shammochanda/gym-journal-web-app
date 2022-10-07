import { Fragment } from "react";
import classes from "./maincard.module.css";

const MainCard = (props) => {
  return <section className={classes.maincard}>{props.children}</section>;
};

export default MainCard;
