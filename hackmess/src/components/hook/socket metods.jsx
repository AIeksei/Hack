import SockJS from "sockjs-client";
import { over } from "stompjs";
import { useState, useEffect, createContext } from "react";
import getApi from "../api";
import { UseAuth } from "./useAuth";
import { UseAuthMod } from "./useAuthMod";
export const WebsocketContext = createContext("");
var stompClient = null;

export const WebsocketProvider = ({ children }) => {
  const user = UseAuth();
  console.log(user);
  const manager = UseAuthMod();
  const [privateChats, setPrivateChats] = useState(new Map());
  const [messages, setMessges] = useState();
  const [publicChats, setPublicChats] = useState([]);
  const [tab, setTab] = useState("CHATROOM");
  const [userData, setUserData] = useState({
    surname: "",
    name: "",
    patronim: "",
    inn: "",
    accNumber: "",
    passport: "",
    snils: "",
    email: "",
    user_id: "",
    connected: false,
  });
  const [managerData, setManagerData] = useState({
    manager_id: "",
    nickname: "",
    problem_id: "",
    is_available: "",
    connected: false,
  });
  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const connect = (e) => {
    let Sock = new SockJS("http://localhost:5500/ws");
    stompClient = over(Sock);
    stompClient.connect({}, onConnected(e), onError);
  };
  const onConnected = (e) => {
    if (e == true) {
      console.log(user);
      setUserData({
        surname: user.surname,
        name: user.name,
        patronim: user.patronim,
        inn: user.inn,
        accNumber: user.accNumber,
        passport: user.passport,
        snils: user.snils,
        email: user.email,
        user_id: user.user_id,
        connected: true,
      });
      stompClient.subscribe("/chatroom/public", onMessageReceived);
      stompClient.subscribe(
        "/user/" + userData.username + "/private",
        onPrivateMessage
      );
      userJoin();
    } else {
      setManagerData({
        manager_id: manager.managerId,
        nickname: manager.nickname,
        problem_id: manager.problemId,
        is_available: manager.isAvailable,
        connected: false,
      });
      stompClient.subscribe("/chatroom/public", onMessageReceived);
      stompClient.subscribe(
        "/user/" + userData.username + "/private",
        onPrivateMessage
      );
      managerJoin();
    }
  };

  const userJoin = () => {
    var chatMessage = {
      senderName: userData.username,
      status: "JOIN",
    };
    stompClient.send("/ms/message", {}, JSON.stringify(chatMessage));
  };

  const userChats = () => {
    var chatMessage = {
      user_id: userData.user_id,
    };
    stompClient.send("/ms/message", {}, JSON.stringify(chatMessage));
  };

  const stopDialog = (chat_id) => {
    var chatMessage = {
      chat_id: chat_id,
    };
    stompClient.send("/ms/message", {}, JSON.stringify(chatMessage));
  };

  const changeManager = (chat_id, problem_id) => {
    var chatMessage = {
      chat_id: chat_id,
      problem_id: problem_id,
    };
    stompClient.send("/ms/message", {}, JSON.stringify(chatMessage));
  };

  const onMessageReceived = (payload) => {
    var payloadData = JSON.parse(payload.body);
    switch (payloadData.status) {
      case "CHAT":
        if (!privateChats.get(payloadData.user_id)) {
          privateChats.set(payloadData.user_id, []);
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

  const handleMessage = (event) => {
    const { value } = event.target;
    setUserData({ ...userData, message: value });
  };
  const sendValue = (chat_id) => {
    if (stompClient) {
      var chatMessage = {
        user_id: userData.user_id,
        content: userData.content,
        chat_id: chat_id,
        status: "MESSAGE",
      };
      console.log(chatMessage);
      stompClient.send("/ms/message", {}, JSON.stringify(chatMessage));
      setUserData({ ...userData, message: "" });
    }
  };
  const sendValueMod = (chat_id) => {
    if (stompClient) {
      var chatMessage = {
        manager_id: userData.manager_id,
        content: userData.content,
        chat_id: chat_id,
        status: "MESSAGE",
      };
      console.log(chatMessage);
      stompClient.send("/ms/message", {}, JSON.stringify(chatMessage));
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
      stompClient.send("/ms/private-message", {}, JSON.stringify(chatMessage));
      setUserData({ ...userData, message: "" });
    }
  };

  const handleUsername = (event) => {
    const { value } = event.target;
    setUserData({ ...userData, username: value });
  };

  const managerJoin = () => {
    var chatMessage = {
      senderName: managerData.manager_id,
      status: "JOIN",
    };
    stompClient.send("/ms/message", {}, JSON.stringify(chatMessage));
  };
  const userPickProblem = (problem_id) => {
    var chatMessage = {
      user_id: userData.user_id,
      problem_id: problem_id,
    };
    stompClient.send("/ms/message", {}, JSON.stringify(chatMessage));
  };
  const managerChats = () => {
    var chatMessage = {
      manager_id: managerData.manager_id,
    };
    stompClient.send("/ms/message", {}, JSON.stringify(chatMessage));
  };

  const onError = (err) => {
    console.log(err);
  };

  const registerUser = () => {
    console.log("dsdfsd");
    connect(true);
  };
  const registerManager = () => {
    console.log("dsdfsd");
    connect(false);
  };
  const value = {
    handleMessage,
    sendValue,
    sendValueMod,
    sendPrivateValue,
    handleUsername,
    registerUser,
    registerManager,
    userPickProblem,
    stopDialog,
    changeManager,
    messages,
    privateChats,
  };
  return (
    <WebsocketContext.Provider value={{ value }}>
      {children}
    </WebsocketContext.Provider>
  );
};
