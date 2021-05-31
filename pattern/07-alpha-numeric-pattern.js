var limit = 5;
for (let indexRow = 1; indexRow <= limit; indexRow++) {
    for (let indexColumn = 1; indexColumn <= indexRow; indexColumn++) {
        process.stdout.write(String.fromCharCode(indexColumn + 96) + "" + String.fromCharCode(indexColumn + 48));
    }
    console.log("");
}
