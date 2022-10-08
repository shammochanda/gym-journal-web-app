import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { workoutActions } from "../store/workouts";
import classes from "./addworkoutform.module.css";

const AddWorkoutForm = (props) => {
  const dispatch = useDispatch();

  const [workoutName, setWorkoutName] = useState("");

  const [nameExists, setNameExists] = useState(false);

  const allWorkouts = useSelector((state) => state.workout.workouts);

  const nameOnChangeHandler = (event) => {
    setWorkoutName(event.target.value);
  };

  const submitHandler = (event) => {

    event.preventDefault();

    const index = allWorkouts.findIndex(element => {
      return element.toLowerCase() === workoutName.toLowerCase();
    });
    if (index >= 0) {
      setNameExists(true);
    } else {
      setNameExists(false);
      dispatch(workoutActions.addWorkout(workoutName));
      setWorkoutName('');
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
        onChange={nameOnChangeHandler}
        value={workoutName}
      />
      <button onClick={submitHandler}>Submit</button>
    </form>
  );
};

export default AddWorkoutForm;
