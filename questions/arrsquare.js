function squareArray(number) {
  for (let index = 0; index < number.length; index++) {
    number[index] = number[index] * number[index];
  }
  console.log(number);
  return number;
}

console.log(squareArray([1, 2, 3]));