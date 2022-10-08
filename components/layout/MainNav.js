import { useEffect, useState } from "react";
import Link from "next/link";
import Hamburger from "../icons/hamburger";
import { useMediaQuery } from "react-responsive";
import classes from "./MainNav.module.css";
import { useDispatch } from "react-redux";
import { editScheduleActions } from "../../store/editschedule";

const MainNav = (props) => {
  const dispatch = useDispatch();

  const [showList, setShowList] = useState(false);

  const hamburgerHandler = (event) => {
    setShowList(!showList);
  };

  const linkHandler = () => {
    setShowList(false);
    dispatch(editScheduleActions.editOff());
  };

  // const logoHandler = (event) => {
  //   setShowList(false);
  //   dispatch(editScheduleActions.editOff());
  // };

  let change = useMediaQuery({ query: "(min-width: 571px)" });

  useEffect(() => {
    if (change) {
      setShowList(false);
    }
  }, [change]);

  return (
    <header className={classes.header}>
      <span className={classes.logo}>
        <Link href="/">
          <a onClick={linkHandler}>GYM/JOURNAL</a>
        </Link>
      </span>
      <nav>
        <ul className={classes.biglist}>
          <li className={classes.nav}>
            <Link href="/schedule">
              <a onClick={linkHandler}>Schedule</a>
            </Link>
          </li>
          <li className={classes.nav}>
            <Link href="/workouts">
              <a onClick={linkHandler}>Workouts</a>
            </Link>
          </li>
          <li className={classes.nav}>
            <Link href="/pbs">
              <a onClick={linkHandler}>PBs</a>
            </Link>
          </li>
          <li className={classes.nav}>
            <Link href="/logout">
              <a onClick={linkHandler}>Logout</a>
            </Link>
          </li>
        </ul>
        <ul className={classes.smalllist}>
          <li className={classes.hamburger}>
            <div onClick={hamburgerHandler}>
              <Hamburger toggle={showList} />
            </div>
          </li>
        </ul>
        <ul className={`${classes.hide} ${showList && classes.dropdown}`}>
          <li className={classes.nav}>
            <Link href="/schedule">
              <a onClick={linkHandler}>Schedule</a>
            </Link>
          </li>
          <li className={classes.nav}>
            <Link href="/workouts">
              <a onClick={linkHandler}>Workouts</a>
            </Link>
          </li>
          <li className={classes.nav}>
            <Link href="/pbs">
              <a onClick={linkHandler}>PBs</a>
            </Link>
          </li>
          <li className={classes.nav}>
            <Link href="/logout">
              <a onClick={linkHandler}>Logout</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
