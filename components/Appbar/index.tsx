import React from "react";
import Alinks, { Ilinks } from "../Alinks";
import { useRouter } from "next/router";

const Appbar = ({ pages }: { pages: Array<Ilinks> }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <nav className="bg-green-300 w-full py-2 flex justify-center ">
      <ul className="flex space-x-3 mx-auto">
        {pages.map((page, index) => {
          const { icon: Icon, url, textLink } = page;
          return (
            <Alinks
              key={index}
              url={url}
              className={`flex flex-row items-center px-3 py-2 rounded-md capitalize ${
                pathname === url
                  ? "bg-sky-500 text-white"
                  : "bg-slate-50 text-sky-800"
              }`}
            >
              {textLink}
              {Icon && (
                <span className="ml-2">
                  <Icon />
                </span>
              )}
            </Alinks>
          );
        })}
      </ul>
    </nav>
  );
};

export default Appbar;
