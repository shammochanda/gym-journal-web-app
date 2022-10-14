import React from "react";

import classes from "./backdrop.module.css";

const Backdrop = (props) => {
  const cssClasses = [
    "Backdrop",
    props.show ? "BackdropOpen" : "BackdropClosed",
  ];

  return (
    <div
      className={`${classes.Backdrop} ${
        props.show ? classes.BackdropOpen : classes.BackdropClosed
      }`}
    ></div>
  );
};

export default Backdrop;
