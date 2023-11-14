import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import "./App.css";
import Result from "./components/Result";
import usePageVisibility from "./hooks/usePageVisibility";
import useFullScreen from "./hooks/useFullScreen";

// dummy question we can use API also to fetch questions one by one
// or a complete dump at once
const questions = [
  {
    question: "What is the largest planet in our solar system?",
    options: ["Mars", "Jupiter", "Venus", "Saturn"],
    answer: "Jupiter",
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Jane Austen",
      "F. Scott Fitzgerald",
    ],
    answer: "William Shakespeare",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Cu"],
    answer: "Au",
  },
  {
    question:
      "Which gas do plants absorb from the atmosphere during photosynthesis?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide",
  },
  {
    question: "Who was the first woman to fly solo across the Atlantic Ocean?",
    options: [
      "Amelia Earhart",
      "Bessie Coleman",
      "Harriet Quimby",
      "Jacqueline Cochran",
    ],
    answer: "Amelia Earhart",
  },
  {
    question: "In which year did the Titanic sink?",
    options: ["1912", "1921", "1935", "1944"],
    answer: "1912",
  },
  {
    question: "What is the largest mammal on Earth?",
    options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale",
  },
  {
    question: "Who is the author of 'The Great Gatsby'?",
    options: [
      "F. Scott Fitzgerald",
      "Ernest Hemingway",
      "Mark Twain",
      "John Steinbeck",
    ],
    answer: "F. Scott Fitzgerald",
  },
  {
    question: "What is the chemical formula for water?",
    options: ["H2O", "CO2", "N2", "CH4"],
    answer: "H2O",
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Mars", "Venus", "Mercury", "Jupiter"],
    answer: "Mars",
  },
];

const Answers = {};

function App() {
  const isFullScreen = useFullScreen();
  const isPageActive = usePageVisibility();
  const [showResult, setshowResult] = useState(false);

  return (
    <div ref={isFullScreen} className="App h-screen">
      {isPageActive[1] > 1 ? (
        <div className="flex flex-col justify-center items-center text-xl h-full">
          <div className="absolute left-1 top-1 bg-green-100 text-green-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded-[10px]">
            Reload to restart
          </div>
          <div>You are disqualified</div>
          <div>
            Reason:{" "}
            <span className="bg-red-100 text-red-800 text-xl font-medium me-2 px-2.5 py-0.5 rounded-[20px]">
              Cheating
            </span>
          </div>
        </div>
      ) : !showResult ? (
        <Dashboard
          questions={questions}
          Answers={Answers}
          setshowResult={setshowResult}
        />
      ) : (
        <Result questions={questions} Answers={Answers} />
      )}
    </div>
  );
}

export default App;
