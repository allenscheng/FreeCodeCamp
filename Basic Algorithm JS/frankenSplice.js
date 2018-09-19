function frankenSplice(arr1, arr2, n) {
    var newArr2 = arr2.slice();
    for (var i = 0; i < arr1.length; i++) {
        console.log(arr1[i]);
        newArr2.splice(n, 0, arr1[i]);
        n++
    }
    return newArr2;
}
console.log(frankenSplice([1, 2, 3], [4, 5], 1))
