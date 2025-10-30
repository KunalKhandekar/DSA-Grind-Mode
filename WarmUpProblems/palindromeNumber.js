// Leet code problem 9 -> Palindrome Number

let n = -121;

function palindrome(x) {
  if (x < 0) return false;
  let original = x;
  let reverse = 0;
  while (x !== 0) {
    let rem = x % 10;
    x = Math.floor(x / 10);
    reverse = reverse * 10 + rem;
  }
  return original === reverse ? true : false;
}

console.log(palindrome(n));


// process.on("exit", () => {
//     require("fs").writeFileSync("display_runtime.txt", "0");
// })

