var inputNumber = 14;
var threeFactors = 0;

for (let index = 1; index <= inputNumber; index++) {
  if (inputNumber % index === 0) {
    threeFactors++;
  }
}
if (threeFactors == 3) {
  console.log("JustPrime Number");
} else {
  console.log("Not JustPrime Number");
}
