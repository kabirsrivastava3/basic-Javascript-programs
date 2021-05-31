var myLimit = 100;
var index;
var even = 0;
for (index = myLimit; index = 1; index--) {
    even = index;
    if (even % 2 == 0) {
        process.stdout.write(even.toString());
    }
}