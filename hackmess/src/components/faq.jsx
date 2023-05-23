import React from "react";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";

const FaqComp = ({ question, answer }) => {
  return (
    <>
      <h3>{question}</h3>
      <a>{answer}</a>
    </>
  );
};

export { FaqComp };
