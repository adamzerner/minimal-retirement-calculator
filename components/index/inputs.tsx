import { Dispatch, SetStateAction } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { NumberInput } from "../number-input";

type Props = {
  monthlySpending: number;
  setMonthlySpending: Dispatch<SetStateAction<number>>;
  additionalYearlySpending: number;
  setAdditionalYearlySpending: Dispatch<SetStateAction<number>>;
  currentSavings: number;
  setCurrentSavings: Dispatch<SetStateAction<number>>;
  savingsPerYear: number;
  setSavingsPerYear: Dispatch<SetStateAction<number>>;
  withdrawalRate: number;
  setWithdrawalRate: Dispatch<SetStateAction<number>>;
  retirementBuffer: number;
  setRetirementBuffer: Dispatch<SetStateAction<number>>;
};

export const Inputs = ({
  monthlySpending,
  setMonthlySpending,
  additionalYearlySpending,
  setAdditionalYearlySpending,
  currentSavings,
  setCurrentSavings,
  savingsPerYear,
  setSavingsPerYear,
  withdrawalRate,
  setWithdrawalRate,
  retirementBuffer,
  setRetirementBuffer,
}: Props) => {
  return (
    <section>
      <Flex gap={5}>
        <NumberInput
          label="Monthly spending"
          value={monthlySpending}
          onChange={(_, v) => setMonthlySpending(v)}
          min={0}
          max={20000}
          step={100}
        />
        <NumberInput
          label="Additional yearly spending"
          value={additionalYearlySpending}
          onChange={(_, v) => setAdditionalYearlySpending(v)}
          min={0}
          max={1000000}
          step={100}
        />
      </Flex>
      <Flex gap={5}>
        <NumberInput
          label="Current savings"
          value={currentSavings}
          onChange={(_, v) => setCurrentSavings(v)}
          min={-1000000}
          max={100000000}
          step={1000}
        />
        <NumberInput
          label="Savings per year"
          value={savingsPerYear}
          onChange={(_, v) => setSavingsPerYear(v)}
          min={0}
          max={1000000}
          step={100}
        />
      </Flex>
      <Flex gap={5}>
        <NumberInput
          label={
            <span>
              Withdrawal Rate
              <a
                href="https://www.mrmoneymustache.com/2012/05/29/how-much-do-i-need-for-retirement/"
                style={{ marginLeft: 5, position: "relative", bottom: 2 }}
                target="_blank"
                rel="noreferrer"
              >
                <InfoOutlineIcon />
              </a>
            </span>
          }
          value={withdrawalRate}
          onChange={(_, v) => setWithdrawalRate(v)}
          min={0}
          max={20}
          step={0.25}
          slider={{
            min: 2,
            max: 8,
            step: 1,
          }}
        />
        <NumberInput
          label="Retirement buffer"
          value={retirementBuffer}
          onChange={(_, v) => setRetirementBuffer(v)}
          min={0}
          max={1000000}
          step={1000}
          slider={{
            min: 0,
            max: 200000,
            step: 5000,
          }}
        />
      </Flex>
    </section>
  );
};
