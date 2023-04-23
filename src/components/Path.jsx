import React from "react";
import { NavLink } from "react-router-dom";

export const Path = ({ navigation, pathName, text }) => {
  return (
    <p className="flex justify-center items-center bg-[#EDEBE4] h-24 uppercase px-5">
      {" "}
      <NavLink to={navigation}>
        {pathName}
        {text && <> / {text}</>}
      </NavLink>
    </p>
  );
};
