import React, { useState } from "react";

function QuestionPreview(props) {
  const { question, Answers } = props;
  const [selectOption, setselectOption] = useState(null);

  const handleOptionSelect = (e) => {
    const { textContent } = e.currentTarget;
    setselectOption(textContent);
    Answers[question.id] = textContent;
  };

  return (
    <div>
      <div className="flex gap-[10px]">
        <div>Q:{question.id + 1}</div>
        <div>{question.question}</div>
      </div>
      <div className="pl-[40px] flex flex-col gap-[10px] pt-[10px] w-1/2">
        {question.options.map((option, idx) => (
          <button
            onClick={handleOptionSelect}
            className={`${
              selectOption === option ? "bg-[#BEADFA]" : "hover:bg-[#DFCCFB]"
            } p-2 rounded text-left`}
            key={idx}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionPreview;
