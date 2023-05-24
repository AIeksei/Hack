import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(2);
  const [email, setEmail] = useState("artemper2002@gmail.com");
  const [surname, setSurname] = useState("Перевертайло");
  const [name, setName] = useState("Артем");
  const [patronim, setPatronim] = useState("Алексеевич");
  const [inn, setInn] = useState(7324546546546);
  const [accNumber, setAccNumber] = useState(54656546546);
  const [passport, setPassport] = useState(65466456546);
  const [snils, setSnils] = useState(6546464564);
  const [enabled, setEnabled] = useState(true);
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

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
