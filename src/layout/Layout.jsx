import React from "react";
import { Routers } from "../routers/Routers";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Routers />
      <Footer />
    </div>
  );
};
