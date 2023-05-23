import React from "react";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <div className="faq__root">
      <div className="faq__questions">
        <h1> Проверьте есть ли ваш вопрос в ЧаВо?</h1>
        <h3>Вопрос</h3>
        <a>Ответ</a>
        <h3>Вопрос</h3>
        <a>Ответ</a>
        <h3>Вопрос</h3>
        <a>Ответ</a>

        <h3> Моего вопроса нет, что делать?</h3>
        <a>Попробуйте спросить у нашей поддержки. Нажмите на кнопку</a>
        <Popup
          trigger={
            <div className="faq__support">
              <div className="faq__support__button">
                {" "}
                Обратиться в поддержку
              </div>
            </div>
          }
          position="right center"
        >
          <div>
            <h1>Выберите свою проблему</h1>
            <Link to="/support">
              <div className="popup__choosing">
                <h2>1.Финансирование поставщиков маркетплейсов</h2>{" "}
              </div>
            </Link>
            <Link to="/support">
              {" "}
              <div className="popup__choosing">
                <h2>2.Кредит на исполнение госконтакта</h2>{" "}
              </div>
            </Link>
            <Link to="/support">
              {" "}
              <div className="popup__choosing">
                <h2>3.Факторинг</h2>{" "}
              </div>
            </Link>
          </div>
        </Popup>
      </div>
    </div>
  );
};

export { Faq };
