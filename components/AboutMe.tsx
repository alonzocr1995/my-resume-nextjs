import React from "react";
import classes from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>About Me</h2>
      <p className={classes.desc}>
        I am a Software Developer with expertise in various technologies, very
        motivated and eager to bring the most value to the organization.
      </p>
    </div>
  );
};

export default AboutMe;
