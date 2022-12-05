import { useState } from "react";
import { Results } from "../components/index/results";
import { Inputs } from "../components/index/inputs";

const Home = () => {
  const [additionalYearlySpending, setAdditionalYearlySpending] = useState(0);
  const [withdrawalRate, setWithdrawalRate] = useState(4);
  const [retirementBuffer, setRetirementBuffer] = useState(50000);
  const [currentSavings, setCurrentSavings] = useState(300000);
  const [savingsPerYear, setSavingsPerYear] = useState(100000);
  const monthlySpending = 3000;
  const totalYearlySpending = additionalYearlySpending + monthlySpending * 12;
  const retirementTarget =
    totalYearlySpending * (100 / withdrawalRate) + retirementBuffer;
  const yearsToRetirement =
    (retirementTarget - currentSavings) / savingsPerYear;

  return (
    <main>
      <Inputs />
      <Results
        monthlySpending={monthlySpending}
        totalYearlySpending={totalYearlySpending}
        retirementTarget={retirementTarget}
        yearsToRetirement={yearsToRetirement}
      />
    </main>
  );
};

export default Home;
