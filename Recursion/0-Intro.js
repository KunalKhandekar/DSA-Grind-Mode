// Read this blog: https://medium.com/@kunalkhandekar.dev/understanding-recursion-the-simplest-guide-ever-0db067eae187

// Print 1-n using recursion
function print(n, i=1) {
    if(i > n) return;
    console.log(i);
    print(n, ++i)
}

print(6);