// 1903. Largest Odd Number in String

const largestOddNumber = (num) => {
  if (!num.trim().length || num % 2 === 1) {
    return num;
  }

  let largestOddIndex = Infinity;
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 1) {
      largestOddIndex = i;
    }
  }

  return largestOddIndex === Infinity ? "" : num.slice(0, largestOddIndex + 1);
};

// console.log(largestOddNumber("52"));

const largestOddNumber2 = (num) => {
  if (!num.trim().length || num % 2 === 1) {
    return num;
  }
  
  for (let i = num.length - 1; i >= 0; i--) {
      if (num[i] % 2 !== 0) {
          return num.slice(0, i + 1)
    }
  }

  return "";
};
console.log(largestOddNumber2("42"));