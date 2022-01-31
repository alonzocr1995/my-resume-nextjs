import { GitHub, LinkedIn, GetApp, CloudDownload } from "@material-ui/icons";
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

      <ul className={classes.listContainer}>
        <li>
          <LinkedIn />
          <Link href="https://www.linkedin.com/in/luis-alonzo-ramirez-7175981b4/">
            <a target="_blank">LinkedIn</a>
          </Link>
        </li>
        <li>
          <GitHub />
          <Link href="https://github.com/alonzocr1995?tab=repositories">
            <a target="_blank">Github</a>
          </Link>
        </li>
        <li>
          <GetApp />
          <span onClick={download}>Resume</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
