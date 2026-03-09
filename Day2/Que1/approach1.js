// Edge cases:
// 1. If we have spaces at beginning or ending of string

function stringManipulation(input) {
    let isSpace = false;
    let currStr = "";
    let newStr = "";

    for (const letter of input) {
        if (isSpace && letter !== " ") {
            newStr += currStr;
            currStr = letter;
            isSpace = !isSpace;
        }
        else if (!isSpace && letter === " ") {
            newStr += currStr;
            currStr = letter;
            isSpace = !isSpace;
        }
        else {
            currStr = letter + currStr;
        }
    }
    newStr += currStr;
    console.log(newStr);
}
stringManipulation("Hello World");
stringManipulation(" Hello World");
stringManipulation("Hello World ");