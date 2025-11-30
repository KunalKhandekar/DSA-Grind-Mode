var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;

    let sFreq = {};
    let tFreq = {};

    for(let i = 0; i< s.length; i++) {
        let c1 = s[i];
        let c2 = t[i];

        if((sFreq[c1] && sFreq[c1] !== c2 ) ||
            (tFreq[c2] && tFreq[c2] !== c1) ) {
                return false;
            }
        
        sFreq[c1] = c2;
        tFreq[c2] = c1;
    }

    return true;
};