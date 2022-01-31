import Navigation from "./Navigation";
import classes from "./Layout.module.css";
import Background from "../UI/Background";
import Footer from "./Footer";
import Profile from "./Profile";

const Layout = () => {
  return (
    <div>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&family=Urbanist:wght@100&display=swap");

        body {
          margin: 0;
          font-family: "Source Sans Pro", sans-serif;
          font-family: "Urbanist", sans-serif;
        }
      `}</style>
      <Navigation />

      <div className={classes.textContainer}>
        {/* <h2>Luis Alonzo Ramirez C.</h2>
        <p>
          Software Developer with expertise in various tecnologies, ready and
          eager to bring the best value to your organization and it's clients.
        </p> */}
        <Profile />
      </div>

      <Background />
      <Footer />
    </div>
  );
};

export default Layout;
