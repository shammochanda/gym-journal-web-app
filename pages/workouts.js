import { Fragment, useState, useEffect } from "react";
import MetaHead from "../components/headmeta";
import BigHeading from "../components/ui/bigheading";
import MainCard from "../components/ui/maincard";
import MainHeading from "../components/ui/mainheading";
import AddWorkoutForm from "../components/addworkoutform";
import ScrollableWorkout from "../components/scrollableworkouts";
import classes from "../styles/workouts.module.css";
import { useMediaQuery } from "react-responsive";

const Home = (props) => {

  const [toStack, setToStack] = useState(false);

  let stack = useMediaQuery({ query: "(max-width: 1272px)" });

  useEffect(() => {
    if (stack) {
      setToStack(true);
    } else {
      setToStack(false);
    }
  }, [stack]);

  return (
    <Fragment>
      <MetaHead metacontent="Schedule">Your Workouts | Gym Journal</MetaHead>
      <MainCard>
        <BigHeading>Manage Workouts</BigHeading>
        <div className={classes.whole}>
          <div className={classes.form}>
            <MainHeading>Add a Workout</MainHeading>

            <AddWorkoutForm />
          </div>
          <div className={classes.all}>
            <MainHeading style={{marginRight: "4%"}} search={true}>All Workouts</MainHeading>

            <ScrollableWorkout />
          </div>
        </div>
      </MainCard>
    </Fragment>
  );
};

export default Home;
