var limit = 9;

for (var indexrow = 0; indexrow<= n; indexrow++) {
    for (var columnrow = 0; columnrow <= i; columnrow++) {

        process.stdout.write((indexrow * columnrow).toString());
    }
    console.log("");
}
