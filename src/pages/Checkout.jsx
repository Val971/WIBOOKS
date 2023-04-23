import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { getUserAddress, setUserAddress } from "../redux/slices/authSlice";
import {
  getCartItems,
  getTotalAmount,
  getTotalQuantity,
} from "../redux/slices/cartSlice";
import { Path } from "../components/Path";
import AnimatedPage from "../layout/AnimatedPage";

const checkoutSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  city: Yup.string().required("Last name is required"),
  state: Yup.string().required("State is required"),
  postalCode: Yup.string().required("Postal code is required"),
  streetAddress: Yup.string().required("Street address is required"),
});

const Checkout = () => {
  const [cartBooks, setCartBooks] = useState([]);
  const totalQuantity = useSelector(getTotalQuantity);
  const books = useSelector(getCartItems);
  const totalAmount = useSelector(getTotalAmount);
  const userAddress = useSelector(getUserAddress);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    setCartBooks(books);
  }, [totalQuantity]);
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <AnimatedPage>
        <Path pathName={"Home"} navigation={"/home"} text={"Checkout"} />
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
                  <Formik
                    initialValues={{
                      email: `${userAddress.email}`,
                      firstName: `${userAddress.firstName}`,
                      lastName: `${userAddress.firstName}`,
                      country: `${userAddress.country}`,
                      city: `${userAddress.city}`,
                      state: `${userAddress.state}`,
                      postalCode: `${userAddress.postalCode}`,
                      streetAddress: `${userAddress.streetAddress}`,
                    }}
                    validationSchema={checkoutSchema}
                    onSubmit={(values) => {
                      dispatch(setUserAddress({ ...values }));
                      navigate("/shipping");
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <div className="space-y-6">
                          <div className="border-b border-gray-900/10 pb-12">
                            <div className="mt-10 ">
                              <div className="sm:col-span-3">
                                <legend
                                  htmlFor="email"
                                  className="text-sm font-semibold leading-6 text-gray-900"
                                >
                                  Contact
                                </legend>
                                <div className="mt-2">
                                  <Field
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                  {touched.email && errors && errors.email && (
                                    <ErrorMessage name="email">
                                      {(msg) => (
                                        <div className=" text-red-600">
                                          {msg}
                                        </div>
                                      )}
                                    </ErrorMessage>
                                  )}
                                </div>
                                <p className="mt-1 text-xs leading-4 text-gray-600">
                                  You may receive text messages related to order
                                  confirmation and shipping updates. Reply STOP
                                  to unsubscribe. Reply HELP for help. Message
                                  frequency varies. Msg & data rates may apply.
                                  View our Privacy policy and Terms of service.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="border-b border-gray-900/10 pb-12">
                            <legend
                              htmlFor="email"
                              className="text-sm font-semibold leading-6 text-gray-900"
                            >
                              Shipping address
                            </legend>

                            <div className="mt-10 flex flex-col gap-2">
                              <div className="">
                                <label
                                  htmlFor="country"
                                  className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  Country
                                </label>
                                <div className="mt-2">
                                  <Field
                                    name="country"
                                    as="select"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                  >
                                    <option value="USA">United States</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Mexico">Mexico</option>
                                  </Field>
                                  {touched.country &&
                                    errors &&
                                    errors.country && (
                                      <ErrorMessage name="country">
                                        {(msg) => (
                                          <div className=" text-red-600">
                                            {msg}
                                          </div>
                                        )}
                                      </ErrorMessage>
                                    )}
                                </div>
                              </div>
                              <div className="flex gap-4">
                                <div>
                                  <label
                                    htmlFor="first-name"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    First name
                                  </label>
                                  <div className="mt-2">
                                    <Field
                                      type="text"
                                      name="firstName"
                                      id="firstName"
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    {touched.firstName &&
                                      errors &&
                                      errors.firstName && (
                                        <ErrorMessage name="firstName">
                                          {(msg) => (
                                            <div className=" text-red-600">
                                              {msg}
                                            </div>
                                          )}
                                        </ErrorMessage>
                                      )}
                                  </div>
                                </div>

                                <div>
                                  <label
                                    htmlFor="last-name"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Last name
                                  </label>
                                  <div className="mt-2">
                                    <Field
                                      type="text"
                                      name="lastName"
                                      id="lastName"
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    {touched.lastName &&
                                      errors &&
                                      errors.lastName && (
                                        <ErrorMessage name="lastName">
                                          {(msg) => (
                                            <div className=" text-red-600">
                                              {msg}
                                            </div>
                                          )}
                                        </ErrorMessage>
                                      )}
                                  </div>
                                </div>
                              </div>

                              <div>
                                <label
                                  htmlFor="street-address"
                                  className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  Street address
                                </label>
                                <div className="mt-2">
                                  <Field
                                    type="text"
                                    name="streetAddress"
                                    id="streetAddress"
                                    className="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                                  />
                                  {touched.streetAddress &&
                                    errors &&
                                    errors.streetAddress && (
                                      <ErrorMessage name="streetAddress">
                                        {(msg) => (
                                          <div className=" text-red-600">
                                            {msg}
                                          </div>
                                        )}
                                      </ErrorMessage>
                                    )}
                                </div>
                              </div>
                              <div className="flex flex-col md:flex-row justify-between gap-4">
                                <div>
                                  <label
                                    htmlFor="city"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    City
                                  </label>
                                  <div className="mt-2">
                                    <Field
                                      type="text"
                                      name="city"
                                      id="city"
                                      className="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:leading-6"
                                    />
                                    {touched.city && errors && errors.city && (
                                      <ErrorMessage name="city">
                                        {(msg) => (
                                          <div className=" text-red-600">
                                            {msg}
                                          </div>
                                        )}
                                      </ErrorMessage>
                                    )}
                                  </div>
                                </div>

                                <div>
                                  <label
                                    htmlFor="region"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    State / Province
                                  </label>
                                  <div className="mt-2">
                                    <Field
                                      type="text"
                                      name="state"
                                      id="state"
                                      className="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:leading-6"
                                    />
                                    {touched.state &&
                                      errors &&
                                      errors.state && (
                                        <ErrorMessage name="state">
                                          {(msg) => (
                                            <div className=" text-red-600">
                                              {msg}
                                            </div>
                                          )}
                                        </ErrorMessage>
                                      )}
                                  </div>
                                </div>

                                <div>
                                  <label
                                    htmlFor="postal-code"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    ZIP / Postal code
                                  </label>
                                  <div className="mt-2">
                                    <Field
                                      type="text"
                                      name="postalCode"
                                      id="postalCode"
                                      className="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:leading-6"
                                    />
                                    {touched.postalCode &&
                                      errors &&
                                      errors.postalCode && (
                                        <ErrorMessage name="postalCode">
                                          {(msg) => (
                                            <div className=" text-red-600">
                                              {msg}
                                            </div>
                                          )}
                                        </ErrorMessage>
                                      )}
                                  </div>
                                </div>
                              </div>

                              <div className="relative flex gap-x-3">
                                <div className="flex h-6 items-center">
                                  <input
                                    id="comments"
                                    name="comments"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                  />
                                </div>
                                <div className="text-sm leading-6">
                                  <label
                                    htmlFor="comments"
                                    className="font-medium text-gray-900"
                                  >
                                    Save this information for next time
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col md:flex-row text-center md:gap-4">
                          <NavLink
                            to={"/cart"}
                            className="uppercase w-full hover:bg-violet-400 rounded-md text-gray-900 border-solid border-[0.1px]  border-violet-400 py-4 px-9 self-start mt-3 min-w-5"
                          >
                            Return to cart
                          </NavLink>
                          <button
                            type="submit"
                            className="uppercase w-full bg-violet-400 rounded-md text-gray-900 border-solid border-[0.1px] py-4 px-9 self-start mt-3"
                          >
                            Continue to shipping
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
                <div>
                  <ul className="flex flex-col divide-y divide-gray-700 overflow-auto max-h-[44rem]">
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
      </AnimatedPage>
    </>
  );
};
export default Checkout;
