import classes from "./bigheading.module.css";

const BigHeading = (props) => {
  //   return <h1 className={classes.bigheading}>{props.children}</h1>;
  return (
    <h1 className={classes.outerheader}>
      <span className={classes.bigheading}>{props.children}</span>
      {props.edit && !props.done && (
        <button className={classes.button}>Edit</button>
      )}
      {props.edit && props.done && (
        <button className={classes.button}>Done</button>
      )}
    </h1>
  );
};

export default BigHeading;
