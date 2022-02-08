import React, { Children } from "react";
import Appbar from "../Appbar";
import { pages02 } from "../../utils/pageTutorial02";

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Appbar pages={pages02} />
      <main className="flex justify-center  flex-col text-center">
        {children}
      </main>
    </>
  );
};

export default MainLayout;
