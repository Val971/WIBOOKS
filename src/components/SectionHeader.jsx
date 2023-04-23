import React from "react";

export const SectionHeader = ({ title, subTitle }) => {
  return (
    <>
      <span className="uppercase font-medium text-xs">{subTitle}</span>
      <div className="">
        <h2 className="capitalize text-3xl md:text-5xl">{title}</h2>
      </div>
    </>
  );
};
