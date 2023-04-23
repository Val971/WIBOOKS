import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { Container } from "../layout/Container";
import { Path } from "../components/Path";
import { cartActions } from "../redux/slices/cartSlice";
import emptyCart from "../assets/empty-cart.png";
import AnimatedPage from "../layout/AnimatedPage";

const Cart = () => {
  const [cartBooks, setCartBooks] = useState([]);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const books = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const deleteItem = (id) => {
    dispatch(cartActions.deleteItem(id));
  };
  useEffect(() => {
    setCartBooks(books);
  }, [totalQuantity]);
  return (
    <>
      <AnimatedPage>
        <Path
          pathName={"Home"}
          navigation={"/home"}
          text={"YOUR SHOPPING CART"}
        />
        {totalQuantity <= 0 ? (
          <Container>
            <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
              <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center ">
                  <LazyLoadImage
                    loading="lazy"
                    effect="blur"
                    src={emptyCart}
                    alt="empty icon cart"
                    className="mb-5 m-auto"
                  />
                  <p className="text-2xl font-semibold md:text-3xl">
                    Sorry, we couldn't find this page.
                  </p>
                  <p className="mt-4 mb-8 dark:text-gray-400">
                    But dont worry, you can find plenty of other things on our
                    homepage.
                  </p>
                  <NavLink
                    to={"/home"}
                    className="uppercase text-black border-solid border-[0.1px]  border-[#C0C0C0] py-4 px-9 self-start mt-3"
                  >
                    Back
                    <span className="sr-only sm:not-sr-only">to home</span>
                  </NavLink>
                </div>
              </div>
            </section>
          </Container>
        ) : (
          <>
            <div className={`pt-10 pb-16 md:pt-28 md:pb-28 w-full `}>
              <div className="sm:max-w-xl md:max-w-3xl px-5 lg:max-w-6xl m-auto">
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
                                    20 €
                                  </p>
                                  <p className="text-base font-semibold">
                                    QTY {book.quantity}
                                  </p>
                                </div>
                              </div>
                              <div className="flex text-sm divide-x">
                                <button
                                  type="button"
                                  className="flex items-center px-2 py-1 pl-0 space-x-1"
                                  onClick={() => deleteItem(book.id)}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-4 h-4 fill-current"
                                  >
                                    <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                    <rect
                                      width="32"
                                      height="200"
                                      x="168"
                                      y="216"
                                    ></rect>
                                    <rect
                                      width="32"
                                      height="200"
                                      x="240"
                                      y="216"
                                    ></rect>
                                    <rect
                                      width="32"
                                      height="200"
                                      x="312"
                                      y="216"
                                    ></rect>
                                    <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                  </svg>
                                  <span>Remove</span>
                                </button>
                                <button
                                  type="button"
                                  className="flex items-center px-2 py-1 space-x-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-4 h-4 fill-current"
                                  >
                                    <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                  </svg>
                                  <span>Add to favorites</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      </>
                    );
                  })}
                </ul>
                <div>
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
                  <div className="flex justify-end space-x-4">
                    <NavLink
                      to={"/shop"}
                      className="uppercase hover:bg-violet-400 text-gray-900 border-solid border-[0.1px] rounded-md border-violet-400 py-4 px-9 self-start mt-3"
                    >
                      Back
                      <span className="sr-only sm:not-sr-only"> to shop</span>
                    </NavLink>
                    <NavLink
                      to={"/checkout"}
                      className="uppercase text-gray-900 border-solid border-[0.1px] rounded-md bg-violet-400  border-[#C0C0C0] py-4 px-9 self-start mt-3 "
                    >
                      <span className="sr-only sm:not-sr-only">
                        Continue to{" "}
                      </span>
                      Checkout
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </AnimatedPage>
    </>
  );
};
export default Cart;
