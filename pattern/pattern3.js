var limit = 5;
for (let indexRow = 1; indexRow <= limit; indexRow++) {
    for (let spaceColumn = limit - 1; spaceColumn >= indexRow; spaceColumn--) {
        process.stdout.write("s");
    }
    for (let indexColumn = 1; indexColumn <= indexRow; indexColumn++) {
        process.stdout.write(indexColumn.toString());
    }
    console.log("");
}