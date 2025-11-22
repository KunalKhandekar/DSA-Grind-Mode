// Leetcode 58 -> Length of Last Word


// Approach 1 -> Two Loops
function lengthOfLastWord(s) {
    let count = 0;
    let lastChar = -1;
    for (let i = s.length - 1; i >= 0; i--) {
        if(s[i] != " ") {
            lastChar = i;
            break;
        }
    }

    for (let i = lastChar; i >= 0; i--) {
        if(s[i] == " ") {
            break;
        }
        count++;
    }

    return count;
}


// Approach 2
function lengthOfLastWord2(s) {
    let count = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if(s[i] == " " && count > 0) {
            break;
        } else if(s[i] !== ' ') {
            count++;
        }
    }
    return count;
}

console.log(lengthOfLastWord2("   fly me   to   the moon  "))