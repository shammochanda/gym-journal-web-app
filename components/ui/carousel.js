import { useEffect, useState, React } from "react";
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
import classes from "./carousel.module.css";
import MiniCard from "./minicard";
import Hamburger from "../icons/hamburger";

const Carousel = (props) => {
  const [slides, setSlides] = useState(4);

  const allWorkouts = useSelector((state) => state.workout.workouts);

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
        {allWorkouts.map((slideCard, index) => (
          <Slide index={index}>
            <MiniCard title={slideCard} />
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
