import React from "react";
import { FaqComp } from "../components/faq";
import { PopupProblem } from "../components/popup-problem";

const Faq = () => {
  return (
    <div className="faq__root">
      <div className="faq__questions">
        <h1> Проверьте есть ли ваш вопрос в ЧаВо?</h1>
        <FaqComp question="А как?" answer="А вот так!" />
        <FaqComp
          question="Моего вопроса нет, что делать?"
          answer="Попробуйте спросить у нашей поддержки. Нажмите на кнопку"
        />
        <PopupProblem />
      </div>
    </div>
  );
};

export { Faq };
