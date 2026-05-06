import React from "react";
import { LOGO_URL } from "../utils/constant";

export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img src={LOGO_URL} alt="logo" className="logo" />
        </div>
        <div className="navitems">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};
