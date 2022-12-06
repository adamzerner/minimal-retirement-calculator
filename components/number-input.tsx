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
  min?: number;
  max?: number;
  step?: number;
};

export const NumberInput = ({
  label,
  value,
  onChange,
  min = 0,
  max = 1000000,
  step = 1,
}: Props) => {
  return (
    <FormControl mb="3">
      <FormLabel>{label}</FormLabel>
      <NumberInputChakra
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInputChakra>
    </FormControl>
  );
};
