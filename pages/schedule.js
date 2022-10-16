import { Fragment } from "react";
import MetaHead from "../components/headmeta";
import BigHeading from "../components/ui/bigheading";
import MainCard from "../components/ui/maincard";
import MainHeading from "../components/ui/mainheading";
import Carousel from "../components/ui/carousel";
import Modal from "../components/ui/modal";
import Backdrop from "../components/ui/backdrop";
import { useSelector, useDispatch } from "react-redux";
import { workoutActions } from "../store/workouts";
import HorizontalScroll from "../components/ui/horizontalscroll";
import classes from "../styles/schedule.module.css"
import { editScheduleActions } from "../store/editschedule";

const Home = (props) => {
  const dispatch = useDispatch();

  const modalOn = useSelector((state) => state.workout.showModal);

  const closeModalHandler = () => {
    dispatch(workoutActions.closeModal());
  };

  const editing = useSelector((state) => state.editSchedule.editSchedule);
  const daysWorkouts = useSelector((state) => state.workout.daysToWorkouts);
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const noWorkouts = (
    <p
      style={{
        color: "grey",
        margin: "40px 0",
        fontSize: "1.2rem",
        fontStyle: "italic",
      }}
    >
      No workouts on this day
    </p>
  );

  return (
    <Fragment>
      <MetaHead metacontent="Schedule">Your Schedule | Gym Journal</MetaHead>
      <MainCard>
        <BigHeading edit={true} done={editing}>
          Schedule
        </BigHeading>
        {days.map((day, index) =>
          daysWorkouts[day].length ? (
            <Fragment key={index}>
              <MainHeading edit={editing} day={day}>
                {day}
              </MainHeading>
              <HorizontalScroll key={index} all={false} day={day} />
            </Fragment>
          ) : (
            <Fragment key={index}>
              <MainHeading edit={editing} day={day}>
                {day}
              </MainHeading>
              <p className={classes.blurb}>
                No workouts on this day
              </p>
            </Fragment>
          )
        )}
      </MainCard>
      <Modal show={modalOn} closed={closeModalHandler} />
      {modalOn ? <Backdrop show /> : null}
    </Fragment>
  );
};

export default Home;
