import { Outlet, Link } from "react-router-dom";
import React from "react";
import logo from "../img/Logo.png";
const Banner = ({ registerUser }) => {
  return (
    <>
      <header className="banner">
        <div className="header">
          <div className="banner__text">
            <div className="banner__fix"></div>
            <Link to="/faq">
              <img src={logo}></img>
            </Link>
            <Link to="/login">
              <div className="banner__quit" onClick={() => registerUser()}>
                <a>Выход</a>
              </div>
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
