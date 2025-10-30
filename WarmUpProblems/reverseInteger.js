const x = -123;

function reverseInteger(x) {
  let xCopy = x;
  x = Math.abs(x);
  let reverse = 0;
  const limit = Math.pow(2, 31);
  while (x !== 0) {
    // Checking the limti before adding in reverse
    // Why dividing by 10 ? Cuz reverse is multiplying it by 10 (shouldn't overflow)
    if (reverse > limit / 10) return 0;
    reverse = 10 * reverse + (x % 10);
    x = Math.floor(x / 10);
  }

  return xCopy < 0 ? -reverse : reverse;
}

console.log(reverseInteger(x));
