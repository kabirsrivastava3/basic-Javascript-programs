function binaryToDecimal(binary){
 var power=0, decimal=0,d;

    for (let index = binary.length-1; index >=1 ; index--) {
          
        d = Number(binary[index]);
            
        decimal+=  Math.pow(2,power) * d;
        power++;
    }
    return decimal;
}


var output=binaryToDecimal("11001");

console.log(output);