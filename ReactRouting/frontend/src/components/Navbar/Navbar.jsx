import React from "react";
import logo from "../../assets/web_logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-5">
      <img width={90} src={logo} alt="" />
      <ul className="flex items-center shadow-lg shadow-white-500/40 rounded-full">
        <Link to="/">
          <li className="cursor-pointer py-2 px-4 inline-block">Home</li>
        </Link>
        <Link to="/products">
          <li className="cursor-pointer py-2 px-4 inline-block">Products</li>
        </Link>
        <Link to="/about">
          <li className="cursor-pointer py-2 px-4 inline-block">About</li>
        </Link>
        <Link to="/contact">
          <li className="cursor-pointer py-2 px-4 inline-block">Contact</li>
        </Link>
      </ul>
      <button className="py-2 px-5 bg-orange-500 shadow-lg shadow-orange-500/50 text-white rounded-full">
        Get Started
      </button>
    </div>
  );
};

export default Navbar;
