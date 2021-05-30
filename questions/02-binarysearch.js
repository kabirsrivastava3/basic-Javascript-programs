const myList = [2, 7, 9, 11, 13, 15, 17, 19, 21];

for (let index = 0; index < myList.length; index++) {
    const element = myList[index];
    console.log({ element });
}

const find = 19

var start = 0;
var end = myList.length;

var mid = (start + end) / 2;

while (start <= end) {
    if (find == myList[mid]) {
        find = myList[mid];
        console.log("found")
    }
    if (find > myList[mid]) {
        start = mid + 1
    }
    else {
        end = mid - 1;
    }
}

