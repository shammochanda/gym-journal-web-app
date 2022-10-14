import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteModal from "./deletemodal";
import Backdrop from "./backdrop";
import CSSTransition from "react-transition-group/CSSTransition";

import classes from "./modal.module.css";

const animationTiming = {
  enter: 600,
  exit: 10,
};

const Modal = (props) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const forModal = useSelector((state) => state.workout.modalFill);

  const daysToWorkouts = useSelector((state) => state.workout.daysToWorkouts);

  const [deleting, setDeleting] = useState(false);

  const [warning, setWarning] = useState(false);

  const onDeleteHandler = () => {
    for (let i = 0; i < days.length; i++) {
      for (let j = 0; j < daysToWorkouts[days[i]].length; j++) {
        if (daysToWorkouts[days[i]][j]["workout"] === forModal["workout"]) {
          setWarning(true);
          break;
        }
      }
    }
    setDeleting(true);
  };

  const closeDeleteHandler = () => {
    setDeleting(false);
    setWarning(false);
  };

  return (
    //mount on enter and unmount on exit
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      classNames={{
        enter: "",
        enterActive: `${classes.ModalOpen}`,
        exit: "",
        exitActive: "",
      }}
    >
      <div className={classes.Modal}>
        <img src={props.imglink} alt={props.alt}></img>
        <div className={classes.textboxFull}>
          <h1>{forModal["workout"] || "Placeholder"}</h1>
          {forModal["exercises"].map((exercise) => (
            <div key={Math.random().toString()}>
              {`- ${exercise["sets"]} x ${exercise["reps"]} ${exercise["exercise"]}`}
            </div>
          ))}
        </div>
        <div className={classes.buttons}>
          <button className={classes.closeBtn} onClick={props.closed}>
            Close
          </button>
          <button className={classes.deleteBtn} onClick={onDeleteHandler}>
            Delete
          </button>
        </div>
        {deleting && (
          <DeleteModal
            title={forModal["workout"]}
            closeModal={closeDeleteHandler}
            closeAll={props.closed}
            warning={warning}
          />
        )}
        {/* {
            warning && <DeleteModal title={forModal["workout"]}
            closeModal={closeDeleteHandler} warning={warning}/>
        } */}
        {deleting && <Backdrop show />}
      </div>
      {/* <Modal show={modalOn} closed={closeModalHandler} />
      {modalOn ? <Backdrop show /> : null} */}
    </CSSTransition>
  );
};

//the enterActive/exitActive classes are merged with the classes in the div

//if the className is just className='fade-slide', the class used on enter will be 'fade-slide-enter', classed used on enter active will be 'fade-slide-enter-active'

export default Modal;
