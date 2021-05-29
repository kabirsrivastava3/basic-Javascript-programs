let myList = [2,7,9,11,13,15,17,19,21];

var temp=0;
let end=myList.length-1;

for (let index = 0; index < end; index++){
    if (myList[index]>myList[index+1]) {
        temp=myList[index];
        myList[index]=myList[index+1];
        myList[index+1]=temp;
    } 
}


console.log(myList);