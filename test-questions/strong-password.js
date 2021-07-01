function strongPassword(text1){

var capAlpha=0;
var smallAlpha=0;
var digCount=0;

for (let index = 0; index < text1.length; index++) {
    element=text1.charAt(index);
    if (element =>65 && element <=90) {
        capAlpha++;
    }
    if (element =>97 && element <=122) {
        smallAlpha++;
    }
    if (element =>48 && element <=57) {
        digCount++;
    }

}

        if(capAlpha>=1 && smallAlpha>=1 && digCount>=1 && text1.length>8){
              console.log("Strong Password"+text1)
        }
        else{
            console.log("Short Password, Enter Again");
        }
        return text1;

}
console.log(strongPassword("anno"));

