import { useEffect, useState } from "react";
import Link from "next/link";
import Hamburger from "../menu/hamburger";
import { useMediaQuery } from "react-responsive";
import classes from "./MainNav.module.css";

const MainNav = (props) => {
  const [showList, setShowList] = useState(false);

  const hamburgerHandler = (event) => {
    setShowList(!showList);
  };

  let change = useMediaQuery({ query: "(min-width: 551px)" });

  useEffect(() => {
    if (change) {
      setShowList(false)
    }
  }, [change])

  return (
    <header className={classes.header}>
      <span className={classes.logo}>
        <Link href="/">
          <a>GYM/JOURNAL</a>
        </Link>
      </span>
      <nav>
        <ul className={classes.biglist}>
          <li className={classes.nav}>
            <Link href="/schedule">Schedule</Link>
          </li>
          <li className={classes.nav}>
            <Link href="/workouts">Workouts</Link>
          </li>
          <li className={classes.nav}>
            <Link href="/pbs">PBs</Link>
          </li>
          <li className={classes.nav}>
            <Link href="/logout">Logout</Link>
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
              <a onClick={hamburgerHandler}>Schedule</a>
            </Link>
          </li>
          <li className={classes.nav}>
            <Link href="/workouts">
              <a onClick={hamburgerHandler}>Workouts</a>
            </Link>
          </li>
          <li className={classes.nav}>
            <Link href="/pbs">
              <a onClick={hamburgerHandler}>PBs</a>
            </Link>
          </li>
          <li className={classes.nav}>
            <Link href="/logout">
              <a onClick={hamburgerHandler}>Logout</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
