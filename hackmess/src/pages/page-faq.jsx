import React from "react";
import { FaqComp } from "../components/faq";
import { PopupProblem } from "../components/popup-problem";

const Faq = () => {
  return (
    <div className="faq__root">
      <div className="faq__questions">
        <h1> Проверьте есть ли ваш вопрос в ЧаВо?</h1>
        <FaqComp question="А как?" answer="А вот так!" />

        <h3> Моего вопроса нет, что делать?</h3>
        <a>Попробуйте спросить у нашей поддержки. Нажмите на кнопку</a>
        <PopupProblem />
      </div>
    </div>
  );
};

export { Faq };
