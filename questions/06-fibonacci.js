const myLimit=10;
var number1=0;
var number2=1;
var sum;
process.stdout.write((number1+""+number2).toString());
for (let index = 2; index < myLimit; index++) {
    sum=number1+number2;
    process.stdout.write(sum.toString());
    number1=number2;
    number2=sum;
}