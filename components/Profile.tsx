import React from "react";
import classes from "./Profile.module.css";

const Profile = () => {
  // const download = async () => {
  //   try {
  //     const res = await axios.get(
  //       "https://alonzofiles.s3.amazonaws.com/resumes/resume.pdf",
  //       {
  //         headers: {
  //           "Access-Control-Allow-Origin": "*",
  //         },
  //         responseType: "blob",
  //       }
  //     );

  //     fileDownload(res.data, "resume.pdf");
  //   } catch (error) {
  //     console.log("Error--", error);
  //   }
  // };

  return (
    <div className={classes.container}>
      <img
        className={classes.profileImg}
        src="https://scontent.fsjo14-1.fna.fbcdn.net/v/t1.6435-9/94883645_2665443030356689_3057808284284092416_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=72BvPQ07qnEAX83gCaF&_nc_ht=scontent.fsjo14-1.fna&oh=00_AT9HF9Aey_ffIUHxkX_WvvXSc0NHpW7pju1-14DwOdZ0SQ&oe=621947CF"
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
