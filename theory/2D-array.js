console.log("2D array");

const myMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

for (let indexRow = 0; indexRow < myMatrix.length; indexRow++) {
    for (let indexColumn = 0; indexColumn < myMatrix[indexRow].length; indexColumn++) {
        const element = myMatrix[indexRow][indexColumn];
        process.stdout.write(element.toString());
    }
    console.log("");
}