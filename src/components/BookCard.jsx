import React from "react";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const BookCard = ({ book }) => {
  return (
    <div className="flex flex-col gap-2 cursor-pointer">
      <div className="bg-[#EFEEE8] border-solid border-[1px] border-[#EAE8DF] flex">
        <LazyLoadImage
          loading="lazy"
          effect="blur"
          className="w-3/4 m-auto p-3"
          src={book.image}
          alt="Book image"
        />
      </div>
      <NavLink
        className="text-inherit hover:text-dark-green"
        to={`/product/${book.id}`}
      >
        <h3 className="text-xl capitalize">{book.title}</h3>
      </NavLink>
      <p className="text-sm capitalize text-[#888888]">{book.author}</p>
      <p className="text-lg text-[#74642F]">{book.price} $</p>
    </div>
  );
};
