var number = 12321;
var on=number; 
var reverse=0, remainder=0;

while(number>=1){
    remainder=number%10;
    console.log(remainder); //remainder
    reverse = reverse*10+remainder;
    number=parseInt(number/10);//quotient getting removed
    console.log(number);
}
console.log({reverse});

if(on==reverse){
    console.log({message: "Palindrome"}); 
}
else
{
    console.log({message: "Not Palindrome"});   
}
