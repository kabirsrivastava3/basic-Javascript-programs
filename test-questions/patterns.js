var limit=5;
for (let indexRow = 1; indexRow <= limit; indexRow++) {
    for (let indexColumn = 1; indexColumn <= indexRow; indexColumn++){
        
        process.stdout.write(String.fromCharCode(indexRow+96));

    }
    console.log("");
}

var limit2=5;
for (let indexRow = 1; indexRow <= limit2; indexRow++) {
    for (let indexColumn = 1; indexColumn <= indexRow; indexColumn++){
        
        process.stdout.write(indexRow.toString());
        

    }
    console.log("");
}