import React from "react";

export const Footer = () => {
  return (
    <div className={`pt-10 pb-16 md:pt-28 md:pb-28 w-full mt-auto`}>
      <div className="uppercase sm:max-w-xl md:max-w-3xl lg:max-w-6xl px-5 m-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <h2 className="logo font-bold text-2xl self-start">
          wi<span className="logo font-light">Books</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-20">
          <div>
            <h3 className="text-xl mb-6">About Us</h3>
            <p className="mb-4">Vision</p>
          </div>
          <div>
            <h3 className="text-xl mb-6">Discover</h3>
            <p className="mb-4">Home</p>
            <p className="mb-4">Books</p>
            <p className="mb-4">Authors</p>
          </div>
          <div>
            <h3 className="text-xl mb-6">My Account</h3>
            <p className="mb-4">Sign in</p>
            <p className="mb-4">View cart</p>
            <p className="mb-4">My wishtlist</p>
          </div>
          <div>
            <h3 className="text-xl mb-6">Help</h3>
            <p className="mb-4">Help center</p>
            <p className="mb-4">Contact us</p>
          </div>
        </div>
      </div>
    </div>
  );
};
