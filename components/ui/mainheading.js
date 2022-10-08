import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { workoutActions } from "../../store/workouts";
import classes from "./mainheading.module.css";
import Add from "../icons/add";

const MainHeading = (props) => {
  const dispatch = useDispatch();

  const [workoutName, setWorkoutName] = useState("");
  const [nameExists, setNameExists] = useState(false);

  const dayWorkouts =
    props.day &&
    useSelector((state) => state.workout.daysToWorkouts[props.day]);
  const allWorkouts = useSelector((state) => state.workout.workouts);

  const nameOnChangeHandler = (event) => {
    setWorkoutName(event.target.value);
    if (props.search) {
      dispatch(workoutActions.updateSearchTerm(event.target.value))
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const indexAll = allWorkouts.findIndex(element => {
      return element.toLowerCase() === workoutName.toLowerCase();
    });
    const indexDay = dayWorkouts.findIndex(element => {
      return element.toLowerCase() === workoutName.toLowerCase();
    });
    if (indexDay >= 0) {
      setNameExists(true);
    } else if (indexAll < 0) {
      setNameExists(true);
    } else {
      setNameExists(false);
      dispatch(workoutActions.addWorkoutToDay({day:props.day, workout:workoutName}));
      setWorkoutName("");
    }
  };

  return (
    <h1 className={classes.innerheader}>
      <span className={classes.mainheading}>{props.children}</span>
      {props.search && (
        <input
          type="search"
          placeholder="Search..."
          className={classes.search}
          value={workoutName}
          onChange={nameOnChangeHandler}
        />
      )}
      {props.edit && (
        <span className={classes.edit}>
          <input
            type="search"
            placeholder="Add a Workout..."
            className={`${classes.search} ${nameExists && classes.error}`}
            required
            value={workoutName}
            onChange={nameOnChangeHandler}
          />
          <button className={classes.button} onClick={submitHandler}>
            <Add />
          </button>
        </span>
      )}
    </h1>
  );
};

export default MainHeading;
