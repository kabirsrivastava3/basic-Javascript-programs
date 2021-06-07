function nfibo(limit) {
  var num1 = 0,
    num2 = 1,
    num3;
  var arr = [];
  arr.push(num1);
  arr.push(num2);
  for (let index = 3; index <= limit; index++) {
    num3 = num1 + num2;
    arr.push(num3);
    num1 = num2;
    num2 = num3;
  }
  return arr;
}
var output = nfibo(10);

console.log(output);
