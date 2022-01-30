import Navigation from "./Navigation";
import classes from "./Layout.module.css";
import Background from "../UI/Background";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <style jsx global>{`
        body {
          margin: 0;
          font-family: "Source Sans Pro", sans-serif;
          font-family: "Urbanist", sans-serif;
        }
      `}</style>
      <Navigation />

      <div className={classes.textContainer}>
        <h2>Luis Alonzo Ramirez C.</h2>
        <p>
          Software Developer with expertise in various tecnologies, ready and
          eager to bring the best value to your organization and it's clients.
        </p>
      </div>

      <Background />
      <Footer />
    </div>
  );
};

export default Layout;
