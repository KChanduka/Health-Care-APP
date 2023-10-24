import React from "react";
import Logo from "../assets/logoHome.png";
import { Link } from "react-router-dom";
import HomeLogo from "./HomeLogo";

function Navbar() {
  return (
    <div className="flex items-center justify-between">
      {/* logo */}
      <div>
        <Link to="/">
          <HomeLogo />
        </Link>
      </div>

      {/* nav links */}
      <div className="flex">
        <ul className="flex text-2xl font-semibold gap-28 tracking-wider  ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Services</Link>
          </li>
          <li>
            <Link to="/services">Features</Link>
          </li>
          <li>
            <Link to="/brands">Contact</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li className="bg-teal-950 px-3 py-2 rounded-full bg-opacity-60 text-white">
            <Link to="/contact">Get Started</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
