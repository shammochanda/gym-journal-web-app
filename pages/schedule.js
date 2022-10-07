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
      <MetaHead metacontent="Schedule">Your Schedule | Gym Journal</MetaHead>
      <MainCard>
        <BigHeading edit={true} done={false}>Schedule</BigHeading>

        <MainHeading edit={true}>Monday</MainHeading>
        <Carousel />

        <MainHeading edit={true}>Tuesday</MainHeading>
        <Carousel />

        <MainHeading edit={true}>Wednesday</MainHeading>
        <Carousel />

        <MainHeading edit={true}>Thursday</MainHeading>
        <Carousel />

        <MainHeading edit={true}>Friday</MainHeading>
        <Carousel />

        <MainHeading edit={true}>Saturday</MainHeading>
        <Carousel />

        <MainHeading edit={true}>Sunday</MainHeading>
        <Carousel />
      </MainCard>
    </Fragment>
  );
};

export default Home;
