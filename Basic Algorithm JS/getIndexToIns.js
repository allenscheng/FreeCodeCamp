function getIndexToIns(arr, num) {
    var sorted = arr.sort(function(a, b){return a - b});
    if (arr.length === 0) { 
        return 0;
    }
    for (var i = 0; i < sorted.length; i++) {
       if (sorted[i] >= num) {
           return i;
       }
    }
    return arr.length;
}
  
console.log(getIndexToIns([2, 5, 10], 15));