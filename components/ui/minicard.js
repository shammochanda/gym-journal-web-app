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
    // const index = dayWorkouts.indexOf(props.title);
    dispatch(
      workoutActions.removeWorkoutFromDay({day: props.day, workout: props.title})
    );
  };

  const openModalHandler = () => {
    if (!props.subtract) {
      dispatch(
        workoutActions.openModal({
          workout: props.title,
          exercises: props.exercises,
        })
      );
    }
  };

  // props.subtract ? null :

  return (
    <div className={`${classes.minicard} ${props.subtract ? '': classes.nohover} ${props.inline ? classes.makeInline : ''}`} onClick={openModalHandler}>
      <img src={props.imglink} alt={props.alt}></img>
      {props.subtract ? (
        <div className={classes.textbox}>
          <div className={classes.text}>
            <h1>{props.title || "Placeholder"}</h1>
            {props.exercises.map((exercise) => (
              <div key={Math.random().toString()}>
                {`- ${exercise["sets"]} x ${exercise["reps"]} ${exercise["exercise"]}`}
              </div>
            ))}
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
              {`- ${exercise["sets"]} x ${exercise["reps"]} ${exercise["exercise"]}`}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MiniCard;
