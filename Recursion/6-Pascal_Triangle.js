// Leetcode 118 -> Pascal's Triangle


function fact(n) {
    if (n <= 1) return 1;
  return n * fact(n - 1);
}

function findRow(numRow, k = 0, row = []) {
    if (k > numRow) return row;
    // Staring 1 && Ending 1
    if (k === 0 || numRow === k) {
        row.push(1);
    } else {
        // for middle numbers
        let mid = Math.floor(fact(numRow) / (fact(k) * fact(numRow - k)));
        row.push(mid);
    }
    return findRow(numRow, k + 1, row);
}

const numRows = 5;
function generate(numRows) {
  let main = [];
  for (let i = 0; i < numRows; i++) {
    main.push(findRow(i));
  }
  return main;
}


// Approach 2
function generate1(numRows) {
    let res = [];
    
    for (let n = 0; n < numRows; n++) {
        let row = [1];
        let val = 1;
        
        for (let k = 1; k <= n; k++) {
            val = val * (n - k + 1) / k;
            row.push(val);
        }

        res.push(row);
  }
  return res;
}

console.log(generate1(numRows));