import React from "react";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";

import { Container } from "../layout/Container";

const childrenVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.5,
      damping: 9,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

export const Header = ({ heroBook }) => {
  return (
    <>
      {heroBook[0] && (
        <Container variants={containerVariants}>
          <div className="flex justify-center items-center md:items-start flex-col gap-6 max-w-md">
            <motion.h1
              variants={childrenVariants}
              className="text-5xl md:text-7xl capitalize"
            >
              {heroBook[0].title}
            </motion.h1>
            <motion.p
              variants={childrenVariants}
              className="text-center md:text-left"
            >
              {heroBook[0].description}
            </motion.p>
            <NavLink
              variants={childrenVariants}
              className="uppercase rounded-md hover:bg-violet-400 text-gray-900 border-solid border-[0.1px]  self-center border-violet-400 py-4 px-9 md:self-start mt-3"
              to={`/product/${heroBook[0].id}`}
            >
              Read more
            </NavLink>
          </div>
          <LazyLoadImage
            loading="lazy"
            effect="blur"
            src={heroBook[0].image}
            alt="book image"
          />
        </Container>
      )}
    </>
  );
};
