import React, { useContext, useEffect, useState } from "react";
import { Message } from "./message";
import { Input } from "antd";
import TextareaAutosize from "react-textarea-autosize";
import send from "../img/paper.svg";
import SockJS from "sockjs-client";
import socketIO from "socket.io-client";
import { over } from "stompjs";

import { scriptContext } from "../pages/page-chat-manager";
import { UseAuth } from "./hook/useAuth";
import { UseAuthMod } from "./hook/useAuthMod";

const Active = ({ info, name, arrMessages, chat, isUser }) => {
  const { script, setScript } = useContext(scriptContext);
  const socket = socketIO.connect("http://localhost:5000");
  const [value, setValue] = useState();
  const user = UseAuth();
  const mod = UseAuthMod();
  useEffect(() => {
    setValue(script);
  }, [script]);
  let arr = [];
  const [message, setMessage] = useState([]);
  useEffect(() => {
    for (let i = 0; i < arrMessages.length; i++)
      if (arrMessages[i].chat_id === chat) {
        arr.push(arrMessages[i]);
        console.log(arr);
      }
    setMessage(arr);
  }, [chat]);
  socket.on(`response/${chat}`, (data) => setMessage([...message, data]));
  function sendmessageUser() {
    socket.emit("message", {
      text: value,
      name: user.name,
      chat_id: chat,
      isManage: false,
      id: `${socket.id}`,
      socketID: socket.id,
    });
    setValue("");
  }
  function sendmessageMod() {
    socket.emit("message", {
      text: value,
      name: mod.nickname,
      chat_id: chat,
      isManage: true,
      id: `${socket.id}`,
      socketID: socket.id,
    });
    setValue("");
  }

  return (
    <div className="chat__active">
      <h2>{info}</h2>
      <div className="chat__active__body">
        {isUser
          ? message.map((type) =>
              !type.user_id ? (
                <Message
                  isUser={type.isManage}
                  name={type.name}
                  text={type.text}
                ></Message>
              ) : (
                <Message
                  isUser={type.isManage}
                  name={type.name}
                  text={type.text}
                ></Message>
              )
            )
          : message.map((type) =>
              !type.user_id ? (
                <Message
                  isUser={!type.isManage}
                  name={type.name}
                  text={type.text}
                ></Message>
              ) : (
                <Message
                  isUser={!type.isManage}
                  name={type.name}
                  text={type.text}
                ></Message>
              )
            )}
      </div>
      {isUser ? (
        <>
          <TextareaAutosize
            className="chat__active__input"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <img
            className="chat__active__img"
            src={send}
            onClick={() => sendmessageUser()}
          />
          <div className="chat__active__rate">Оценить менеджера</div>
        </>
      ) : (
        <>
          {
            /*activeChat.manager_id == user.id*/ true ? (
              <>
                <TextareaAutosize
                  className="chat__active__input"
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                />
                <img
                  className="chat__active__img"
                  src={send}
                  onClick={() => sendmessageMod()}
                />
              </>
            ) : (
              <></>
            )
          }
        </>
      )}
    </div>
  );
};

export { Active };
