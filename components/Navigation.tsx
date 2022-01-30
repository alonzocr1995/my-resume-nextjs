import { GitHub, FileCopyOutlined, LinkedIn } from "@material-ui/icons";
import Link from "next/link";
import React from "react";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.navContainer}>
      <div className={classes.logoContainer}>
        <Link href="/">
          <h3>Alonzo Ramirez</h3>
        </Link>
      </div>

      <ul className={classes.listContainer}>
        <li>
          <LinkedIn />
          <Link href="https://www.linkedin.com/in/luis-alonzo-ramirez-7175981b4/">
            <a target="_blank"> LinkedIn</a>
          </Link>
        </li>
        <li>
          <GitHub />
          <Link href="https://github.com/alonzocr1995?tab=repositories">
            <a target="_blank"> Github</a>
          </Link>
        </li>
        <li>
          <FileCopyOutlined />
          <Link href="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
