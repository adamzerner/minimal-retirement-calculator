// https://www.wallstreetiswaiting.com/running-the-numbers-1/calculating-interest-recurring-payments/
export const getYearsToRetirement = (y: number, p: number, r: number) => {
  if (r === 0) {
    return y / p;
  }

  return logBase(Math.abs((y * r) / p + 1), 1 + r);
};

const logBase = (n: number, base: number) => Math.log(n) / Math.log(base);
