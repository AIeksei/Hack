import { Link } from "react-router-dom";
import { UseAuth } from "../components/hook/useAuth";
import { AxiosLogin } from "../components/axiosLogin";
import React, { useContext, useState } from "react";
import { WebsocketContext } from "../components/hook/websocket";
const AuthUser = ({ name, isUser }) => {
  const [valueEmail, setValueEmail] = useState("");
  const [valuePass, setValuePass] = useState("");
  const user = useContext(WebsocketContext);
  const handleSubmit = (isUser) => {
    console.log(valueEmail, valuePass);
    isUser ? user.value.registerUser() : user.value.registerManager();
    AxiosLogin(isUser, { signin }, valueEmail, valuePass);
  };
  const { signin } = UseAuth;
  return (
    <div className="login">
      <form className="login__form">
        <h1>Авторизация {name}</h1>
        <input
          placeholder="e-mail"
          type="text"
          className="login__input"
          onChange={(e) => setValueEmail(e.target.value)}
          value={valueEmail}
        ></input>
        <div className="Err" id="emERR"></div>
        <input
          placeholder="Пароль"
          type="password"
          className="login__input"
          onChange={(e) => setValuePass(e.target.value)}
          value={valuePass}
        ></input>
        <div className="Err" id="authERR"></div>
        {isUser ? (
          <>
            <Link to="/faq">
              <button
                type="submit"
                className="login__button"
                onClick={() => handleSubmit(isUser)}
              >
                Войти
              </button>
            </Link>
            <br></br>
            <Link to="/manage">Я менеджер</Link>
          </>
        ) : (
          <>
            <Link to="/managesupport">
              <button
                type="submit"
                className="login__button"
                onClick={() => handleSubmit(isUser)}
              >
                Войти
              </button>
            </Link>
            <br></br>
            <Link to="/login">Я пользователь</Link>
          </>
        )}
      </form>
    </div>
  );
};

export { AuthUser };
