function factorialize(num) {
    var prod = 1; 
    for (var i = num; i > 0; i--) {
        prod *= i; 
    }
    return prod;
}