import classes from "./mainheading.module.css";
import Add from "../icons/add";

const MainHeading = (props) => {
  return (
    <h1 className={classes.innerheader}>
      <span className={classes.mainheading}>{props.children}</span>
      {props.search && (
        <input
          type="search"
          placeholder="Search..."
          className={classes.search}
        />
      )}
      {props.edit && (
        <span className={classes.edit}>
          <input
            type="search"
            placeholder="Add a Workout..."
            className={classes.search}
          />
          <button className={classes.button}>
            <Add />
          </button>
        </span>
      )}
    </h1>
  );
};

export default MainHeading;
