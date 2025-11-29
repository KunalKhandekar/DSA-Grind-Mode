var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let freq = {};

    for(let i = 0; i < s.length; i++) {
        freq[s[i]] = (freq[s[i]] || 0) + 1; 
    }

    for(let i = 0; i < t.length; i++) {
        if(!freq[t[i]]) return false;
        freq[t[i]] = --freq[t[i]];
    }

    return true;
};