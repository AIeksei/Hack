import React, { useState } from "react";
const FaqComp = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState();
  return (
    <>
      <div className={isOpen ? "faq__block__on" : "faq__block"}>
        <div className="faq__question" onClick={() => setIsOpen(!isOpen)}>
          {question}
        </div>

        {isOpen ? <div className="faq__answer">{answer}</div> : ""}
      </div>
    </>
  );
};

export { FaqComp };
