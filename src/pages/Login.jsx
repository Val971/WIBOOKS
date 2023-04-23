import React from "react";
import { NavLink, Navigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { getAuthUser, logIn } from "../redux/slices/authSlice";
import { Container } from "../layout/Container";
import { Path } from "../components/Path";
import AnimatedPage from "../layout/AnimatedPage";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Sign = () => {
  const dispatch = useDispatch();
  const user = useSelector(getAuthUser);

  if (user && user.userName) {
    return <Navigate to="/home" replace={true} />;
  }
  return (
    <AnimatedPage>
      <Path pathName={"Home"} navigation={"/home"} text={"Login"} />
      <Container>
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign in</h1>
            <p className="text-sm dark:text-gray-400">
              Sign in to access your account
            </p>
          </div>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values) => {
              dispatch(logIn({ values }));
            }}
          >
            {({ errors, touched }) => (
              <Form className="space-y-12 ng-untouched ng-pristine ng-valid">
                <div className="space-y-4 w-72">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm">
                      Email address
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                    />
                    {touched.email && errors && errors.email && (
                      <ErrorMessage name="email">
                        {(msg) => <div className=" text-red-600">{msg}</div>}
                      </ErrorMessage>
                    )}
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label htmlFor="password" className="text-sm">
                        Password
                      </label>
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        className="text-xs hover:underline dark:text-gray-400"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      placeholder="*****"
                      className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                    />
                    {touched.password && errors && errors.password && (
                      <ErrorMessage name="password">
                        {(msg) => <div className=" text-red-600">{msg}</div>}
                      </ErrorMessage>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <button
                      type="submit"
                      className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900"
                    >
                      Sign in
                    </button>
                  </div>
                  <p className="px-6 text-sm text-center dark:text-gray-400">
                    Don't have an account yet?
                    <NavLink
                      rel="noopener noreferrer"
                      to="/register"
                      className="hover:underline dark:text-violet-400"
                    >
                      Sign up
                    </NavLink>
                    .
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Container>
    </AnimatedPage>
  );
};
export default Sign;
