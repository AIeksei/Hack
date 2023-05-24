import React from "react";

const DialogChoose = ({ name, problem, id, arrProblem, onClick }) => {
  return (
    <div className="chat__pick__user" onClick={onClick}>
      {arrProblem.map((type) =>
        type.id == name ? <h3> {type.problem}</h3> : <></>
      )}

      {problem ? <a> Решена</a> : <a> Не решена</a>}
    </div>
  );
};

export { DialogChoose };
