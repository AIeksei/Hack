import React, { useContext } from "react";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import { WebsocketContext } from "./hook/websocket";

const PopupProblem = () => {
  const user = useContext(WebsocketContext);
  return (
    <Popup
      trigger={<div className="faq__support">Обратиться в поддержку</div>}
      position="top center"
    >
      <div>
        <h1>Выберите свою проблему</h1>
        <Link to="/support">
          <div
            className="popup__choosing"
            onClick={() => user.value.userPickProblem(1)}
          >
            <h2>1.Финансирование поставщиков маркетплейсов</h2>{" "}
          </div>
        </Link>
        <Link to="/support">
          {" "}
          <div
            className="popup__choosing"
            onClick={() => user.value.userPickProblem(2)}
          >
            <h2>2.Кредит на исполнение госконтакта</h2>{" "}
          </div>
        </Link>
        <Link to="/support">
          {" "}
          <div
            className="popup__choosing"
            onClick={() => user.value.userPickProblem(3)}
          >
            <h2>3.Факторинг</h2>{" "}
          </div>
        </Link>
        <Link to="/support">
          {" "}
          <div
            className="popup__choosing"
            onClick={() => user.value.userPickProblem(0)}
          >
            <h2>4.Не знаю вид своей проблемы</h2>{" "}
          </div>
        </Link>
      </div>
    </Popup>
  );
};

export { PopupProblem };
