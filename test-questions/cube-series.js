function cubeElements(n){
    var sum=0;
    for (let index = 1; index <= n; index++) {
        sum+=Math.pow(index,3);
        
    }
    return sum;
}
console.log(cubeElements(100));
