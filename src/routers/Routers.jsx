import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const Home = lazy(() => import("../pages/Home"));
const Cart = lazy(() => import("../pages/Cart"));
const Shop = lazy(() => import("../pages/Shop"));
const Shipping = lazy(() => import("../pages/Shipping"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const Admin = lazy(() => import("../pages/Admin"));
const Checkout = lazy(() => import("../pages/Checkout"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const Error404 = lazy(() => import("../pages/Error404"));

export const Routers = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center space-x-2 h-screen">
          <div className="w-4 h-4 rounded-full animate-puls bg-dark-green dark:bg-violet-400"></div>
          <div className="w-4 h-4 rounded-full animate-puls bg-dark-green dark:bg-violet-400"></div>
          <div className="w-4 h-4 rounded-full animate-puls bg-dark-green dark:bg-violet-400"></div>
        </div>
      }
    >
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="admin" element={<Admin />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="shipping" element={<Shipping />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};
