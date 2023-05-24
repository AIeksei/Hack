import React from "react";
import Popup from "reactjs-popup";

const ManagedButtons = ({ isUser, chat }) => {
  function stopChat() {
    //setIsSolved(!isSolved);
  }
  function changeManager(e) {
    //setProblem(e);
  }
  return (
    <div className="chat__pick__buttons">
      {isUser ? (
        <></>
      ) : (
        <div className="chat__pick__button__stop" onClick={() => stopChat()}>
          ЗАКОНЧИТЬ
        </div>
      )}
      <Popup
        trigger={
          <div className="chat__pick__button__help">Другой менеджер</div>
        }
        position="right bottom"
      >
        {isUser ? (
          <div>
            <h1>Выберите причину смены менеджера</h1>
            <div className="popup__choosing" onClick={() => changeManager(0)}>
              <h2>1.Понял, что выбрал неверную проблему</h2>
            </div>
            <div
              className="popup__choosing"
              onClick={() => changeManager(chat.problem)}
            >
              <h2>2.Некомпетентный менеджер</h2>
            </div>
          </div>
        ) : (
          <div>
            <h1>Выберите проблему на которую переводим</h1>
            <div className="popup__choosing" onClick={() => changeManager(1)}>
              <h2>1.Финансирование поставщиков маркетплейсов</h2>
            </div>
            <div className="popup__choosing" onClick={() => changeManager(2)}>
              <h2>2.Кредит на исполнение госконтакта</h2>
            </div>
            <div className="popup__choosing" onClick={() => changeManager(3)}>
              <h2>3.Факторинг</h2>
            </div>
            <div className="popup__choosing" onClick={() => changeManager(0)}>
              <h2>4.Отправить менеджеру первого порядка</h2>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};

export { ManagedButtons };
