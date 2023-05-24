import React, { useContext, useState } from "react";
import { DialogChoose } from "./dialogChoose";
import { ManagedButtons } from "./managedButtons";
import { UseAuth } from "./hook/useAuth";
import getApi from "./api";
import { WebsocketContext } from "./hook/websocket";
import { UseAuthMod } from "./hook/useAuthMod";

const Pick = ({ isUser, setChat, chat }) => {
  const arr = [
    { id: 1, is_solved: true, problem_id: 1, user_id: 2, manager_id: 1 },
    { id: 2, is_solved: true, problem_id: 2, user_id: 3, manager_id: 3 },
    { id: 3, is_solved: false, problem_id: 2, user_id: 2, manager_id: null },
    { id: 4, is_solved: true, problem_id: 3, user_id: 2, manager_id: 2 },
  ];
  const value = useContext(WebsocketContext);
  const [arrProblem, setArrProblem] = useState([]);
  getApi("table").then((data) => {
    setArrProblem(data.results);
  });
  function pickChat(e) {
    setChat(e);
    console.log(e);
  }
  const user = UseAuth();
  const manage = UseAuthMod();
  return (
    <div className="chat__pick">
      <div className="chat__pick__users">
        {isUser ? (
          <>
            <h2>Ваши проблемы</h2>
            {value.value.privateChats.map((type) => (
              <>
                {type.user_id === user.id ? (
                  <DialogChoose
                    name={type.problem_id}
                    problem={type.is_solved}
                    id={type.id}
                    arrProblem={arrProblem}
                    onClick={() => pickChat(type.id)}
                  />
                ) : (
                  <></>
                )}
              </>
            ))}
          </>
        ) : (
          <>
            <h2>Активные чаты</h2>
            {arr.map((type) => (
              <>
                {type.manager_id == manage.id ? (
                  <DialogChoose
                    name={type.problem_id}
                    problem={type.is_solved}
                    id={type.id}
                    arrProblem={arrProblem}
                    onClick={() => setChat(type.id)}
                  />
                ) : (
                  <></>
                )}
              </>
            ))}
            <h2>Неактивные чаты</h2>
            {arr.map((type) => (
              <>
                {!type.manager_id ? (
                  <>
                    {" "}
                    <DialogChoose
                      name={type.problem_id}
                      problem={type.is_solved}
                      id={type.id}
                      arrProblem={arrProblem}
                      onClick={() => setChat(type.id)}
                    />
                  </>
                ) : (
                  <></>
                )}
              </>
            ))}
            <h2>Чаты других менеджеров</h2>
            {arr.map((type) => (
              <>
                {type.manager_id != manage.id && type.manager_id ? (
                  <DialogChoose
                    name={type.problem_id}
                    problem={type.is_solved}
                    id={type.id}
                    arrProblem={arrProblem}
                    onClick={() => setChat(type.id)}
                  />
                ) : (
                  <></>
                )}
              </>
            ))}
          </>
        )}
      </div>

      <ManagedButtons isUser={isUser} chat={chat} />
    </div>
  );
};

export { Pick };
