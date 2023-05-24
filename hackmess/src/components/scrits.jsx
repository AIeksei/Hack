import React from "react";
import { Script } from "./script";
const Scripts = () => {
  const arr = [
    "Здравствуйте уважаемый ФИО нейм",
    "Спасибо за обращение в нашу компанию",
    "Для решения этой проблемы я могу предложить вам",
  ];

  return (
    <>
      <div className="chat__answers">
        <h2>Скриптованный ответ</h2>
        <div className="chat__answers__scripts">
          {arr.map((type) => (
            <Script script={type}></Script>
          ))}
        </div>
      </div>
    </>
  );
};

export { Scripts };
