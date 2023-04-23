import React from "react";
import { motion } from "framer-motion";

export const Container = ({ children, bgColor, variants }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className={`pt-10 pb-16 md:pt-28 md:pb-28 w-full ${bgColor}`}
    >
      <div className="sm:max-w-xl md:max-w-3xl lg:max-w-6xl m-auto flex flex-col md:flex-row justify-center gap-6 items-center px-5">
        {children}
      </div>
    </motion.div>
  );
};
