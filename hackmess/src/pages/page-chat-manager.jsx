import React, { useEffect, useState } from "react";
import { Pick } from "../components/pick";
import { Active } from "../components/active";
import { More } from "../components/more";
import { createContext } from "react";

export const scriptContext = createContext("");
const arrMessages = [
  {
    text: "Тест Тест",
    data: "22 мээээй",
    manager_id: null,
    user_id: 2,
    chat_id: 1,
  },
  {
    text: "Тест Тест ТЕст ТЕст ТЕст",
    data: "23 мээээй",
    manager_id: 2,
    user_id: null,
    chat_id: 1,
  },
  {
    text: "Что делать если сервер не работает",
    data: "22 мээээй",
    manager_id: null,
    user_id: 3,
    chat_id: 2,
  },
  {
    text: "Смени версию",
    data: "22 мээээй",
    manager_id: 2,
    user_id: null,
    chat_id: 2,
  },
  {
    text: "не работает",
    data: "22 мээээй",
    manager_id: null,
    user_id: 3,
    chat_id: 2,
  },
  {
    text: "Тогда ужас",
    data: "23 мээээй",
    manager_id: 2,
    user_id: null,
    chat_id: 2,
  },
  {
    text: "Спасите помогите",
    data: "22 мээээй",
    manager_id: null,
    user_id: 2,
    chat_id: 3,
  },
  {
    text: "ААААААААААААААА",
    data: "22 мээээй",
    manager_id: 4,
    user_id: null,
    chat_id: 3,
  },
  {
    text: "яяяяяяяяяяяяяяяяяя",
    data: "22 мээээй",
    manager_id: null,
    user_id: 2,
    chat_id: 3,
  },
  {
    text: "я сдаюсь",
    data: "23 мээээй",
    manager_id: 4,
    user_id: null,
    chat_id: 3,
  },
  {
    text: "пожить пожить",
    data: "22 мээээй",
    manager_id: null,
    user_id: 2,
    chat_id: 3,
  },
  {
    text: "все живите не будет",
    data: "22 мээээй",
    manager_id: 4,
    user_id: null,
    chat_id: 3,
  },
];
const PageChatManager = () => {
  const [script, setScript] = useState("");
  useEffect(() => {
    console.log(script);
  }, [script]);
  const [chat, setChat] = useState("");
  return (
    <scriptContext.Provider value={{ script, setScript }}>
      <div className="chat__root">
        <Pick isUser={false} setChat={setChat} />
        <Active
          info="Артем Перевертайло"
          name={false}
          arrMessages={arrMessages}
          chat={chat}
        />
        <More isUser={false} />
      </div>
    </scriptContext.Provider>
  );
};

export { PageChatManager };
