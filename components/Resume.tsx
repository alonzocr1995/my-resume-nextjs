import React, { Fragment } from "react";
import Navigation from "./Navigation";
import classes from "./Resume.module.css";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Tecnologies from "./Tecnologies";
import Footer from "./Footer";

const Resume = () => {
  return (
    <Fragment>
      {/* <Navigation /> */}

      <style jsx global>{`
        body {
          margin: 0;
          font-family: "Source Sans Pro", sans-serif;
          font-family: "Urbanist", sans-serif;
        }
      `}</style>

      {/* <div className={classes.container}>
        <div className={classes.profileContainer}>
          <ResumeProfile />
        </div>

        <button className={classes.btnDownload} onClick={download}>
          Download My Resume
          <GetApp />
        </button>
      </div> */}
      <AboutMe />
      <Education />
      <Tecnologies />
      <Footer />
    </Fragment>
  );
};

export default Resume;
