function chunkArrayInGroups (arr, size) {
    var groupedArr = [];
    for (let i = 0; i < arr.length; i+=size) {
        groupedArr.push(arr.slice(i, i +size));
    }
    return groupedArr;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 1));