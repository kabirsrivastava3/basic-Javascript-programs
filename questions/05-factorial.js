var myNumber = 10;
var factorial = 1;

for (let index = myNumber; index => 1; index--) {
    
    factorial *= index;
}

process.stdout.write((factorial).toString());