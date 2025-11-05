// Leetcode 509 -> Fibonacci Number

const n = 3;

function fib(f) {
    if(f <= 1) return f;
    return fib(f-1) + fib(f-2);
}

console.log(fib(n))