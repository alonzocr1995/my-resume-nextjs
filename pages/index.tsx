import React, { Fragment } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Resume from "../components/Resume";

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Alonzo Ramirez</title>
        <meta
          name="description"
          content="Software Developer with expertise in various tecnologies. Specializing on Full Stack software development"
        />
      </Head>
      <Layout />
      <Resume />
    </Fragment>
  );
};

export default HomePage;
