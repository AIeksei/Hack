import React, { useEffect, useState } from "react";
import { Message } from "./message";
import { Input } from "antd";
import socketIO from "socket.io-client";
const socket = socketIO.connect("http://localhost:5000");

const { TextArea } = Input;
const Active = ({ info, name }) => {
  const [value, setValue] = useState();
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
      <TextArea
        onChange={(e) => setValue(e.target.value)}
        size="large"
        value={value}
        placeholder="Введите текст сообщения…"
        autosize={{ minRows: 1, maxRows: 6 }}
      />
      <button onClick={() => sendmessage()}>Тест</button>
    </div>
  );
};

export { Active };
