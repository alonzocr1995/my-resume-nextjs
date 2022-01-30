import React from "react";
import classes from "./Tecnologies.module.css";

const Tecnologies = () => {
  return (
    <div className={classes.container}>
      <h2>Technologies</h2>
      <div className={classes.wrapper}>
        <div className={classes.tecContent}>
          <h3>Programming Languages</h3>
          <div>
            <span>Typescript</span>
            <span>Javascript</span>
          </div>
        </div>
        <div className={classes.tecContent}>
          <h3>Meta Languages</h3>
          <div>
            <span>HTML5</span>
            <span>JSON</span>
            <span>CSS3</span>
          </div>
        </div>
        <div className={classes.tecContent}>
          <h3>NoSQL Database Enviroments</h3>
          <div>
            <span>Firebase Realtime Database</span>
            <span>Firebase Cloud Firestore</span>
            <span>MongoDB</span>
          </div>
        </div>

        <div className={classes.tecContent}>
          <h3>Backend</h3>
          <div>
            <span>NodeJS (in process)</span>
            <span>ExpressJS (in process)</span>
          </div>
        </div>
        <div className={classes.tecContent}>
          <h3>Frontend</h3>
          <div>
            <span>React</span>
            <span>React Native</span>
            <span>Angular (Beginner)</span>
          </div>
        </div>
        <div className={classes.tecContent}>
          <h3>Version Controls</h3>
          <div>
            <span>Git</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tecnologies;
