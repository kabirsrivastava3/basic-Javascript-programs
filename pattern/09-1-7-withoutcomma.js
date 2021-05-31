var limit = 7;
for (let indexRow = 1; indexRow <= limit - 1; indexRow++) {

    process.stdout.write((indexRow).toString() + ",");
}
process.stdout.write((limit).toString());
