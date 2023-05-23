import React from "react";

const Active = ({ info, name }) => {
  return (
    <div className="chat__active">
      <h2>{info}</h2>
      <div className="chat__active__body">
        <div className="chat__active__message">
          <div className="chat__active__message__user">
            <strong>{name}</strong>
            <br></br>
            <a>Текст</a>
          </div>
        </div>
        <div className="chat__active__message">
          <div className="chat__active__message__your">
            <strong>Вы</strong>
            <br></br>
            <a>
              Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст
              Текст Текст Текст Текст
            </a>
          </div>
        </div>
        <div className="chat__active__message">
          <div className="chat__active__message__user">
            <strong>{name}</strong>
            <br></br>
            <a>
              Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст
              Текст Текст Текст Текст
            </a>
          </div>
        </div>
        <div className="chat__active__message">
          <div className="chat__active__message__user">
            <strong>{name}</strong>
            <br></br>
            <a>
              Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст
              Текст Текст Текст Текст
            </a>
          </div>
        </div>
        <div className="chat__active__message">
          <div className="chat__active__message__your">
            <strong>Вы</strong>
            <br></br>
            <a>
              Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст
              Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст
              Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст
              Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст
              Текст
            </a>
          </div>
        </div>
        <div className="chat__active__message">
          <div className="chat__active__message__user">
            <strong>{name}</strong>
            <br></br>
            <a>
              Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст
              Текст Текст Текст Текст
            </a>
          </div>
        </div>
      </div>
      <textarea
        className="chat__active__input"
        placeholder="Введите текст"
      ></textarea>
    </div>
  );
};

export { Active };
