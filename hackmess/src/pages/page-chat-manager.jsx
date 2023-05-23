import React from "react";
import { Pick } from "../components/pick";
import { Active } from "../components/active";
import { More } from "../components/more";

const PageChatManager = () => {
  return (
    <div className="chat__root">
      <Pick name="Артем Перевертайло" problem="Ваша проблема" isUser={false} />
      <Active info="Перевертайло Артем Алексеевич" name="Перевертайло Артем" />
      <More isUser={false} />
    </div>
  );
};

export { PageChatManager };
