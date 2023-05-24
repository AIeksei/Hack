import { Outlet, Link } from "react-router-dom";
import React, { useContext } from "react";
import logo from "../img/Logo.png";
import { WebsocketContext } from "./hook/websocket";
const Banner = () => {
  const user = useContext(WebsocketContext);
  console.log(user);
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
              <div className="banner__quit">
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
