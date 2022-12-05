import { NumberInput } from "../number-input";

export const Inputs = () => {
  return (
    <section>
      <NumberInput
        label="Additional yearly spending"
        value={0}
        onChange={() => console.log("test")}
      />
      <NumberInput
        label="Current savings"
        value={0}
        onChange={() => console.log("test")}
      />
      <NumberInput
        label="Savings per year"
        value={0}
        onChange={() => console.log("test")}
      />
      <NumberInput
        label="Withdrawal rate"
        value={0}
        onChange={() => console.log("test")}
      />
      <NumberInput
        label="Retirement buffer"
        value={0}
        onChange={() => console.log("test")}
      />
    </section>
  );
};
