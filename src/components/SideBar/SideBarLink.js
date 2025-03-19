import React from "react";
import { Link } from "react-router-dom";

const SideBarLink = ({ optionName, route }) => {
  return (
    <li className="py-2 hover:bg-zinc-600 flex transition duration-200 ease-in-out rounded-md w-full mt-2 cursor-pointer">
      <Link
        className="text-white w-full"
        to={route}
        data-toggle="collapse"
        aria-expanded="false"
      >
        {optionName}
      </Link>
    </li>
  );
};

export default SideBarLink;
