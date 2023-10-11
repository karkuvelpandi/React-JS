import { useState } from "react";
import { GainTable } from "./components/Table/GainTable";
import { EntryForm } from "./components/UserInput/EntryForm";
import { P } from "./Styles";
import { Header } from "./components/Header/Header";

function App() {
  const [yearlyData, setYearlyData] = useState([]);
  const [userInput, setUserInput] = useState({});
  const calculateHandler = (userInput) => {
    const yearlyData = []; // per-year results
    setUserInput(userInput);
    let currentSavings = userInput.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = userInput.yearlyContribution; // as mentioned: feel free to change the shape...
    const expectedReturn = userInput.expectedReturn / 100;
    const duration = userInput.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setYearlyData(yearlyData);
  };

  return (
    <div>
      <Header />
      <EntryForm
        calculateHandler={calculateHandler}
        reset={() => setYearlyData([])}
      />
      {yearlyData.length > 0 ? (
        <GainTable
          yearlyData={yearlyData}
          initialInvestment={userInput.currentSavings}
        />
      ) : (
        <P color="white">No Data Found</P>
      )}
    </div>
  );
}

export default App;
