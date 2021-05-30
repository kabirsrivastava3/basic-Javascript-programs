
var limit = 3;

for (var indexrow = 1; indexrow <= limit; indexrow++) {
    for (var indexcolumn = 1; indexcolumn <= i; indexcolumn++) {

        process.stdout.write("*");
    }
    console.log("");
}

var indexrow;
for (indexrow = 1; indexrow <= limit; indexrow++) {
    for (var indexcolumn = 1; indexcolumn <= i; indexcolumn++) {

        process.stdout.write(indexrow.toString());
    }
    console.log("");
}

var indexrow;
for (indexrow = 1; indexrow <= limit; indexrow++) {
    for (var indexcolumn = 1; indexcolumn <= i; indexcolumn++) {

        process.stdout.write(indexcolumn.toString());
    }
    console.log("");
}
