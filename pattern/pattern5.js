var limit = 20;

function isPrime(numb) {
    for (let index = 2; index <= numb - 1; index++) {
        if (numb % index === 0) return false;
    }
    return true;
}

for (let index = 1; index < limit; index++) {
    if (isPrime(index) == true) process.stdout.write((index).toString() + ",");
    // Todo remove traling comma
}
