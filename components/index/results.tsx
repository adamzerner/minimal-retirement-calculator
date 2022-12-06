import { SimpleGrid } from "@chakra-ui/react";
import { Stat } from "../stat";

type Props = {
  totalYearlySpending: number;
  retirementTarget: number;
  yearsToRetirement: number;
};

export const Results = ({
  totalYearlySpending,
  retirementTarget,
  yearsToRetirement,
}: Props) => {
  const toDisplay = (n: number) =>
    n.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });

  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: "5", md: "6" }}>
      <Stat
        label="Total yearly spending"
        value={toDisplay(totalYearlySpending)}
      />
      <Stat label="Retirement target" value={toDisplay(retirementTarget)} />
      <Stat
        label="Years until retirement"
        value={yearsToRetirement.toString()}
      />
    </SimpleGrid>
  );
};
