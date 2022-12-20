import {
  Box,
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput as NumberInputChakra,
  NumberInputField,
  NumberInputStepper,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { MdGraphicEq } from "react-icons/md";
import { toCurrencyDisplay } from "../utilities/to-currency-display";

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
  isCurrency?: boolean;
};

export const NumberInput = ({
  label,
  value,
  onChange,
  min = 0,
  max = 1000000,
  step = 1,
  slider,
  isCurrency = false,
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
          isCurrency={isCurrency}
        />
      ) : (
        <NumberInputWithoutSlider
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          step={step}
          isCurrency={isCurrency}
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
  isCurrency,
}: Omit<Props, "label" | "slider">) => (
  <NumberInputChakra
    value={isCurrency ? toCurrencyDisplay(value) : value}
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
  isCurrency,
}: Required<Omit<Props, "label">>) => (
  <Box display={{ base: "block", md: "flex" }}>
    <NumberInputChakra
      value={isCurrency ? toCurrencyDisplay(value) : value}
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
      mt={{ base: 4, md: 0 }}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      {slider.max > 99 ? (
        <SliderThumb boxSize="32px">
          <Box as={MdGraphicEq}></Box>
        </SliderThumb>
      ) : (
        <SliderThumb fontSize="sm" boxSize="32px">
          {value}
        </SliderThumb>
      )}
    </Slider>
  </Box>
);
