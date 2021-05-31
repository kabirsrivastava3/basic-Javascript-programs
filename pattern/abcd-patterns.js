var limit = 5;
var res = String.fromCharCode(65);
for (var indexrow = 1; indexrow <= limit; indexrow++) {
    for (var indexcolumn = 1; indexcolumn <= indexrow; indexcolumn++) {

        process.stdout.write((res).toString());
        res++;
    }
    console.log("");
}



