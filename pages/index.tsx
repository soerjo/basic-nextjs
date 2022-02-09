import React, { ReactElement } from "react";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Web Soerjo | Home</title>
      </Head>
      <div className="flex justify-center ">
        <h1 className="my-4 text-2xl">Home Page</h1>
      </div>
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      {page}
      <div
        id="footer"
        className="absolute bottom-0 bg-slate-500 w-full h-[80px]"
      ></div>
    </>
  );
};
