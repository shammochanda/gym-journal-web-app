import { useDispatch, useSelector } from "react-redux";
import { editScheduleActions } from "../../store/editschedule";
import classes from "./bigheading.module.css";

const BigHeading = (props) => {

  const dispatch = useDispatch();

  const editHandler = () => {
    dispatch(editScheduleActions.editOn());

  }

  const doneHandler = () => {
    dispatch(editScheduleActions.editOff());

  }

  return (
    <h1 className={classes.outerheader}>
      <span className={classes.bigheading}>{props.children}</span>
      {props.edit && !props.done && (
        <button className={classes.button} onClick={editHandler}>Edit</button>
      )}
      {props.edit && props.done && (
        <button className={classes.button} onClick={doneHandler}>Done</button>
      )}
    </h1>
  );
};

export default BigHeading;
