var obj =  {}

console.log(obj)



const s = "a12345fdtrtyrytrr766g76g7f5d65d5dfd7fw8ggahha7h87gagwg87wg8w787wag"

for (let index = 0; index < s.length; index++) {
    const element = s[index];    

    if(obj[element] === undefined) {
        obj[element] = 1
    }
    else {
        obj[element]++;
    }
}

console.log(obj)