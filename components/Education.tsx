import Link from "next/link";
import React from "react";
import classes from "./Education.module.css";

const Education = () => {
  return (
    <div className={classes.container}>
      <h2>Education</h2>

      <div className={classes.content}>
        <div className={classes.educationContent}>
          <h3>Universidad Creativa</h3>
          <div className={classes.innerContent}>
            <span>Front-End Certification with React 2020 - 2021</span>
            <Link href="https://alonzofiles.s3.amazonaws.com/certificates/ucreativaReact.pdf">
              <a target="_blank">View Certificate</a>
            </Link>
          </div>
          <hr />
        </div>
        <div className={classes.educationContent}>
          <h3>Udemy</h3>
          <div className={classes.innerContent}>
            <span>
              The Complete Javascript Course 2021: From zero to Expert
            </span>
            <Link href="https://alonzofiles.s3.amazonaws.com/certificates/JavaScriptUdemy.pdf">
              <a target="_blank">View Certificate</a>
            </Link>
          </div>

          <hr />
        </div>
        <div className={classes.educationContent}>
          <h3>Udemy</h3>
          <div className={classes.innerContent}>
            <span>
              React - The Complete Guide 2021(Maximilian Schwarzmüller)
            </span>
            <Link href="https://alonzofiles.s3.amazonaws.com/certificates/ReactUdemy.pdf">
              <a type="button" target="_blank">
                View Certificate
              </a>
            </Link>
          </div>

          <hr />
        </div>
      </div>
    </div>
  );
};

export default Education;
