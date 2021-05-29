function isPrime(numb) {
    for (let index = 2; index <= numb - 1; index++) {
        if (numb % index === 0) return false;
    }
    return true;
}

for (let index = 2; index < 100; index++) {
    if (isPrime(index) == true) console.log(index);
}
