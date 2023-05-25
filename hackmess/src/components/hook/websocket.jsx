import SockJS from "sockjs-client";
import { over } from "stompjs";
import { useState, useEffect, createContext } from "react";
import { UseAuth } from "./useAuth";
import { UseAuthMod } from "./useAuthMod";
export const WebsocketContext = createContext("");
var stompClient = null;

export const WebsocketProvider = ({ children }) => {
  const user = UseAuth();
  const manager = UseAuthMod();
  const [messages, setMessages] = useState([]);
  const [chats, setChats] = useState([]);

  const connect = () => {
    let Sock = new SockJS("http://localhost:5500/ws");
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  };
  const connectMod = () => {
    let Sock = new SockJS("http://localhost:5500/ws");
    stompClient = over(Sock);
    stompClient.connect({}, onConnectedMod, onError);
  };
  //конект юзера
  const onConnected = () => {
    stompClient.subscribe("/send/chats", chatsUpdate);
    stompClient.subscribe("/send/message", messageUpdate);
    userJoin();
  };
  //коннект менеджера
  const onConnectedMod = () => {
    stompClient.subscribe("/send/chats", chatsUpdate);
    stompClient.subscribe("/send/message", messageUpdate);
    managerJoin();
  };

  //Отправка чатов юзеру
  const userJoin = () => {
    var chatMessage = {
      user_id: user.userId,
    };
    stompClient.send("/user/chats", {}, JSON.stringify(chatMessage));
  };
  //Получение чатов юзеру
  const chatsUpdate = (payload) => {
    var payloadData = JSON.parse(payload.body);
    chats.push(payloadData);
    setChats([...chats]);
  };
  //Отправка чатов менеджеру
  const managerJoin = () => {
    var chatMessage = {
      manager_id: manager.manager_id,
    };
    stompClient.send("/manager/chats", {}, JSON.stringify(chatMessage));
  };
  //Получение чатов юзеру
  const messageUpdate = (payload) => {
    var payloadData = JSON.parse(payload.body);
    messages.push(payloadData);
    setMessages([...messages]);
  };
  //остановка диалога
  const stopDialog = ({ chat_id }) => {
    var chatMessage = {
      chat_id: chat_id,
    };
    stompClient.send("/chat/stop", {}, JSON.stringify(chatMessage));
  };
  //смена менеджера
  const changeManager = (chat_id, problem_id) => {
    var chatMessage = {
      chat_id: chat_id,
      problem_id: problem_id,
    };
    stompClient.send("/chat/update", {}, JSON.stringify(chatMessage));
  };
  //Вывод сообщений по чату
  const chatMessages = ({ chat_id }) => {
    var chatMessage = {
      chat_id: chat_id,
    };
    stompClient.send("/ms/message/find", {}, JSON.stringify(chatMessage));
  };

  //отправка сообщения пользователем
  const sendValue = ({ chat_id, value }) => {
    if (stompClient) {
      var chatMessage = {
        user_id: user.userId,
        content: value,
        chat_id: chat_id,
      };
      console.log(chatMessage);
      stompClient.send("/ms/message", {}, JSON.stringify(chatMessage));
    }
  };
  //отправка сообщения менеджером
  const sendValueMod = ({ chat_id }) => {
    if (stompClient) {
      var chatMessage = {
        manager_id: manager.managerId,
        content: value,
        chat_id: chat_id,
      };
      console.log(chatMessage);
      stompClient.send("/ms/message", {}, JSON.stringify(chatMessage));
    }
  };
  //Создание чата по проблеме
  const userPickProblem = ({ problem_id }) => {
    var chatMessage = {
      user_id: user.userId,
      problem_id: problem_id,
    };
    stompClient.send("/chat/create", {}, JSON.stringify(chatMessage));
  };
  //ошибка
  const onError = (err) => {
    console.log(err);
  };
  //вход юзера
  const registerUser = () => {
    connect();
  };
  //вход менеджера
  const registerManager = () => {
    connectMod();
  };
  const value = {
    sendValue,
    sendValueMod,
    registerUser,
    registerManager,
    userPickProblem,
    stopDialog,
    changeManager,
    chatMessages,
    messages,
    chats,
  };
  return (
    <WebsocketContext.Provider value={{ value }}>
      {children}
    </WebsocketContext.Provider>
  );
};
