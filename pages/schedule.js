import { Fragment } from "react";
import MetaHead from "../components/headmeta";
import BigHeading from "../components/ui/bigheading";
import MainCard from "../components/ui/maincard";
import MainHeading from "../components/ui/mainheading";
import Carousel from "../components/ui/carousel";
import { useSelector } from "react-redux";
import { workoutActions } from "../store/workouts";
import { editScheduleActions } from "../store/editschedule";
import { Classnames } from "react-alice-carousel";

const Home = (props) => {
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
        fontSize: "1.4rem",
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
              <Carousel key={index} all={false} day={day} />
            </Fragment>
          ) : (
            <Fragment key={index}>
              <MainHeading edit={editing} day={day}>
                {day}
              </MainHeading>
              <p
                style={{
                  color: "grey",
                  margin: "40px 0",
                  fontSize: "1.4rem",
                  fontStyle: "italic",
                }}
              >
                No workouts on this day
              </p>
            </Fragment>
          )
        )}
      </MainCard>
    </Fragment>
  );
};

export default Home;
