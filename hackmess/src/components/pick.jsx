import React from "react";

const Pick = ({ name, problem, isUser }) => {
  return (
    <div className="chat__pick">
      <div className="chat__pick__users">
        <h2>Возможные диалоги</h2>
        <div className="chat__pick__user">
          <h3> {name}</h3>
          <a> {problem}</a>
        </div>
        <div className="chat__pick__user">
          <h3> {name}</h3>
          <a> {problem}</a>
        </div>
        <div className="chat__pick__user">
          <h3> {name}</h3>
          <a> {problem}</a>
        </div>
        <div className="chat__pick__user">
          <h3> {name}</h3>
          <a> {problem}</a>
        </div>
        <div className="chat__pick__buttons">
          {isUser ? (
            <></>
          ) : (
            <div className="chat__pick__button__stop">ЗАКОНЧИТЬ</div>
          )}
          <div className="chat__pick__button__help">Другой менеджер</div>
        </div>
      </div>
    </div>
  );
};

export { Pick };
