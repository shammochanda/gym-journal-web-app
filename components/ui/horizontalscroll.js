import { useSelector } from "react-redux";
import classes from "./horizontalscroll.module.css";
import MiniCard from "./minicard";

const HorizontalScroll = (props) => {
  const allWorkouts = useSelector((state) => state.workout.workouts);

  const dayWorkouts =
    !props.all &&
    useSelector((state) => state.workout.daysToWorkouts[props.day]);

  const searchTerm = useSelector((state) => state.workout.searchTerm);

  const editing = useSelector((state) => state.editSchedule.editSchedule);

  return (
    <div className={classes.horizontalScroll}>
      {props.all
        ? allWorkouts
            .filter((workout) =>
              workout["workout"]
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            )
            .map((slideCard, index) => (
              <MiniCard
                key={slideCard["workout"]}
                title={slideCard["workout"]}
                subtract={editing}
                exercises={slideCard["allExercises"]}
                inline={true}
              />
            ))
        : dayWorkouts.map((slideCard, index) => (
            <MiniCard
              key={slideCard["workout"]}
              title={slideCard["workout"]}
              subtract={editing}
              day={props.day}
              exercises={slideCard["allExercises"]}
              inline={true}
            />
          ))}
    </div>
  );
};

export default HorizontalScroll;
