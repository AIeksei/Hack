import React from "react";

const Help = ({ user }) => {
  return (
    <>
      <div className="chat__answers">
        <h2>Полезные данные</h2>
        <div className="chat__answers__script">
          <h4>ИНН</h4>
          <a>12312031239012903</a>
        </div>
        <div className="chat__answers__script">
          <h4>Паспорт</h4>
          <a>2342342349234239423</a>
        </div>
        <div className="chat__answers__script">
          <h4>Номер Счета</h4>
          <a> 3290423904902342390423</a>
        </div>
        <div className="chat__answers__script">
          <h4>Номер Телефона</h4>
          <a>234389438943894343</a>
        </div>
        <div className="chat__answers__script">
          <h4>СНИЛС</h4>
          <a>94348594590349053459034</a>
        </div>
      </div>
    </>
  );
};

export { Help };
