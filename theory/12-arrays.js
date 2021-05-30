let myList = ["qwer", "asdfg", "zxcvb"];

console.log({ myList });

console.log({ secondElement: myList[1] });

for (let index = 0; index < myList.length; index++) {
    const element = myList[index];
    console.log({ index, element })
}

// Push
myList.push("lkjhgf")
console.log({ myList });

// Pop
myList.pop()
console.log({ myList });

// Reverse
myList.reverse()
console.log({ myList });
