import React, { useState } from "react";
import { Message } from "./message";
import { Button, Input } from "antd";
import TextareaAutosize from 'react-textarea-autosize';
import send from "../img/paper.svg"
const { TextArea } = Input;
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
  const [value, setValue] = useState();
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
      <TextareaAutosize className="chat__active__input" value={value}/>
      <img className="chat__active__img" src = {send}/>
      {/*<TextArea
        onChange={(e) => setValue(e.target.value)}
        size="large"
        value={value}
        placeholder="Введите текст сообщения…"
        autosize={{ minRows: 1, maxRows: 6 }}
        />*/}
    </div>
  );
};

export { Active };
