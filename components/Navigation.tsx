import {
  GitHub,
  LinkedIn,
  GetApp,
  CloudDownload,
  AssignmentReturn,
  AssignmentReturned,
  FontDownload,
} from "@material-ui/icons";
import axios from "axios";
import fileDownload from "js-file-download";
import Link from "next/link";
import React from "react";
import classes from "./Navigation.module.css";

const Navigation = () => {
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
    <nav className={classes.navContainer}>
      <div className={classes.logoContainer}>
        <h3>Alonzo Ramirez</h3>
      </div>

      <div className={classes.listContainer}>
        <div>
          <Link href="https://www.linkedin.com/in/luis-alonzo-ramirez-7175981b4/">
            <a target="_blank">
              <LinkedIn style={{ paddingRight: "3px" }} />
              LinkedIn
            </a>
          </Link>
        </div>
        <div>
          <Link href="https://github.com/alonzocr1995?tab=repositories">
            <a target="_blank">
              <GitHub style={{ paddingRight: "3px" }} />
              Github
            </a>
          </Link>
        </div>
        <div>
          <span onClick={download}>
            <AssignmentReturned style={{ paddingRight: "3px" }} />
            Resume
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
