import React from "react";
import Appbar from "../Appbar";
import { pages02 } from "../../utils/pageTutorial02";
import Head from "next/head";

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Web Soerjo</title>
      </Head>
      <Appbar pages={pages02} />
      <main className="flex justify-center  flex-col text-center">
        {children}
      </main>
    </>
  );
};

export default MainLayout;
