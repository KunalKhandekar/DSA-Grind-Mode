// Write a functions to count the number of digits in a number

function countDigits(n) {
  if (n === 0) return 1;
  n = Math.abs(n); // Converts the negative to positive; keeps positive as positive.
  let count = 0;
  while (n !== 0) {
    // n = (n/10); -> Doesn't work properly (Also calculates decimals)
    n = Math.floor(n / 10); // makes it proper by removing the decimals
    count++;
  }
  return count;
}

console.log(countDigits(-1234));
console.log(countDigits(0));
console.log(countDigits(32729799));
