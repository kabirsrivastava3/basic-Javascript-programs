var string1 = "Please locate where 'locate' occurs!";
var position = string1.indexOf("locate");
console.log(position);

var string2 = "Please locate where 'locate' occurs!";
var position2 = string2.lastIndexOf("locate");
console.log(position2);

var string3 = "";
var position3 = str3.lastIndexOf("locate");
console.log(position3);

var string4 = "Please locate where 'locate' occurs!";
var position4 = string4.lastIndexOf("John");
console.log(position4);

var string5 = "";
var position5 = string5.lastIndexOf("John");
console.log(position5);

var string6 = "Please locate where 'locate' occurs!";
var position6 = string6.indexOf("locate", 15);
console.log(position6);

var string7 = "Please locate where 'locate' occurs!";
var position7 = string7.lastIndexOf("locate", 15); //searches from backward
console.log(position7);

var string8 = "Please locate where 'locate' occurs!";
var position8 = string8.search("locate");
console.log(position8);

var string9 = "Apple, Banana, Kiwi";
var resolve1 = string9.slice(7, 13);
console.log(position9);

var string10 = "Apple, Banana, Kiwi";
var resolve2 = string10.slice(-12, -6);
console.log(position10);

var string11 = "Apple, Banana, Kiwi";
var resolve3 = string11.substring(7, 13); //cannot accept negative indexes
console.log(position11);
