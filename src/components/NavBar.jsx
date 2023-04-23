import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";

import logo from "../assets/books-icon.png";
import shoppingBag from "../assets/shopping-bag.png";
import { getTotalQuantity } from "../redux/slices/cartSlice";
import { getAuthUser, logOut } from "../redux/slices/authSlice";
import userIcon from "../assets/user.png";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const totalQuantity = useSelector(getTotalQuantity);
  const user = useSelector(getAuthUser);
  const dispatch = useDispatch();

  const handlelLogout = () => {
    dispatch(logOut());
  };
  console.log(user);
  return (
    <div className="flex items-center justify-between flex-wrap p-6 sm:max-w-xl md:max-w-3xl lg:max-w-6xl w-full mx-auto">
      <div className="flex md:flex-none w-full md:w-auto justify-between items-center">
        <NavLink
          to={`/home`}
          className="flex title-font text-xl font-medium items-center text-gray-900 mb-4 md:mb-0 gap-4 uppercase"
        >
          <LazyLoadImage
            loading="lazy"
            effect="blur"
            className="w-10"
            src={logo}
            alt="website logo book"
          />{" "}
          <span className="logo font-bold">
            wi<span className="logo font-light">Books</span>
          </span>
        </NavLink>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={` block lg:flex w-full lg:items-center lg:w-auto gap-5 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className=" flex flex-col lg:flex-row justify-center items-center lg:flex-grow uppercase text-black gap-5">
          <NavLink
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
            to={`/home`}
          >
            <p>Home</p>
          </NavLink>

          <NavLink
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
            to="/aboutUs"
          >
            About Us
          </NavLink>
          <NavLink
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
            to="/shop"
          >
            Shop
          </NavLink>
          <NavLink
            className="block relative mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
            to="/cart"
          >
            <LazyLoadImage
              loading="lazy"
              effect="blur"
              src={shoppingBag}
              alt="shopping bag"
            />
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
              {totalQuantity}
            </div>
          </NavLink>
          {user && user.userName ? (
            <>
              <div className="dropdown">
                <div className="flex justify-center items-center gap-4">
                  <LazyLoadImage
                    effect="blur"
                    tabIndex={0}
                    className="cursor-pointer "
                    src={userIcon}
                    alt="user icon"
                  />
                  <p className="text-sm">Hi {user.userName}</p>
                </div>

                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a onClick={handlelLogout}>Logout</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <NavLink
              className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white mt-6 lg:mt-0"
              to="/login"
            >
              Sign in
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};
