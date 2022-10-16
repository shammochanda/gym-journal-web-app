import { useSelector } from "react-redux";
import MiniCard from "./ui/minicard";
import { workoutActions } from "../store/workouts";
import { editScheduleActions } from "../store/editschedule";
import { useMediaQuery } from "react-responsive";
import classes from "./scrollableworkouts.module.css";
import React from "react";

const ScrollableWorkout = () => {
  const allWorkouts = useSelector((state) => state.workout.workouts);
  const searchTerm = useSelector((state) => state.workout.searchTerm);

  // let change3 = useMediaQuery({ query: "(max-width: 1645px)" });

  // let change2 = useMediaQuery({ query: "(max-width: 1270px)" });

  // let change1 = useMediaQuery({ query: "(max-width: 780px)" });

  return (
    <div className={classes.scrollable}>
      <div
        className={classes.cardHolder}
        // key={slideCard["workout"]}
        // style={{ "--col-num": 2 }}
      >
        {allWorkouts
          .filter((workout) =>
            workout["workout"].toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((slideCard, index) => (
            <MiniCard
              key={slideCard["workout"]}
              title={slideCard["workout"]}
              subtract={false}
              exercises={slideCard["allExercises"]}
            />
          ))}
      </div>
    </div>
  );
};

export default ScrollableWorkout;
{
  /* <MiniCard
              key={slideCard["workout"]}
              title={slideCard["workout"]}
              subtract={false}
              exercises={slideCard["allExercises"]}
            />{" "}
            <MiniCard
              key={slideCard["workout"]}
              title={slideCard["workout"]}
              subtract={false}
              exercises={slideCard["allExercises"]}
            />{" "}
            <MiniCard
              key={slideCard["workout"]}
              title={slideCard["workout"]}
              subtract={false}
              exercises={slideCard["allExercises"]}
            />{" "}
            <MiniCard
              key={slideCard["workout"]}
              title={slideCard["workout"]}
              subtract={false}
              exercises={slideCard["allExercises"]}
            />{" "} */
}
