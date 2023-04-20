const getRandomNumberInInterval = (valueA = 0, valueB = 25): number => {
  const lower = Math.ceil(Math.min(Math.abs(valueA), Math.abs(valueB)));
  const upper = Math.floor(Math.max(Math.abs(valueA), Math.abs(valueB)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomPositiveFloat = (a: number, b: number, digits = 0): number => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;

  return Number(result.toFixed(digits));
};

const getRating = (rating: number): number => Math.round(rating) * 20;

export {getRandomNumberInInterval, getRandomPositiveFloat, getRating};

