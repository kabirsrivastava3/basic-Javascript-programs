function nOdd(n){
    var arr=[];
    for (let index = 1; index < n; index++) {
        if(index%2==1){
            arr.push(index);
        }        
    }
    return arr;

}
var output= nOdd(20);
console.log(output);