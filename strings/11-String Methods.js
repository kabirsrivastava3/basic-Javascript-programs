var str1 = "Please locate where 'locate' occurs!";
var pos = str1.indexOf("locate");
console.log(pos);

var str2 = "Please locate where 'locate' occurs!";
var pos = str2.lastIndexOf("locate");


var str3 = "";
var pos = str3.lastIndexOf("locate");

var str4 = "Please locate where 'locate' occurs!";
var pos = str4.lastIndexOf("John");


var str5 = "";
var pos = str5.lastIndexOf("John");


var str6 = "Please locate where 'locate' occurs!";
var pos = str6.indexOf("locate", 15);


var str7 = "Please locate where 'locate' occurs!";
var pos = str7.lastIndexOf("locate", 15); //searches from backward


var str8 = "Please locate where 'locate' occurs!";
var pos = str8.search("locate");


var str9 = "Apple, Banana, Kiwi";
var res = str9.slice(7, 13);


var str10 = "Apple, Banana, Kiwi";
var res = str10.slice(-12, -6);


var str11 = "Apple, Banana, Kiwi";
var res = str11.substring(7, 13); //cannot accept negative indexes
