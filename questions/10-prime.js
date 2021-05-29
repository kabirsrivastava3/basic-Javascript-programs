var inputNumber = 19
var numberOfFactor = 0

for (let index = 1; index <= inputNumber; index++) {
    if (inputNumber % index === 0) {
        numberOfFactor += 1;
    }
}

console.log({ numberOfFactor })
if (numberOfFactor == 2) {
    console.log({ message: "The number is prime" + inputNumber });
}

else {

    console.log({ message: "The number is composite" + inputNumber });
}

