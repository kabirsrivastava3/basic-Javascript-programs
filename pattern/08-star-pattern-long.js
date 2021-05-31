var limit = 5;
for (let indexRow = 1; indexRow <= limit; indexRow++) {
    for (let indexColumn = 1; indexColumn <= indexRow; indexColumn++) {
        process.stdout.write("*");
    }
    console.log("");
}
var limit = 4;
for (let indexRow = 1; indexRow <= limit; indexRow++) {
    for (let indexColumn = indexRow; indexColumn <= limit; indexColumn++) {
        process.stdout.write("*");
    }
    console.log("");
}