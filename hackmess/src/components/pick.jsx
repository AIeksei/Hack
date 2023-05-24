import React from "react";
import { DialogChoose } from "./dialogChoose";
import { ManagedButtons } from "./managedButtons";

const Pick = ({ name, problem, isUser }) => {
  return (
    <div className="chat__pick">
      <div className="chat__pick__users">
        <h2>Активные чаты</h2>
        <DialogChoose name={name} problem={problem} />
        <h2>Неактивные чаты</h2>
        <DialogChoose name={name} problem={problem} />
        <h2>Чаты других менеджеров</h2>
        <DialogChoose name={name} problem={problem} />
        <DialogChoose name={name} problem={problem} />
        <DialogChoose name={name} problem={problem} />
      </div>

      <ManagedButtons isUser={isUser} />
    </div>
  );
};

export { Pick };
