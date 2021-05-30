let myList = [2, 5, 6, 88, 3, 44,];
var addTotal = 0;
var multiplyTotal = 1;

for (let index = 0; index < myList.length; index++) {
    addTotal += myList[index];
}

console.log({ addTotal });

for (let index = 0; index < myList.length; index++) {
    const element = myList[index];
    multiplyTotal *= element;
}

console.log({ multiplyTotal });