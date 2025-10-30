// Pattern 1

// * * * *
// * * * *
// * * * *
// * * * *

let line1 = "";
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    line1 += "* ";
  }
  line1 += "\n";
}

// console.log(line1);


// Pattern 2

// *
// * *
// * * * 
// * * * *

let line2 = "";
for (let i = 0; i < 4; i++) {
  for (let j = 0; j <= i; j++) {
    line2 += "* ";
  }
  line2 += "\n";
}

// console.log(line2);

// Pattern 3

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

let line3 = "";
for (let i = 0; i < 5; i++) {
  for (let j = 1; j <= i+1; j++) {
    line3 += j + " ";
  }
  line3 += "\n";
}

// console.log(line3);

// Pattern 4

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

let line4 = "";
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    line4 += (i+1) + " ";
  }
  line4 += "\n";
}

// console.log(line4);

// Pattern 5

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

let line5 = "";
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5-i; j++) {
    line5 += (j+1) + " ";
  }
  line5 += "\n";
}

// console.log(line5);

// Pattern 6

//         *
//       * *
//     * * *
//   * * * *
// * * * * *

let line6 = "";
let n = 5;
for (let i = 0; i < 5; i++) {
    // for spaces
  for (let j = 0; j < (n-1)-i; j++) {
    line6 += "  ";
  }

  for (let k = 0; k <=i; k++) {
    line6 += "* ";
  }
  line6 += "\n";
}

// console.log(line6);


// Pattern 7

// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1

let line7 = "";
for (let i = 0; i < 5; i++) {
    let toggle = 1;
  for (let j = 0; j <= i; j++) {
    line7 += toggle + " ";
    toggle = toggle ? 0 : 1;
  }
  line7 += "\n";
}

// console.log(line7);

// Pattern 8

// 1
// 0 1
// 0 1 0
// 1 0 1 0
// 1 0 1 0 1

let line8 = "";
let toggle = 1;
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    line8 += toggle + " ";
    toggle = toggle ? 0 : 1;
  }
  line8 += "\n";
}

// console.log(line8);