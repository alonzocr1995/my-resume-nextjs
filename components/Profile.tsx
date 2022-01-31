import React from "react";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={classes.container}>
      <img
        className={classes.profileImg}
        src="https://alonzofiles.s3.amazonaws.com/images/resume-pic1.jpg"
        alt=""
      />
      <h3>Alonzo Ramirez</h3>
      <span>Software Developer</span>

      <div>
        <a href="mailto: alonzowebdev@gmail.com">
          <button className={classes.contactButton}>CONTACT</button>
        </a>
      </div>
    </div>
  );
};

export default Profile;
