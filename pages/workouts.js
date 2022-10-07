import { Fragment } from "react";
import MetaHead from "../components/headmeta";
import BigHeading from "../components/ui/bigheading";
import MainCard from "../components/ui/maincard";
import MainHeading from "../components/ui/mainheading";
import AddWorkoutForm from "../components/addworkoutform";

const Home = (props) => {
  return (
    <Fragment>
      <MetaHead metacontent="Schedule">Your Workouts | Gym Journal</MetaHead>
      <MainCard>
        <BigHeading>Workouts</BigHeading>

        <MainHeading>Add a Workout</MainHeading>

        <AddWorkoutForm />
        
      </MainCard>
    </Fragment>
  );
};

export default Home;
