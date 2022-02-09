//data tutorial mengenai Pre-rendering

import { Ilinks } from "../components/Alinks";
import { AiFillHome } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { MdLocalPostOffice } from "react-icons/md";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FaNewspaper } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { BsCardImage } from "react-icons/bs";

export const pages02: Array<Ilinks> = [
  {
    url: "/",
    textLink: "home",
    icon: AiFillHome,
  },
  {
    url: "/users",
    textLink: "user",
    icon: HiUsers,
  },
  {
    url: "/posts",
    textLink: "posts",
    icon: MdLocalPostOffice,
  },
  {
    url: "/products",
    textLink: "products",
    icon: BsFillBagCheckFill,
  },
  {
    url: "/news",
    textLink: "news",
    icon: FaNewspaper,
  },
  {
    url: "/dashboard",
    textLink: "dashboard",
    icon: AiFillDashboard,
  },
  {
    url: "/image",
    textLink: "image",
    icon: BsCardImage,
  },
];
