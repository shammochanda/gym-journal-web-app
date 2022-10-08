import { Fragment } from "react";
import MetaHead from "../components/headmeta";
import BigHeading from "../components/ui/bigheading";
import MainCard from "../components/ui/maincard";
import MainHeading from "../components/ui/mainheading";
import Carousel from "../components/ui/carousel";
import { useSelector } from "react-redux";
import { workoutActions } from "../store/workouts";
import { editScheduleActions } from "../store/editschedule";

const Home = (props) => {
  const editing = useSelector((state) => state.editSchedule.editSchedule);
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <Fragment>
      <MetaHead metacontent="Schedule">Your Schedule | Gym Journal</MetaHead>
      <MainCard>
        <BigHeading edit={true} done={editing}>
          Schedule
        </BigHeading>
        {days.map((day) => (
          <Fragment>
            <MainHeading edit={editing} day={day}>{day}</MainHeading>
            <Carousel all={false} day={day}/>
          </Fragment>
        ))}
      </MainCard>
    </Fragment>
  );
};

export default Home;
