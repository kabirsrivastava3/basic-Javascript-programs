var limit = 5;
var alphabet = 65;
for (let indexRow = 1; indexRow <= limit; indexRow++) {
    for (let indexColumn = 1; indexColumn <= indexRow; indexColumn++) {

        process.stdout.write(String.fromCharCode(alphabet));
        alphabet++;
    }
    console.log("");
}