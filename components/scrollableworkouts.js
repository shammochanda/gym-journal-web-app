import { useSelector } from "react-redux";
import MiniCard from "./ui/minicard";
import { workoutActions } from "../store/workouts";
import { editScheduleActions } from "../store/editschedule";
import classes from "./scrollableworkouts.module.css";

const ScrollableWorkout = () => {
  const allWorkouts = useSelector((state) => state.workout.workouts);
  const searchTerm = useSelector((state) => state.workout.searchTerm);

  return (
    <div className={classes.scrollable}>
      {allWorkouts
        .filter((workout) =>
          workout["workout"].toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((slideCard, index) => (
          <div key={slideCard["workout"]}>
            <MiniCard
              key={slideCard["workout"]}
              title={slideCard["workout"]}
              subtract={false}
              exercises={slideCard["allExercises"]}
            />{" "}
          </div>
        ))}
    </div>
  );
};

export default ScrollableWorkout;
