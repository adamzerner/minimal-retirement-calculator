import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import { Stat } from "../stat";

type Props = {
  monthlySpending: number;
  totalYearlySpending: number;
  retirementTarget: number;
  yearsToRetirement: number;
};

export const Results = ({
  monthlySpending,
  totalYearlySpending,
  retirementTarget,
  yearsToRetirement,
}: Props) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 4 }} gap={{ base: "5", md: "6" }}>
      <Stat
        label="Monthly spending"
        value={monthlySpending.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      />
      <Stat
        label="Total yearly spending"
        value={totalYearlySpending.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      />
      <Stat
        label="Retirement target"
        value={retirementTarget.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      />
      <Stat
        label="Years until retirement"
        value={yearsToRetirement.toString()}
      />
    </SimpleGrid>
  );
};
