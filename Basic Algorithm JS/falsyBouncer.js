function bouncer(arr) {
    var trueArr = [];
    for(var i = 0; i < arr.length; i++) {
        if (Boolean(arr[i]) != false) {
            trueArr.push(arr[i]);
        }
    }
    return trueArr;
}
console.log(bouncer([false, null, 0, NaN, undefined, ""]));