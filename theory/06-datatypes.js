var str = 06 + "Some Text";
console.log({str});

var str = "06" + "Some Text";
console.log({str});

var str = "Some Text" + "06";
console.log({str});

var str = "Some Text" + 06;
console.log({str});

var str = "Some Text" + 6 + 10;
console.log({str});

var str = 6 + 10 + "Some Text";
console.log({str});

var x = 7;
var y = 7;
var z = 0;
console.log(x==y);      
console.log(x==z);       

var p = 123e5; 
console.log(p);      
var o = 123e-5; 
console.log(p);

var aa=""; 
console.log(typeof aa);
var bb="John";
console.log(typeof bb); 
var cc="John Doe";
console.log(typeof cc);
var dd=0;
console.log(typeof dd); 
var ee=314;            
console.log(typeof ee); 
var ff=3.14;            
console.log(typeof ff);
var gg=3;          
console.log(typeof gg);
var hh=3+4;            
console.log(typeof hh);
var ii=true;        
console.log(typeof ii);
var jj=false;          
console.log(typeof jj);   
var kk={firstName:"John", lastName:"Doe"};
console.log(typeof kk); 
var ll=["Saab", "Volvo", "BMW"];
console.log(typeof ll);

var mo;    // Value is undefined, type is undefined
mo=undefined;     // Value is undefined, type is undefined

var mm = {firstName:"kukoo", lastName:"mwww", age:27, eyeColor:"red"};
mm = null;   
console.log(typeof mm);

var nn = {firstName:"kukoo", lastName:"mwww", age:27, eyeColor:"red"};
nn = undefined;   
console.log(typeof nn);

var oo=null;
var mm=undefined;
console.log(oo==mm);  
console.log(oo===mm);  
var pp=true;
console.log(typeof pp);
var qq=false;
console.log(typeof qq);
var q;
var rr=q;
console.log(typeof rr);
var ss={name:'John', age:34};
console.log(typeof rr);
var tt=[1,2,3,4];
console.log(typeof tt);
var uu= null;
console.log(typeof uu);
function myFunc(){}
var vv=myFunc;
console.log(typeof vv);