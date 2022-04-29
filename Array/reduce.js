console.warn("How reduce() works without an initial value");
const array = [15, 16, 17, 18, 19];
function reducer(previous, current, index, array) {
  const returns = previous + current;
  console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
  return returns;
}
array.reduce(reducer);

console.warn("How reduce() works with an initial value");
array.reduce( (previous, current, index, array) => {
  const returns = previous + current;
  console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
  return returns;
}, 10 )