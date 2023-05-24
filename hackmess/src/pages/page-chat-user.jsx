import React from "react";
import { Pick } from "../components/pick";
import { Active } from "../components/active";
import { More } from "../components/more";

const PageChatUser = () => {
  return (
    <div className="chat__root">
      <Pick name="ВАША ПРОБЛЕМА" problem="Решена" isUser={true} />
      <Active info="ЧАТ ПОДДЕРЖКИ" name={false} />
      <More isUser={true} />
    </div>
  );
};

export { PageChatUser };
