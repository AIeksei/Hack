import React from "react";
import { Link } from "react-router-dom";

const PagePlease = () => {
  return (
    <div className="chat__root">
      <div>Пожалуйста</div>
      <Link to="/login">
        <a>, авторизируйтесь </a>
      </Link>
      <div>, чтобы задать вопрос</div>
    </div>
  );
};

export { PagePlease };
