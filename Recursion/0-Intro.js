// Print 1-n using recursion

function print(n, i=1) {
    if(i > n) return;
    console.log(i);
    print(n, ++i);
}

print(6);