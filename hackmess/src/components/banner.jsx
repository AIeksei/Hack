import { Outlet, Link } from "react-router-dom";
import React from "react";
import logo from "../img/Logo.png";
const Banner = () => {
  return (
    <>
      <header className="banner">
        <div className="header">
          <div className="banner__text">
            <Link to="/faq">
              <img src={logo}></img>
            </Link>
          </div>
        </div>
      </header>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export { Banner };
