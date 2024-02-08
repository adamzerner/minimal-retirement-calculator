import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Inputs } from "../components/condensed/inputs";
import { Results } from "../components/condensed/results";
import { getYearsToRetirement } from "../utilities/get-years-to-retirement";

export type Baseline = {
  totalYearlySpending: number;
  retirementTarget: number;
  yearsToRetirement: number;
};

const Condensed = () => {
  const [monthlySpending, setMonthlySpending] = useState(2500);
  const [additionalYearlySpending, setAdditionalYearlySpending] =
    useState(5000);
  const [currentSavings, setCurrentSavings] = useState(300000);
  const [withdrawalRate, setWithdrawalRate] = useState(4);
  const [retirementBuffer, setRetirementBuffer] = useState(50000);
  const [savingsPerYear, setSavingsPerYear] = useState(40000);
  const [interestPerYear, setInterestPerYear] = useState(7);
  const totalYearlySpending = additionalYearlySpending + monthlySpending * 12;
  const retirementTarget =
    totalYearlySpending * (100 / withdrawalRate) + retirementBuffer;
  const yearsToRetirement = getYearsToRetirement(
    currentSavings,
    savingsPerYear,
    interestPerYear,
    retirementTarget
  );
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
    localStorage.setItem(
      "baseline",
      JSON.stringify({
        monthlySpending,
        additionalYearlySpending,
        currentSavings,
        withdrawalRate,
        retirementBuffer,
        savingsPerYear,
      })
    );
  };
  const reset = () => {
    const localStorageBaseline = localStorage.getItem("baseline");

    if (localStorageBaseline) {
      const baselineValues = JSON.parse(localStorageBaseline);

      setMonthlySpending(baselineValues.monthlySpending);
      setAdditionalYearlySpending(baselineValues.additionalYearlySpending);
      setCurrentSavings(baselineValues.currentSavings);
      setWithdrawalRate(baselineValues.withdrawalRate);
      setRetirementBuffer(baselineValues.retirementBuffer);
      setSavingsPerYear(baselineValues.savingsPerYear);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("baseline")) {
      const ls = JSON.parse(localStorage.getItem("baseline") as string);
      setMonthlySpending(ls.monthlySpending);
      setAdditionalYearlySpending(ls.additionalYearlySpending);
      setCurrentSavings(ls.currentSavings);
      setWithdrawalRate(ls.withdrawalRate);
      setRetirementBuffer(ls.retirementBuffer);
      setSavingsPerYear(ls.savingsPerYear);
    }
  }, []);

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
        interestPerYear={interestPerYear}
        setInterestPerYear={setInterestPerYear}
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
      <Button mt={4} width="100%" onClick={reset}>
        Reset
      </Button>
    </main>
  );
};

export default Condensed;
