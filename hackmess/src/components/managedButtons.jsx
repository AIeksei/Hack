import React from "react";

const ManagedButtons = ({ isUser }) => {
  return (
    <div className="chat__pick__buttons">
      {isUser ? (
        <></>
      ) : (
        <div className="chat__pick__button__stop">ЗАКОНЧИТЬ</div>
      )}
      <div className="chat__pick__button__help">Другой менеджер</div>
    </div>
  );
};

export { ManagedButtons };
