import React, { useState, useEffect } from "react";

function Result(props) {
  const { Answers, questions } = props;
  const [result, setResult] = useState(0);

  useEffect(() => {
    let correctAnswersCount = 0;

    for (let key in Answers) {
      if (Answers[key] === questions[key].answer) {
        correctAnswersCount++;
      }
    }
    setResult(correctAnswersCount);
  }, [Answers, questions]);
  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="text-xl">Result: {result}</div>
    </div>
  );
}

export default Result;
