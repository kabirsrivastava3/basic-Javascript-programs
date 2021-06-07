var limit = 20;
var numerator = 0;
var denominator = 2;
var series2 = 0;


function isPrime(denominator) {
    for (let primeindex = 2; primeindex <= denominator - 1; primeindex++) {
        if (denominator % primeindex === 0) return false;
    }
    return true;
}

numerator = 0;
denominator = 0;
for (let index = 2; index < limit; index++) {

    if ((index % 2 == 0) && (isPrime(index) == true)) {
        numerator = numerator + index;
        denominator = denominator + index;
    }


    series2 = series2 + (numerator / denominator);

    console.log(series2);
}
