import { Fragment } from "react";
import MetaHead from "../components/headmeta";
import BigHeading from "../components/ui/bigheading";
import MainCard from "../components/ui/maincard";
import MainHeading from "../components/ui/mainheading";
import Carousel from "../components/ui/carousel";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../components/ui/modal";
import Backdrop from "../components/ui/backdrop";
import { workoutActions } from "../store/workouts";
import MiniCard from "../components/ui/minicard";

const Home = (props) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dispatch = useDispatch();

  const currentDay = new Date();

  const allWorkouts = useSelector((state) => state.workout.workouts);

  const modalOn = useSelector((state) => state.workout.showModal);

  const today = days[currentDay.getDay()];

  const todaysWorkouts = useSelector(
    (state) => state.workout.daysToWorkouts[today]
  );

  const closeModalHandler = () => {
    dispatch(workoutActions.closeModal());
  };

  return (
    <Fragment>
      <MetaHead metacontent="Dashboard">Dashboard | Gym Journal</MetaHead>
      <MainCard>
        <BigHeading>Dashboard</BigHeading>
        <MainHeading>Today</MainHeading>
        {todaysWorkouts.length ? (
          <Carousel all={false} day={today} />
        ) : (
          <p
            style={{
              color: "grey",
              margin: "50px 0",
              fontSize: "1.4rem",
              fontStyle: "italic",
            }}
          >
            No Workouts Today
          </p>
        )}
        <MainHeading style={{ marginRight: "4%" }} search={true}>
          Workouts
        </MainHeading>
        {allWorkouts.length ? (
          <Carousel all={true} />
        ) : (
          <p
            style={{
              color: "grey",
              margin: "50px 0",
              fontSize: "1.4rem",
              fontStyle: "italic",
            }}
          >
            Add a workout in the Workouts Tab
          </p>
        )}
      </MainCard>
      <Modal show={modalOn} closed={closeModalHandler} />
      {modalOn ? <Backdrop show /> : null}
    </Fragment>
  );
};

export default Home;
