
var n=3;

for (var i = 1; i <= n; i++) {
    for (var j= 1; j <= i; j++) {
        
        process.stdout.write("*");
    } 
        console.log("");
}
    
var i;    
for (i = 1; i <= n; i++) {
    for (var j= 1; j <= i; j++) {
        
        process.stdout.write(i.toString());
    } 
        console.log("");
}

var i;    
for (i = 1; i <= n; i++) {
    for (var j= 1; j <= i; j++) {
        
        process.stdout.write(j.toString());
    } 
        console.log("");
}
