import { useState } from "react";
import { Button, Box } from "@chakra-ui/react";
import { Results } from "../components/index/results";
import { Inputs } from "../components/index/inputs";

export type Baseline = {
  totalYearlySpending: number;
  retirementTarget: number;
  yearsToRetirement: number;
};

const Home = () => {
  const [monthlySpending, setMonthlySpending] = useState(3500);
  const [additionalYearlySpending, setAdditionalYearlySpending] = useState(0);
  const [currentSavings, setCurrentSavings] = useState(300000);
  const [withdrawalRate, setWithdrawalRate] = useState(4);
  const [retirementBuffer, setRetirementBuffer] = useState(50000);
  const [savingsPerYear, setSavingsPerYear] = useState(100000);
  const totalYearlySpending = additionalYearlySpending + monthlySpending * 12;
  const retirementTarget =
    totalYearlySpending * (100 / withdrawalRate) + retirementBuffer;
  const yearsToRetirement =
    (retirementTarget - currentSavings) / savingsPerYear;
  const [baseline, setBaseline] = useState<Baseline>({
    totalYearlySpending,
    retirementTarget,
    yearsToRetirement,
  });
  const setAsBaseline = () => {
    setBaseline({
      totalYearlySpending,
      retirementTarget,
      yearsToRetirement,
    });
  };

  return (
    <main>
      <Inputs
        monthlySpending={monthlySpending}
        setMonthlySpending={setMonthlySpending}
        additionalYearlySpending={additionalYearlySpending}
        setAdditionalYearlySpending={setAdditionalYearlySpending}
        currentSavings={currentSavings}
        setCurrentSavings={setCurrentSavings}
        savingsPerYear={savingsPerYear}
        setSavingsPerYear={setSavingsPerYear}
        withdrawalRate={withdrawalRate}
        setWithdrawalRate={setWithdrawalRate}
        retirementBuffer={retirementBuffer}
        setRetirementBuffer={setRetirementBuffer}
      />
      <Results
        totalYearlySpending={totalYearlySpending}
        retirementTarget={retirementTarget}
        yearsToRetirement={yearsToRetirement}
        baseline={baseline}
      />
      <Button mt={4} width="100%" onClick={setAsBaseline}>
        Set as baseline
      </Button>
    </main>
  );
};

export default Home;
