import React, { Fragment } from "react";
import Navigation from "./Navigation";
import classes from "./Resume.module.css";
import ResumeProfile from "./Profile";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Tecnologies from "./Tecnologies";
import Footer from "./Footer";
import axios from "axios";
import fileDownload from "js-file-download";
import { GetApp } from "@material-ui/icons";

const Resume = () => {
  const download = async () => {
    try {
      const res = await axios.get(
        "https://alonzofiles.s3.amazonaws.com/resumes/resumeEN.pdf",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          responseType: "blob",
        }
      );

      fileDownload(res.data, "resume.pdf");
    } catch (error) {
      console.log("Error--", error);
    }
  };
  return (
    <Fragment>
      <Navigation />

      <style jsx global>{`
        body {
          margin: 0;
          font-family: "Source Sans Pro", sans-serif;
          font-family: "Urbanist", sans-serif;
        }
      `}</style>

      <div className={classes.container}>
        <div className={classes.profileContainer}>
          <ResumeProfile />
        </div>

        <button className={classes.btnDownload} onClick={download}>
          Download My Resume
          <GetApp />
        </button>
      </div>
      <AboutMe />
      <Education />
      <Tecnologies />
      <Footer />
    </Fragment>
  );
};

export default Resume;
