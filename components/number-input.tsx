import {
  Box,
  NumberInput as NumberInputChakra,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormControl,
  FormLabel,
  Slider,
  SliderTrack,
  SliderThumb,
  SliderFilledTrack,
  Flex,
} from "@chakra-ui/react";

type Props = {
  label: string | React.ReactNode;
  value: number;
  onChange: (valueAsString: string, valueAsNumber: number) => void;
  min?: number;
  max?: number;
  step?: number;
  slider?: {
    min: number;
    max: number;
    step: number;
  };
};

export const NumberInput = ({
  label,
  value,
  onChange,
  min = 0,
  max = 1000000,
  step = 1,
  slider,
}: Props) => {
  return (
    <FormControl mb="3">
      <FormLabel>{label}</FormLabel>
      {!!slider ? (
        <NumberInputWithSlider
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          step={step}
          slider={slider}
        />
      ) : (
        <NumberInputWithoutSlider
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          step={step}
        />
      )}
    </FormControl>
  );
};

const NumberInputWithoutSlider = ({
  value,
  onChange,
  min,
  max,
  step,
}: Omit<Props, "label" | "slider">) => (
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
);

const NumberInputWithSlider = ({
  value,
  onChange,
  min,
  max,
  step,
  slider,
}: Required<Omit<Props, "label">>) => (
  <Flex>
    <NumberInputChakra
      value={value}
      onChange={onChange}
      min={min}
      max={max}
      step={step}
      maxW="125px"
      mr="2rem"
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInputChakra>
    <Slider
      flex="1"
      focusThumbOnChange={false}
      value={value}
      onChange={(v) => onChange(v.toString(), v)}
      min={slider.min}
      max={slider.max}
      step={slider.step}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      {slider.max > 99 ? (
        <SliderThumb />
      ) : (
        <SliderThumb fontSize="sm" boxSize="32px">
          {value}
        </SliderThumb>
      )}
    </Slider>
  </Flex>
);
