import { Fragment } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { workoutActions } from "../store/workouts";
import classes from "./addworkoutform.module.css";

const AddWorkoutForm = (props) => {
  const dispatch = useDispatch();

  const [workoutName, setWorkoutName] = useState("");

  const [exerciseName, setExerciseName] = useState("");

  const [numSets, setNumSets] = useState("");

  const [numReps, setNumReps] = useState("");

  const [exercises, setExercises] = useState([]);

  const [nameExists, setNameExists] = useState(false);

  const [blankExercise, setBlankExercise] = useState(false);

  const [blankReps, setBlankReps] = useState(false);

  const [blankSets, setBlankSets] = useState(false);

  const allWorkouts = useSelector((state) => state.workout.workouts);

  const nameOnChangeHandler = (event) => {
    setWorkoutName(event.target.value);
  };

  const exerciseOnChangeHandler = (event) => {
    setExerciseName(event.target.value);
    console.log(exercises);
  };

  const repsOnChangeHandler = (event) => {
    setNumReps(event.target.value);
  };

  const setsOnChangeHandler = (event) => {
    setNumSets(event.target.value);
  };

  const submitWorkoutHandler = (event) => {
    event.preventDefault();
    if (workoutName === "") {
      setNameExists(true);
      return;
    }
    const index = allWorkouts.findIndex((element) => {
      return element["workout"].toLowerCase() === workoutName.toLowerCase();
    });
    if (index >= 0) {
      setNameExists(true);
    } else {
      setNameExists(false);
      dispatch(
        workoutActions.addWorkout({
          workout: workoutName,
          allExercises: exercises,
        })
      );
      setWorkoutName("");
      setExercises([]);
    }
  };

  const submitExerciseHandler = (event) => {
    event.preventDefault();

    if (numReps === "" || numSets === "" || exerciseName === "") {
      setBlankReps(numReps === "");
      setBlankSets(numSets === "");
      setBlankExercise(exerciseName === "");
      return;
    }

    const singleExercise = {
      sets: numSets,
      reps: numReps,
      exercise: exerciseName,
    };

    setExercises((prevState) => [...prevState, singleExercise]);

    setBlankExercise(false);
    setBlankReps(false);
    setBlankSets(false);
    setExerciseName("");
    setNumReps("");
    setNumSets("");
  };

  const removeExerciseHandler = (sets, reps, name) => {
    let arr = [...exercises];
    for (let i = 0; i < exercises.length; i++) {
      if (
        exercises[i]["sets"] === sets &&
        exercises[i]["reps"] === reps &&
        exercises[i]["exercise"] === name
      ) {
        arr.splice(i, 1);
        break;
      }
    }
    setExercises(arr);
  };

  //STACK AT 1164PX OR 1272px

  return (
    <div className={classes.block}>
      <form className={`${classes.form} ${classes.workoutForm}`}>
        <label htmlFor="workout">Workout Name:</label>
        <input
          type="text"
          id="workout"
          className={`${nameExists ? classes.error : ""}`}
          required
          onChange={nameOnChangeHandler}
          value={workoutName}
        />
        <button onClick={submitWorkoutHandler} type="submit">
          Add Workout
        </button>
        {exercises.length !== 0 && (
          <div className={classes.exercises}>
            {exercises.map((exercise) => (
              <div className={classes.details} key={Math.random().toString()}>
                <span
                  className={classes.close}
                  onClick={removeExerciseHandler.bind(
                    null,
                    exercise["sets"],
                    exercise["reps"],
                    exercise["exercise"]
                  )}
                ></span>
                {`${exercise["sets"]} x ${exercise["reps"]} ${exercise["exercise"]}`}
              </div>
            ))}
          </div>
        )}
      </form>
      <form className={`${classes.form} ${classes.exerciseForm}`}>
        <div>
          <label htmlFor="exercise">Exercise:</label>
          <input
            type="text"
            id="exercise"
            className={`${classes.exerciseInput} ${
              blankExercise ? classes.error : ""
            }`}
            required
            onChange={exerciseOnChangeHandler}
            value={exerciseName}
          ></input>
        </div>
        <div>
          <label htmlFor="sets">Sets:</label>
          <input
            type="number"
            id="sets"
            min={1}
            required
            onChange={setsOnChangeHandler}
            className={`${blankSets ? classes.error : ""}`}
            value={numSets}
            style={{ width: "78px", marginLeft: "27px" }}
          />
        </div>
        <div>
          <label htmlFor="reps">Reps:</label>
          <input
            type="number"
            min={1}
            id="reps"
            required
            onChange={repsOnChangeHandler}
            className={`${blankReps ? classes.error : ""}`}
            value={numReps}
            style={{ width: "78px", marginLeft: "22px" }}
          />
        </div>
        <button onClick={submitExerciseHandler}>Add Exercise</button>
      </form>
    </div>
  );
};

export default AddWorkoutForm;
