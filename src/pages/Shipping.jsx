import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { getUserAddress } from "../redux/slices/authSlice";
import {
  getCartItems,
  getTotalAmount,
  getTotalQuantity,
} from "../redux/slices/cartSlice";
import { Path } from "../components/Path";

export const Shipping = () => {
  const [cartBooks, setCartBooks] = useState([]);
  const totalQuantity = useSelector(getTotalQuantity);
  const books = useSelector(getCartItems);
  const totalAmount = useSelector(getTotalAmount);
  const userAddress = useSelector(getUserAddress);
  useEffect(() => {
    setCartBooks(books);
  }, [totalQuantity]);
  return (
    <>
      <Path
        pathName={"Home"}
        navigation={"/home"}
        text={"Information / Shipping"}
      />
      <section className="flex items-center h-full md:p-16 dark:bg-gray-900 dark:text-gray-100">
        <div className="container flex flex-col  px-5 mx-auto my-8  m-auto">
          <div className="flex flex-col gap-10 md:gap-10  m-auto">
            <div>
              <h2 className="text-xl font-semibold leading-7 text-gray-900">
                WIBOOKS
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                {`Cart > Information > Shipping > Payment`}
              </p>
            </div>
            <div className="flex flex-col-reverse lg:flex-row gap-10 md:gap-20  m-auto">
              <div className="max-w-xl">
                <ul
                  role="list"
                  className="divide-y divide-gray-100 border-solid border-[0.1px]  border-[#C0C0C0] py-4 px-9"
                >
                  <li className="flex justify-between gap-x-6 py-5">
                    <div className="flex gap-x-4">
                      <div className="min-w-0 flex flex-col md:flex-row gap-7">
                        <p className="text-sm font-semibold leading-6 text-gray-500 ">
                          Ship to
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-900">
                          {userAddress.streetAddress}, {userAddress.postalCode}{" "}
                          {userAddress.city} {userAddress.state}{" "}
                          {userAddress.country}
                        </p>
                        <NavLink
                          to={"/checkout"}
                          className="text-sm leading-6 text-gray-900 cursor-pointer underline"
                        >
                          Change
                        </NavLink>
                      </div>
                    </div>
                  </li>
                </ul>

                <legend className="text-sm font-semibold leading-6 mt-8 mb-3 text-gray-900">
                  Shipping method
                </legend>
                <ul
                  role="list"
                  className="divide-y divide-gray-100 border-solid border-[0.1px]  border-[#C0C0C0] py-4 px-9"
                >
                  <li className="flex justify-between gap-x-6 py-5">
                    <div className="flex gap-x-4">
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                          Standard
                        </p>
                      </div>
                    </div>
                    <div className=" sm:flex sm:flex-col sm:items-end">
                      <p className="text-sm leading-6 text-gray-900">US$0.19</p>
                    </div>
                  </li>
                </ul>
                <div className="flex flex-col md:flex-row text-center md:gap-4">
                  <NavLink
                    to={"/checkout"}
                    className="uppercase h-20 w-full hover:bg-violet-400 rounded-md text-gray-900 border-solid border-[0.1px]  border-[#C0C0C0] py-4 px-9 self-start mt-3 min-w-5"
                  >
                    Return to information
                  </NavLink>
                  <NavLink
                    onClick={() =>
                      alert("This store can’t accept payments right now.")
                    }
                    className="uppercase flex flex-col justify-center h-20 w-full bg-violet-400 rounded-md text-gray-900 border-solid border-[0.1px]  border-[#C0C0C0] py-4 px-9 self-start mt-3"
                  >
                    Continue to payment
                  </NavLink>
                </div>
              </div>
              <div className="">
                <ul className="flex flex-col divide-y divide-gray-700">
                  {cartBooks.map((book) => {
                    return (
                      <>
                        <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                          <div
                            key={book.id}
                            className="flex w-full space-x-2 sm:space-x-4"
                          >
                            <LazyLoadImage
                              className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                              src={book.image}
                              loading="lazy"
                              effect="blur"
                              alt="Polaroid camera"
                            />
                            <div className="flex flex-col justify-between w-full pb-4">
                              <div className="flex justify-between w-full pb-2 space-x-2">
                                <div className="space-y-1">
                                  <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                                    {book.productName}
                                  </h3>
                                  <p className="text-sm dark:text-gray-400">
                                    {book.author}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <p className="text-lg font-semibold">
                                    {book.price} $
                                  </p>
                                  <p className="text-sm line-through dark:text-gray-600">
                                    20 $
                                  </p>
                                  <p className="text-base font-semibold">
                                    QTY {book.quantity}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </>
                    );
                  })}
                </ul>
                <div className="space-y-1 text-right">
                  <p>
                    Total amount:
                    <span className="font-semibold">
                      {" "}
                      {new Intl.NumberFormat().format(totalAmount)} $
                    </span>
                  </p>
                  <p className="text-sm dark:text-gray-400">
                    Not including taxes and shipping costs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Shipping;
