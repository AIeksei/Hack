import React from "react";

const DialogChoose = ({ name, problem }) => {
  return (
    <div className="chat__pick__user">
      <h3> {name}</h3>
      <a> {problem}</a>
    </div>
  );
};

export { DialogChoose };
