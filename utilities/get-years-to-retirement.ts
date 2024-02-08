export const getYearsToRetirement = (
  currentSavings: number,
  savingsPerYear: number,
  interestRate: number,
  target: number
) => {
  const monthlyRate = interestRate / 12 / 100;
  const monthlySavings = savingsPerYear / 12;

  let months = 0;
  let retirementFund = currentSavings;

  while (retirementFund < target) {
    retirementFund = retirementFund * (1 + monthlyRate);
    retirementFund += monthlySavings;
    months++;
  }

  const years = months / 12;

  return years;
};
