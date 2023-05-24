import React, { useContext, useEffect, useState } from "react";
import { Message } from "./message";
import { Input } from "antd";
import TextareaAutosize from "react-textarea-autosize";
import send from "../img/paper.svg";
import socketIO from "socket.io-client";
import { scriptContext } from "../pages/page-chat-manager";
const socket = socketIO.connect("http://localhost:5000");

const Active = ({ info, name }) => {
  const { script, setScript } = useContext(scriptContext);
  const [value, setValue] = useState();
  useEffect(() => {
    setValue(script);
  }, [script]);

  const [message, setMessage] = useState([]);
  useEffect(() => {
    socket.on("response", (data) => setMessage([...message, data]));
  });
  function sendmessage() {
    socket.emit("message", {
      text: value,
      name: "Петя",
      isManage: { name },
      id: `${socket.id}`,
      socketID: socket.id,
    });
    setValue("");
  }

  return (
    <div className="chat__active">
      <h2>{info}</h2>
      <div className="chat__active__body">
        {message.map((type) =>
          type.isManage.name ? (
            <Message isUser={false} name={type.name} text={type.text}></Message>
          ) : (
            <Message isUser={true} name={type.name} text={type.text}></Message>
          )
        )}
      </div>
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
    </div>
  );
};

export { Active };
