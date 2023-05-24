import React, { useEffect, useState } from "react";
import { Pick } from "../components/pick";
import { Active } from "../components/active";
import { More } from "../components/more";
import { createContext } from "react";

export const scriptContext = createContext("");

const PageChatManager = () => {
  const [script, setScript] = useState("");
  useEffect(() => {
    console.log(script);
  }, [script]);
  return (
    <scriptContext.Provider value={{ script, setScript }}>
      <div className="chat__root">
        <Pick
          name="Артем Перевертайло"
          problem="Ваша проблема"
          isUser={false}
        />
        <Active info="Перевертайло Артем Алексеевич" name={true} />
        <More isUser={false} />
      </div>
    </scriptContext.Provider>
  );
};

export { PageChatManager };
