import React, { useContext } from "react";
import { scriptContext } from "../pages/page-chat-manager";
import { UseAuth } from "./hook/useAuth";

const Help = () => {
  const user = UseAuth();
  const arr = [
    { name: "ИНН", text: user.inn },
    { name: "Паспорт", text: user.passport },
    { name: "Номер Счета", text: user.accNumber },
    { name: "Номер Телефона", text: "+79454678765" },
    { name: "СНИЛС", text: user.snils },
  ];
  const { setScript } = useContext(scriptContext);
  return (
    <>
      <div className="chat__answers">
        <h2>Полезные данные</h2>

        {arr.map((type) => (
          <div
            className="chat__answers__script"
            onClick={() =>
              setScript((prev) => prev + ` ${type.name}: ${type.text}`)
            }
          >
            <h4>{type.name}</h4>
            <a>{type.text}</a>
          </div>
        ))}
      </div>
    </>
  );
};

export { Help };
