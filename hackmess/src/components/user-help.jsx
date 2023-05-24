import React, { useContext } from "react";
import { scriptContext } from "../pages/page-chat-manager";

const arr = [
  { name: "ИНН", text: "12312031239012903" },
  { name: "Паспорт", text: "2342342349234239423" },
  { name: "Номер Счета", text: "3290423904902342390423" },
  { name: "Номер Телефона", text: "234389438943894343" },
  { name: "СНИЛС", text: "94348594590349053459034" },
];
const Help = ({ user }) => {
  const { script, setScript } = useContext(scriptContext);
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
