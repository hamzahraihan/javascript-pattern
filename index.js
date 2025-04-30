// first class function
const calc = () => {
  return 10 * 3;
};

const result = calc();

// callback function
const printCalc = (callback) => {
  console.log('from callback', callback());
};
printCalc(calc);
