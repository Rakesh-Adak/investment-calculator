import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import ResultsTable from "./components/ResultsTable.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isValidInput = userInput.duration >= 1;

  function handleInputChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue, // '+' converts string to number
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleInputChange={handleInputChange} />
      {isValidInput ? (
        <ResultsTable userInput={userInput} />
      ) : (
        <p className="center">Please enter valid investment duration </p>
      )}
    </>
  );
}

export default App;
