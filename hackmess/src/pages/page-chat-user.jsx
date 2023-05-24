import React, { useState } from "react";
import { Pick } from "../components/pick";
import { Active } from "../components/active";
import { More } from "../components/more";
import { scriptContext } from "./page-chat-manager";
const PageChatUser = () => {
  const [script, setScript] = useState("");
  return (
    <scriptContext.Provider value={{ script, setScript }}>
      <div className="chat__root">
        <Pick name="ВАША ПРОБЛЕМА" problem="Решена" isUser={true} />
        <Active info="ЧАТ ПОДДЕРЖКИ" name={false} />
        <More isUser={true} />
      </div>
    </scriptContext.Provider>
  );
};

export { PageChatUser };
