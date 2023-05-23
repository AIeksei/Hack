import { Banner } from "./components/banner";
import { AuthUser } from "./pages/page-auth";
import { PageChatManager } from "./pages/page-chat-manager";
import { PageChatUser } from "./pages/page-chat-user";
import { Faq } from "./pages/page-faq";
import "./sass/style.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Banner />}>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
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
          <Route
            exact
            path="/managesupport"
            element={<PageChatManager />}
          ></Route>
          <Route exact path="/support" element={<PageChatUser />}></Route>
          <Route exact path="/faq" element={<Faq />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
