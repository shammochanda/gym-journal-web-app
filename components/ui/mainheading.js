import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { workoutActions } from "../../store/workouts";
import { editScheduleActions } from "../../store/editschedule";
import classes from "./mainheading.module.css";
import Add from "../icons/add";

const MainHeading = (props) => {
  const dispatch = useDispatch();

  const [workoutName, setWorkoutName] = useState("");
  const [nameExists, setNameExists] = useState(false);

  let editing = useSelector((state) => state.editSchedule.editSchedule);

  useEffect(() => {
    if (!editing & !props.search) {
      setWorkoutName("");
      setNameExists(false);
    }
  }, [editing]);

  const dayWorkouts = useSelector((state) => state.workout.daysToWorkouts[props.day]);
  const allWorkouts = useSelector((state) => state.workout.workouts);

  const nameOnChangeHandler = (event) => {
    setWorkoutName(event.target.value);
    if (props.search) {
      dispatch(workoutActions.updateSearchTerm(event.target.value));
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const indexAll = allWorkouts.findIndex((element) => {
      return element["workout"].toLowerCase() === workoutName.toLowerCase();
    });
    const indexDay = dayWorkouts.findIndex((element) => {
      return element["workout"].toLowerCase() === workoutName.toLowerCase();
    });
    if (indexDay >= 0) {
      setNameExists(true);
    } else if (indexAll < 0) {
      setNameExists(true);
    } else {
      setNameExists(false);
      dispatch(
        workoutActions.addWorkoutToDay({
          day: props.day,
          workout: allWorkouts[indexAll],
        })
      );
      setWorkoutName("");
    }
  };

  return (
    <h1 className={`${classes.innerheader} ${props.edit ? classes.innerheaderedit : ''}`}>
      <span className={`${classes.mainheading} ${props.edit ? classes.mainheadingedit : ''}`} style={props.style}>{props.children}</span>
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
          <form>
            <input
              type="search"
              placeholder="Add a Workout..."
              className={`${classes.search} ${nameExists && classes.error}`}
              required
              value={workoutName}
              onChange={nameOnChangeHandler}
            />
            <button className={classes.button} onClick={submitHandler}>
              {/* <Add /> */}
            </button>
          </form>
        </span>
      )}
      {/* {
        props.remove && (
          <button className={classes.button} onClick={submitHandler}>
              Remove
            </button>
        )
      } */}
    </h1>
  );
};

export default MainHeading;
