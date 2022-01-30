import Head from "next/head";
import React, { Fragment } from "react";
import Resume from "../../components/Resume";

const index = () => {
  return (
    <Fragment>
      {/* <Head>
        <title>Alonzo Ramirez Resume</title>
        <meta
          name="description"
          content="Software Developer Resume build with Next JS"
        />
      </Head> */}
      <Resume />
    </Fragment>
  );
};

export default index;
