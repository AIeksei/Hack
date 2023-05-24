import React, { useContext, useEffect, useState } from "react";
import { Message } from "./message";
import { Input } from "antd";
import TextareaAutosize from "react-textarea-autosize";
import send from "../img/paper.svg";
import SockJS from "sockjs-client";
import socketIO from "socket.io-client";
import { over } from "stompjs";

import { scriptContext } from "../pages/page-chat-manager";
const Sock = new SockJS("http://localhost:5000/ws");
var stompClient = null;
const socket = socketIO.connect("http://localhost:5000");

const Active = ({ info, name, arrMessages, chat, isUser }) => {
  const [privateChats, setPrivateChats] = useState(new Map());
  const [publicChats, setPublicChats] = useState([]);
  const [tab, setTab] = useState("CHATROOM");
  const [userData, setUserData] = useState({
    username: "",
    receivername: "",
    connected: false,
    message: "",
  });
  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const connect = () => {
    let Sock = new SockJS("http://localhost:8080/ws");
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    setUserData({ ...userData, connected: true });
    stompClient.subscribe("/chatroom/public", onMessageReceived);
    stompClient.subscribe(
      "/user/" + userData.username + "/private",
      onPrivateMessage
    );
    userJoin();
  };

  const userJoin = () => {
    var chatMessage = {
      senderName: userData.username,
      status: "JOIN",
    };
    stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
  };

  const onMessageReceived = (payload) => {
    var payloadData = JSON.parse(payload.body);
    switch (payloadData.status) {
      case "JOIN":
        if (!privateChats.get(payloadData.senderName)) {
          privateChats.set(payloadData.senderName, []);
          setPrivateChats(new Map(privateChats));
        }
        break;
      case "MESSAGE":
        publicChats.push(payloadData);
        setPublicChats([...publicChats]);
        break;
    }
  };

  const onPrivateMessage = (payload) => {
    console.log(payload);
    var payloadData = JSON.parse(payload.body);
    if (privateChats.get(payloadData.senderName)) {
      privateChats.get(payloadData.senderName).push(payloadData);
      setPrivateChats(new Map(privateChats));
    } else {
      let list = [];
      list.push(payloadData);
      privateChats.set(payloadData.senderName, list);
      setPrivateChats(new Map(privateChats));
    }
  };

  const onError = (err) => {
    console.log(err);
  };

  const handleMessage = (event) => {
    const { value } = event.target;
    setUserData({ ...userData, message: value });
  };
  const sendValue = () => {
    if (stompClient) {
      var chatMessage = {
        senderName: userData.username,
        message: userData.message,
        status: "MESSAGE",
      };
      console.log(chatMessage);
      stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
      setUserData({ ...userData, message: "" });
    }
  };

  const sendPrivateValue = () => {
    if (stompClient) {
      var chatMessage = {
        senderName: userData.username,
        receiverName: tab,
        message: userData.message,
        status: "MESSAGE",
      };

      if (userData.username !== tab) {
        privateChats.get(tab).push(chatMessage);
        setPrivateChats(new Map(privateChats));
      }
      stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
      setUserData({ ...userData, message: "" });
    }
  };

  const handleUsername = (event) => {
    const { value } = event.target;
    setUserData({ ...userData, username: value });
  };

  const registerUser = () => {
    connect();
  };

  const { script, setScript } = useContext(scriptContext);
  const [value, setValue] = useState();
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
    socket.on("response", (data) => setMessage([...message, data]));
  }, [chat]);
  function sendmessage() {
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
        {message.map((type) =>
          !type.user_id ? (
            <Message isUser={false} name={type.name} text={type.text}></Message>
          ) : (
            <Message isUser={true} name={type.name} text={type.text}></Message>
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
