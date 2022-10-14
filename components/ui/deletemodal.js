import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { workoutActions } from "../../store/workouts";
import classes from "./deletemodal.module.css";

const DeleteModal = (props) => {
  const dispatch = useDispatch();

  const forModal = useSelector((state) => state.workout.modalFill);

  const onDeleteWorkoutHandler = () => {
    dispatch(workoutActions.removeWorkout(props.title));
    props.closeAll();
  };

  return (
    <div className={classes.Modal}>
      {props.warning ? (
        <span> Cannot delete workout in schedule </span>
      ) : (
        <span>
          {" "}
          Are you sure you want to delete <b>{props.title}</b>?{" "}
        </span>
      )}
      {props.warning ? (
        <div>
          <button onClick={props.closeModal}>Close</button>
        </div>
      ) : (
        <div>
          <button onClick={onDeleteWorkoutHandler}>Yes</button>
          <button onClick={props.closeModal}>No</button>
        </div>
      )}
      {/* <div>
        <button>Yes</button>
        <button onClick={props.closeModal}>No</button>
      </div> */}
    </div>
  );
};

export default DeleteModal;
