import { createContext, useState } from "react";

export const AuthContextMod = createContext(null);

export const AuthProviderMod = ({ children }) => {
  const [moderatorId, setModeratorId] = useState(null);
  const [nickname, setNickname] = useState("Sanek");
  const [problemId, setProblemId] = useState(null);
  const [enabledManage, setEnabledManage] = useState(true);
  const signout = (cb) => {
    cb();
  };
  const signinMod = (moderatorId, nickname, problemId, cb) => {
    setModeratorId(moderatorId);
    setNickname(nickname);
    setProblemId(problemId);
    setEnabledManage(true);
    cb();
  };

  const value = {
    moderatorId,
    nickname,
    problemId,
    enabledManage,
    signinMod,
    signout,
  };

  return (
    <AuthContextMod.Provider value={value}>{children}</AuthContextMod.Provider>
  );
};
