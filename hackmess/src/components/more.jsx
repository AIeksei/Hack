import React from "react";
import { Help } from "./user-help";
import { Scripts } from "./scrits";

const More = ({ isUser }) => {
  return <>{isUser ? <Help /> : <Scripts />}</>;
};

export { More };
