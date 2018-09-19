function findLongestWordLength(str) {
    var strSplit = str.split(' ');
    var longestLength = 0;
    for (var i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestLength) {
            longestLength = strSplit[i].length;
        }
    }
    return longestLength;
}
console.log(findLongestWordLength('The quick brown fox jumped over the lazy dog'));
