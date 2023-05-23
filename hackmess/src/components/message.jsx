import React from "react";

const Message = ({ isUser, name, text }) => {
  return (
    <>
      {isUser ? (
        <>
          <div className="chat__active__message">
            <div className="chat__active__message__user">
              <strong>{name}</strong>
              <br></br>
              <a>{text}</a>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="chat__active__message">
            <div className="chat__active__message__your">
              <strong>{name}</strong>
              <br></br>
              <a>{text}</a>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export { Message };
