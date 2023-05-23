import React from "react";
import { Message } from "./message";

const Active = ({ info, name }) => {
  const arr = [
    { isUser: true, name: "Перевертайло Артем", text: "Текст текст текст" },
    {
      isUser: false,
      name: "Менеджер",
      text: "Текст текст текст Текст текст текст Текст текст текст",
    },
    { isUser: true, name: "Перевертайло Артем", text: "Спасибо" },
    {
      isUser: false,
      name: "Менеджер",
      text: "Текст текстТекст текст текст Текст текст текст Текст текст текст  текст Текст текст текст Текст текст текст",
    },
  ];
  return (
    <div className="chat__active">
      <h2>{info}</h2>
      <div className="chat__active__body">
        {arr.map((type) => (
          <Message
            isUser={type.isUser}
            name={type.name}
            text={type.text}
          ></Message>
        ))}
      </div>
      <textarea
        className="chat__active__input"
        placeholder="Введите текст"
      ></textarea>
    </div>
  );
};

export { Active };
