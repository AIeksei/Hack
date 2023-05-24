import React, { useContext } from "react";
import { scriptContext } from "../pages/page-chat-manager";
const Script = ({ script }) => {
  const { setScript } = useContext(scriptContext);
  return (
    <>
      <div className="chat__answers__script" onClick={() => setScript(script)}>
        {script}
      </div>
    </>
  );
};

export { Script };
