import { useEffect, useState, memo } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import { workoutActions } from "../../store/workouts";
import { editScheduleActions } from "../../store/editschedule";
import classes from "./carousel.module.css";
import MiniCard from "./minicard";
import Hamburger from "../icons/hamburger";

const Carousel = (props) => {
  const [slides, setSlides] = useState(4);

  const allWorkouts = useSelector((state) => state.workout.workouts);

  const dayWorkouts = useSelector((state) => state.workout.daysToWorkouts[props.day]);

  const searchTerm = useSelector((state) => state.workout.searchTerm);

  const editing = useSelector((state) => state.editSchedule.editSchedule);

  let change3 = useMediaQuery({ query: "(max-width: 1620px)" });

  let change2 = useMediaQuery({ query: "(max-width: 1270px)" });

  let change1 = useMediaQuery({ query: "(max-width: 780px)" });

  useEffect(() => {
    if (change1) {
      setSlides(1);
    } else if (change2) {
      setSlides(2);
    } else if (change3) {
      setSlides(3);
    } else {
      setSlides(4);
    }
  }, [change3, change2, change1]);

  return (
    <CarouselProvider
      naturalSlideWidth={1}
      naturalSlideHeight={1}
      totalSlides={allWorkouts.length}
      visibleSlides={slides}
      step={slides}
    >
      <Slider className={classes.slider}>
        {props.all
          ? allWorkouts
              .filter((workout) =>
                workout["workout"]
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              )
              .map((slideCard, index) => (
                <Slide index={index} key={slideCard["workout"]}>
                  <MiniCard
                    title={slideCard["workout"]}
                    subtract={editing}
                    exercises={slideCard["allExercises"]}
                  />
                </Slide>
              ))
          : dayWorkouts.map((slideCard, index) => (
              <Slide index={index} key={slideCard["workout"]}>
                <MiniCard
                  title={slideCard["workout"]}
                  subtract={editing}
                  day={props.day}
                  exercises={slideCard["allExercises"]}
                />
              </Slide>
            ))}
      </Slider>
      <ButtonBack className={classes.back}>
        <Hamburger />
      </ButtonBack>
      <ButtonNext className={classes.front}>
        <Hamburger />
      </ButtonNext>
    </CarouselProvider>
  );
};

export default Carousel;
