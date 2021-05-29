const myLimit=10;
var num1=0;
var num2=1;
var sum;
process.stdout.write((num1+""+num2).toString());
for (let index = 2; index < myLimit; index++) {
    sum=num1+num2;
    process.stdout.write(sum.toString());
    num1=num2;
    num2=sum;
}