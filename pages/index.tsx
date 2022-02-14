import React, { Fragment } from "react";
import Head from "next/head";
import Resume from "../components/Resume";

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Alonzo Ramirez</title>
        <meta
          name="description"
          content="Software Developer with expertise in various technologies, very
          motivated and eager to bring the most value to the organization."
        />
      </Head>
      <Resume />
    </Fragment>
  );
};

export default HomePage;
