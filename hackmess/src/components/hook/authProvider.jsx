import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [id, setId] = useState(2);
  const [email, setEmail] = useState(null);
  const [surname, setSurname] = useState(null);
  const [name, setName] = useState(null);
  const [patronim, setPatronim] = useState(null);
  const [inn, setInn] = useState(null);
  const [accNumber, setAccNumber] = useState(null);
  const [passport, setPassport] = useState(null);
  const [snils, setSnils] = useState(null);
  const [enabled, setEnabled] = useState(true);
  const [moderator, setModerator] = useState(null);

  const signin = (
    id,
    surname,
    name,
    patronim,
    inn,
    accNumber,
    passport,
    snils,
    email,
    moderator,
    cb
  ) => {
    setId(id);
    setEmail(email);
    setSurname(surname);
    setName(name);
    setPatronim(patronim);
    setInn(inn);
    setAccNumber(accNumber);
    setPassport(passport);
    setSnils(snils);
    setEnabled(true);
    setModerator(moderator);
    cb();
  };
  const signout = (cb) => {
    setEnabled(false);
    cb();
  };

  const value = {
    id,
    surname,
    name,
    patronim,
    inn,
    accNumber,
    passport,
    snils,
    email,
    moderator,
    enabled,
    signin,
    signout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
