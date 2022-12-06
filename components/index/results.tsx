import { SimpleGrid } from "@chakra-ui/react";
import { toCurrencyDisplay } from "../../utilities/to-currency-display";
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
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: "5", md: "6" }}>
      <Stat
        label="Total yearly spending"
        value={toCurrencyDisplay(totalYearlySpending)}
      />
      <Stat
        label="Retirement target"
        value={toCurrencyDisplay(retirementTarget)}
      />
      <Stat
        label="Years until retirement"
        value={yearsToRetirement.toFixed(2)}
      />
    </SimpleGrid>
  );
};
