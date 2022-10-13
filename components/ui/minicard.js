import { useDispatch, useSelector } from "react-redux";
import { workoutActions } from "../../store/workouts";
import classes from "./minicard.module.css";
import Subtract from "../icons/subtract";

const MiniCard = (props) => {
  const dispatch = useDispatch();

  const dayWorkouts =
    props.day &&
    useSelector((state) => state.workout.daysToWorkouts[props.day]);

  const subtractHandler = () => {
    const index = dayWorkouts.indexOf(props.title);
    dispatch(
      workoutActions.removeWorkoutFromDay({ day: props.day, workout: index })
    );
  };

  return (
    <div className={classes.minicard}>
      <img src={props.imglink} alt={props.alt}></img>
      {props.subtract ? (
        <div className={classes.textbox}>
          <div className={classes.text}>
            <h1>{props.title || "Placeholder"}</h1>
            {props.exercises.map((exercise) => (
              <div key={Math.random().toString()}>
                {`${exercise["sets"]} x ${exercise["reps"]} ${exercise["exercise"]}`}
              </div>
            ))}
            {/* <div>-Some Exercise </div>
            <div>-Some Exercise</div>
            <div>-Some Exercise</div>
            <div>-Some Exercise</div>
            <div>-Some Exercise</div>
            <div>-Some Exercise</div>
            <div>-Some Exercise</div>
            <div>-Some Exercise</div> */}
          </div>
          <div className={classes.subtract}>
            <button className={classes.button} onClick={subtractHandler}>
              <Subtract />
            </button>
          </div>
        </div>
      ) : (
        <div className={classes.textboxFull}>
          <h1>{props.title || "Placeholder"}</h1>
          {props.exercises.map((exercise) => (
              <div key={Math.random().toString()}>
                {`${exercise["sets"]} x ${exercise["reps"]} ${exercise["exercise"]}`}
              </div>
            ))}
          {/* <div>-Some Exercise </div>
          <div>-Some Exercise</div>
          <div>-Some Exercise</div>
          <div>-Some Exercise</div>
          <div>-Some Exercise</div>
          <div>-Some Exercise</div>
          <div>-Some Exercise</div>
          <div>-Some Exercise</div> */}
        </div>
      )}
    </div>
  );
};

export default MiniCard;
