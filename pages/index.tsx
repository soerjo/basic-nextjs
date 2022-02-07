import React from "react";
import { useRouter } from "next/router";
import Appbar from "../components/Appbar";
import { pages } from "../utils/pages";
import { pages02 } from "../utils/pageTutorial02";

const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/products");
  };

  return (
    <>
      <Appbar pages={pages} />
      <div className="container flex flex-col my-5 mx-auto text-center content-center">
        <h1 className="my-2 text-xl">Home Page</h1>
        <button
          className="mx-auto bg-sky-500 rounded shadow-md text-white px-4 py-2 hover:bg-sky-200 hover:text-sky-600 hover:font-semibold"
          onClick={handleClick}
        >
          Order
        </button>
      </div>
      <Appbar pages={pages02} />
    </>
  );
};

export default Home;
