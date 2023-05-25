import React, { useContext, useEffect, useState } from "react";
import { Message } from "./message";
import TextareaAutosize from "react-textarea-autosize";
import send from "../img/paper.svg";

import { scriptContext } from "../pages/page-chat-manager";
import { WebsocketContext } from "./hook/websocket";
import { UseAuth } from "./hook/useAuth";
var stompClient = null;
//const socket = socketIO.connect("http://localhost:5000");

const Active = ({ info, arrMessages, chat, isUser }) => {
  const values = useContext(WebsocketContext);
  const { script, setScript } = useContext(scriptContext);
  const [value, setValue] = useState();
  const user = UseAuth();
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
    //socket.on("response", (data) => setMessage([...message, data]));
  }, [chat]);
  function sendmessage() {
    isUser
      ? values.value.sendValue(chat, "value")
      : values.value.sendValueMod(chat, "value");
    /*socket.emit("message", {
      text: value,
      name: "Петя",
      isManage: { name },
      id: `${socket.id}`,
      socketID: socket.id,
    });*/
    setValue("");
  }

  return (
    <div className="chat__active">
      <h2>{info}</h2>
      <div className="chat__active__body">
        {values.value.messages.map((type) =>
          user.id == type.user_id ? (
            <Message isUser={true} name={type.name} text={type.text}></Message>
          ) : (
            <Message isUser={false} name={type.name} text={type.text}></Message>
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
            onClick={() => sendmessage()}
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
                  onClick={() => sendmessage()}
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
