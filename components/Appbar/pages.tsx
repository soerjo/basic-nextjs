import { Ilinks } from "../Alinks";
import { AiFillHome } from "react-icons/ai";
import { FaBlogger } from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";
import { BsFillBagCheckFill } from "react-icons/bs";

export const pages: Array<Ilinks> = [
  {
    url: "/",
    textLink: "home",
    icon: <AiFillHome />,
  },
  {
    url: "/blog",
    textLink: "blog",
    icon: <FaBlogger />,
  },
  {
    url: "/docs",
    textLink: "docs",
    icon: <IoDocumentsSharp />,
  },
  {
    url: "/products",
    textLink: "products",
    icon: <BsFillBagCheckFill />,
  },
];
