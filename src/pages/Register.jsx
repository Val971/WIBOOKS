import React from "react";
import { NavLink, Navigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { register, getAuthUser } from "../redux/slices/authSlice";
import { Container } from "../layout/Container";
import { Path } from "../components/Path";
import AnimatedPage from "../layout/AnimatedPage";

const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  userName: Yup.string()
    .min(3, "Password must be at least 3 characters")
    .required("User name is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Register = () => {
  const dispatch = useDispatch();
  const user = useSelector(getAuthUser);

  if (user && user.userName) {
    return <Navigate to="/home" replace={true} />;
  }
  return (
    <AnimatedPage>
      <Path pathName={"Home"} navigation={"/home"} text={"Register"} />
      <Container>
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign up</h1>
            <p className="text-sm dark:text-gray-400">
              Sign in to access your account
            </p>
          </div>
          <Formik
            initialValues={{ userName: "", email: "", password: "" }}
            validationSchema={registerSchema}
            onSubmit={(values) => {
              dispatch(register({ values }));
            }}
          >
            {({ errors, touched }) => (
              <Form className="space-y-12 ng-untouched ng-pristine ng-valid">
                <div className="space-y-4 w-72">
                  <div>
                    <label htmlFor="userName" className="block mb-2 text-sm">
                      UserName
                    </label>
                    <Field
                      type="userName"
                      name="userName"
                      id="userName"
                      placeholder="userName"
                      className="w-full px-3 py-2 border rounded-md border-gray-400 dark:bg-gray-900 dark:text-gray-100"
                    />
                    {touched.userName && errors && errors.userName && (
                      <ErrorMessage name="userName">
                        {(msg) => <div className=" text-red-600">{msg}</div>}
                      </ErrorMessage>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm">
                      Email address
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="w-full px-3 py-2 border rounded-md border-gray-400 dark:bg-gray-900 dark:text-gray-100"
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
                      className="w-full px-3 py-2 border rounded-md border-gray-400 dark:bg-gray-900 dark:text-gray-100"
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
                      Sign up
                    </button>
                  </div>
                  <p className="px-6 text-sm text-center dark:text-gray-400">
                    Don't have an account yet?
                    <NavLink
                      rel="noopener noreferrer"
                      to="/register"
                      className="hover:underline dark:text-violet-400"
                    >
                      Sign in
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
export default Register;
