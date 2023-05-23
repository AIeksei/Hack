import React from "react";
import { DialogChoose } from "./dialogChoose";
import { ManagedButtons } from "./managedButtons";

const Pick = ({ name, problem, isUser }) => {
  return (
    <div className="chat__pick">
      <div className="chat__pick__users">
        <h2>Возможные диалоги</h2>
        <DialogChoose name={name} problem={problem} />
        <ManagedButtons isUser={isUser} />
      </div>
    </div>
  );
};

export { Pick };
