var limit = 9;

for (var indexrow = 0; indexrow<= n; indexrow++) {
    for (var indexcolumn = 0; indexcolumn <= i; indexcolumn++) {

        process.stdout.write((indexrow * indexcolumn).toString());
    }
    console.log("");
}
