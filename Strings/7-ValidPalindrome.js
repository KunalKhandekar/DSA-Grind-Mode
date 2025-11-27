// Approach 1

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let filter = "";
  let rev = "";
  s = s.toLowerCase();

  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z0-9]/i)) {
      filter += s[i];
      rev = s[i] + rev;
    }
  }

  return filter === rev;
};

// Approach 2
/**
 * @param {string} s
 * @return {boolean}
 * //
 */

console.log(isPalindrome('A man, a plan, a canal: Panama'))
