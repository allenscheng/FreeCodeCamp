function mutation(arr) {
    var newArr = [];
    arr.forEach(element => {
        newArr.push(element.toLowerCase());
    });

    for (let i = 0; i < newArr[1].length; i++) {
        if (!newArr[0].includes(newArr[1][i])){
            return false;
        }
    }
    return true;
}  
console.log(mutation(["hello", "Hello"]));
