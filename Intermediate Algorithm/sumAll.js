function sumAll (arr) {
    arr = arr.sort(function(a, b){return a - b});
    var sum = 0;
    for (var i = arr[0] ; i <= arr[1]; i++) {
        sum += i;        
    }
    return sum;
}

console.log(sumAll([1, 4]));