import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { workoutActions } from "../store/workouts";
import classes from "./addworkoutform.module.css";

const AddWorkoutForm = (props) => {
  const dispatch = useDispatch();
  const workoutNameInputRef = useRef();

  const [nameExists, setNameExists] = useState(false);

  const allWorkouts = useSelector((state) => state.workout.workouts);

  const submitHandler = (event) => {
    event.preventDefault();
    if (allWorkouts.includes(workoutNameInputRef.current.value)) {
      setNameExists(true);
    } else {
      setNameExists(false);
      dispatch(workoutActions.addWorkout(workoutNameInputRef.current.value));
      workoutNameInputRef.current.value = "";
    }
  };

  return (
    <form className={classes.form}>
      <label htmlFor="workout">Workout Name:</label>
      <input
        type="text"
        id="workout"
        className={nameExists && classes.error}
        required
        ref={workoutNameInputRef}
      />
      <button onClick={submitHandler}>Submit</button>
    </form>
  );
};

export default AddWorkoutForm;
