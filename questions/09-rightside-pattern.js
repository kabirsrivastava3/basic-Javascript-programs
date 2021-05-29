
var limit = 3;

for (var indexrow = 1; indexrow <= limit; indexrow++) {
    for (var columnrow = 1; columnrow <= i; columnrow++) {

        process.stdout.write("*");
    }
    console.log("");
}

var indexrow;
for (indexrow = 1; indexrow <= limit; indexrow++) {
    for (var columnrow = 1; columnrow <= i; columnrow++) {

        process.stdout.write(indexrow.toString());
    }
    console.log("");
}

var indexrow;
for (indexrow = 1; indexrow <= limit; indexrow++) {
    for (var columnrow = 1; columnrow <= i; columnrow++) {

        process.stdout.write(columnrow.toString());
    }
    console.log("");
}
