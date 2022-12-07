import { SimpleGrid } from "@chakra-ui/react";
import { toCurrencyDisplay } from "../../utilities/to-currency-display";
import { Stat } from "../stat";
import type { Baseline } from "../../pages";

type Props = {
  totalYearlySpending: number;
  retirementTarget: number;
  yearsToRetirement: number;
  baseline: Baseline;
};

export const Results = ({
  totalYearlySpending,
  retirementTarget,
  yearsToRetirement,
  baseline,
}: Props) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: "5", md: "6" }}>
      <Stat
        label="Total yearly spending"
        value={totalYearlySpending}
        diff={totalYearlySpending - baseline.totalYearlySpending}
        isCurrency={true}
      />
      <Stat
        label="Retirement target"
        value={retirementTarget}
        diff={retirementTarget - baseline.retirementTarget}
        isCurrency={true}
      />
      <Stat
        label="Years until retirement"
        value={yearsToRetirement}
        diff={yearsToRetirement - baseline.yearsToRetirement}
        isCurrency={false}
      />
    </SimpleGrid>
  );
};
