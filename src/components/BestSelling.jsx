import React from "react";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { Container } from "../layout/Container";
import cherieJones01 from "../assets/cherieJones01.jpg";

export const BestSelling = ({ bestSeller }) => {
  return (
    <>
      {bestSeller[0] && (
        <Container bgColor={"bg-[#EDEBE4]"}>
          <LazyLoadImage
            loading="lazy"
            effect="blur"
            src={cherieJones01}
            alt="book image"
          />
          <div className="max-w-lg">
            <h2 className="text-5xl md:text-7xl mb-8">Best selling book</h2>
            <span className="uppercase text-sm">By {bestSeller[0].author}</span>
            <h3 className="text-2xl capitalize my-4">{bestSeller[0].title}</h3>
            <p>{bestSeller[0].description}</p>
            <br />
            <p className="text-2xl text-[#74642F] my-8">
              {bestSeller[0].price} $
            </p>
            <NavLink
              to={`/product/${bestSeller[0].id}`}
              className="uppercase rounded-md hover:bg-violet-400 text-gray-900 border-solid border-[0.1px]  border-violet-400 py-4 px-9 self-start mt-3"
            >
              <span>Shop it Now</span>
            </NavLink>
          </div>
        </Container>
      )}
    </>
  );
};
