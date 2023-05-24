import { Banner } from "./components/banner";
import { AuthProvider } from "./components/hook/authProvider";
import { AuthProviderMod } from "./components/hook/authProviderManage";
import { RequireAuth } from "./components/hook/requireAuth";
import { RequireAuthMod } from "./components/hook/requireAuthMod";
import { AuthUser } from "./pages/page-auth";
import { PageChatManager } from "./pages/page-chat-manager";
import { PageChatUser } from "./pages/page-chat-user";
import { Faq } from "./pages/page-faq";
import { PagePlease } from "./pages/page-please";
import "./sass/style.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SockJS from "sockjs-client";
import { over } from "stompjs";
import { useState, useEffect } from "react";
var stompClient = null;
//const socket = socketIO.connect("http://localhost:5000");

function App() {
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
    let Sock = new SockJS("http://localhost:5500/ws");
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
    stompClient.send("/ms/message", {}, JSON.stringify(chatMessage));
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

  const registerUser = () => {
    console.log("dsdfsd");
    connect();
  };

  return (
    <AuthProvider>
      <AuthProviderMod>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Banner registerUser={registerUser} />}>
              <Route path="/" element={<Navigate to="/faq" replace />} />
              <Route path="*" element={<Navigate to="/faq" replace />} />
              <Route
                exact
                path="/login"
                element={<AuthUser name="Пользователя" isUser={true} />}
              ></Route>

              <Route
                exact
                path="/manage"
                element={<AuthUser name="Менеджера" isUser={false} />}
              ></Route>
              <Route exact path="/" element={<RequireAuthMod />}>
                <Route
                  exact
                  path="/managesupport"
                  element={<PageChatManager />}
                ></Route>
              </Route>
              <Route exact path="/" element={<RequireAuth />}>
                <Route exact path="/support" element={<PageChatUser />}></Route>
              </Route>
              <Route exact path="/faq" element={<Faq />}></Route>
              <Route exact path="/please" element={<PagePlease />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProviderMod>
    </AuthProvider>
  );
}

export default App;
