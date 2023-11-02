import React, { useState } from "react";
import QuestionPreview from "./QuestionPreview";

function Dashboard(props) {
  const { questions, setshowResult } = props;
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleQuestionChange = (flag) => {
    if (flag === "next") {
      setCurrentQuestion((prevQuestion) =>
        prevQuestion < questions.length - 1 ? prevQuestion + 1 : prevQuestion
      );
    } else if (flag === "prev") {
      setCurrentQuestion((prevQuestion) =>
        prevQuestion > 0 ? prevQuestion - 1 : prevQuestion
      );
    }
  };
  return (
    <div className="flex flex-col p-8 w-full justify-between h-full">
      <QuestionPreview
        Answers={props.Answers}
        question={{ ...questions[currentQuestion], id: currentQuestion }}
      />
      <div className="flex justify-center md:justify-end">
        <button
          className={`${
            currentQuestion === 0 ? "disabled" : ""
          } bg-[#BEADFA] hover:bg-[#DFCCFB] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2`}
          onClick={() => {
            handleQuestionChange("prev");
          }}
        >
          Prev
        </button>
        {currentQuestion === questions.length - 1 ? (
          <button
            onClick={() => setshowResult(true)}
            className="bg-[#BEADFA] hover:bg-[#DFCCFB] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            Submit
          </button>
        ) : (
          <button
            className="bg-[#BEADFA] hover:bg-[#DFCCFB] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            onClick={() => {
              handleQuestionChange("next");
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
