import {
  Box,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import { toCurrencyDisplay } from "../utilities/to-currency-display";

interface Props {
  label: string;
  value: number;
  diff: number;
  isCurrency: boolean;
}
export const Stat = (props: Props) => {
  const { label, value, diff, isCurrency, ...boxProps } = props;

  return (
    <Box
      px={{ base: "4", md: "6" }}
      py={{ base: "5", md: "6" }}
      bg="bg-surface"
      borderRadius="lg"
      boxShadow={useColorModeValue("sm", "sm-dark")}
      {...boxProps}
    >
      <Stack>
        <Text fontSize="sm" color="muted">
          {label}
        </Text>
        <Heading size={useBreakpointValue({ base: "sm", md: "md" })}>
          {isCurrency ? toCurrencyDisplay(value) : value.toFixed(2)}
        </Heading>
        <HStack spacing="1" fontWeight="medium">
          {diff === 0 ? (
            <Text>Equal to baseline</Text>
          ) : (
            <>
              <Icon
                as={diff > 0 ? FiArrowUpRight : FiArrowDownRight}
                boxSize="5"
              />
              <Text>
                {isCurrency ? toCurrencyDisplay(diff) : diff.toFixed(2)}
              </Text>
              <Text>vs baseline</Text>
            </>
          )}
        </HStack>
      </Stack>
    </Box>
  );
};
