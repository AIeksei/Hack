import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(2);
  const [moderatorId, setModeratorId] = useState(3);
  const [email, setEmail] = useState("arte");
  const [surname, setSurname] = useState(null);
  const [name, setName] = useState("Аркадий");
  const [patronim, setPatronim] = useState(null);
  const [inn, setInn] = useState(null);
  const [accNumber, setAccNumber] = useState(null);
  const [passport, setPassport] = useState(null);
  const [snils, setSnils] = useState(null);
  const [nickname, setNickname] = useState(null);
  const [problemId, setProblemId] = useState(null);
  const [enabled, setEnabled] = useState(true);
  const [enabledManage, setEnabledManage] = useState(true);
  const signout = (cb) => {
    cb();
  };
  const signinUser = (
    userId,
    name,
    surname,
    patronim,
    inn,
    accNumber,
    passport,
    snils,
    email,
    cb
  ) => {
    setUserId(userId);
    setEmail(email);
    setSurname(surname);
    setName(name);
    setPatronim(patronim);
    setInn(inn);
    setAccNumber(accNumber);
    setPassport(passport);
    setSnils(snils);
    setEnabled(true);
    cb();
  };

  const value = {
    userId,
    name,
    surname,
    patronim,
    inn,
    accNumber,
    passport,
    snils,
    email,
    enabled,
    signinUser,
    signout,
  };
  const signinMod = (moderatorId, nickname, problemId, cb) => {
    setModeratorId(moderatorId);
    setNickname(nickname);
    setProblemId(problemId);
    setEnabledManage(true);
    cb();
  };

  const valueMod = {
    moderatorId,
    nickname,
    problemId,
    enabledManage,
    signinMod,
    signout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
