import {
  NumberInput as NumberInputChakra,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

type Props = {
  label: string;
  value: number;
  onChange: (valueAsString: string, valueAsNumber: number) => void;
};

export const NumberInput = ({ label, value, onChange }: Props) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <NumberInputChakra value={value} onChange={onChange}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInputChakra>
    </FormControl>
  );
};
