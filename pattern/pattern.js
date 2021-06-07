var limit = 5;
for (let indexRow = 1; indexRow <= limit; indexRow++) {
    for (let spaceColumn = indexRow - 1; spaceColumn >= 1; spaceColumn--) {
        process.stdout.write("s");
    }
    for (let indexColumn = 1; indexColumn <= indexRow; indexColumn++) {
        process.stdout.write("*");
    }
    console.log("");
}