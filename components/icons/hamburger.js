import { Fragment } from "react";
import classes from './hamburger.module.css'

const Hamburger = (props) => {

  return (
    <Fragment>
      <div className={`${props.toggle && classes.change} ${classes.bar1}`}></div>
      <div className={`${props.toggle && classes.change} ${classes.bar2}`}></div>
      <div className={`${props.toggle && classes.change} ${classes.bar3}`}></div>
    </Fragment>
  );
};

export default Hamburger;
