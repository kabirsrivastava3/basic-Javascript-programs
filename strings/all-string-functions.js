var text1 = "ABCDCDP1244CDP$%#^&@&#&&()CDP";
var text2 = "ADD THIS";
var reverseText1 = "";
var traverse = 0, vowel, uppercase, consecutive1, consecutive2, specialchar;
const last3 = 3;
for (let index = 0; index < text1.length - 1; index++) {
    traverse = text1.charAt(index);

    if (traverse == 65 && traverse == 90) {
        uppercase++;
        consecutive1 = traverse + 1;
    }
    if (traverse == 97 && traverse == 122) {
        consecutive2 = traverse + 1;
    }
    if (traverse == 32 && traverse == 47
        || traverse == 58 && traverse == 64
        || traverse == 91 && traverse == 96
        || traverse == 123 && traverse == 126) {
        specialchar++;
    }
    if (traverse == 'A' || traverse == 'E' || traverse == 'I' || traverse == 'O' ||
        traverse == 'U' || traverse == 'a' || traverse == 'e' || traverse == 'i' || traverse == 'o' ||
        traverse == 'u') {
        vowel++;
    }
    if (traverse == 'CDP' && traverse == 'cdp') {

    }
    reverseText1 = traverse + reverseText1;

}

console.log(text1.substring(text1.length - last3));
console.log(uppercase);

console.log(specialchar);
console.log()
var text3 = text1.concat("", text2);
console.log(text3);
console.log(reverseText1);