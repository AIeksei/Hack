import { Banner } from "./components/banner";
import { AuthProvider } from "./components/hook/authProvider";
import { RequireAuth } from "./components/hook/requireAuth";
import { AuthUser } from "./pages/page-auth";
import { PageChatManager } from "./pages/page-chat-manager";
import { PageChatUser } from "./pages/page-chat-user";
import { Faq } from "./pages/page-faq";
import { PagePlease } from "./pages/page-please";
import "./sass/style.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
function App() {
  return (
    <AuthProvider>
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
            <Route exact path="/" element={<RequireAuth />}>
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
            </Route>
            <Route exact path="/faq" element={<Faq />}></Route>
            <Route exact path="/please" element={<PagePlease />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
