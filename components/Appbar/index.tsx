import React from "react";
import Alinks from "../Alinks";
import { useRouter } from "next/router";
import { pages } from "./pages";

const Appbar = () => {
  const router = useRouter();
  const { pathname } = router;

  console.log(pathname);

  return (
    <nav className="bg-green-300 w-screen py-2 flex justify-center ">
      <ul className="flex space-x-3 mx-auto">
        {pages.map((page, index) => {
          return (
            <Alinks
              key={index}
              url={page.url}
              className={`flex flex-row items-center px-3 py-2 rounded-md capitalize ${
                pathname === page.url
                  ? "bg-sky-500 text-white"
                  : "bg-slate-50 text-sky-800"
              }`}
            >
              {page.textLink}
              <span className="ml-2">{page.icon}</span>
            </Alinks>
          );
        })}
      </ul>
    </nav>
  );
};

export default Appbar;

<h1>sebuah app bar</h1>;
