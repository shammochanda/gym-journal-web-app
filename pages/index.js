import { Fragment } from "react";
import MetaHead from "../components/headmeta";
import BigHeading from "../components/ui/bigheading";
import MainCard from "../components/ui/maincard";
import MainHeading from "../components/ui/mainheading";
import Carousel from "../components/ui/carousel";
import MiniCard from "../components/ui/minicard";

const Home = (props) => {
  return (
    <Fragment>
      <MetaHead metacontent="Dashboard">Dashboard | Gym Journal</MetaHead>
      <MainCard>
        {/* <MainHeading>Next Workout</MainHeading>
        <MiniCard>Something</MiniCard>
        <MainHeading>Workouts</MainHeading>
        <MiniCard imglink="/Squats.svg" alt="Squats">Something</MiniCard> */}
        <BigHeading>Dashboard</BigHeading>
        <MainHeading>Today</MainHeading>
        <Carousel />
        <MainHeading search={true}>Workouts</MainHeading>
        <Carousel />
      </MainCard>
    </Fragment>
  );
};

export default Home;
