const arr = [1, [2, [3, 4], 5], 6]; 

// Approach 1: Using toString
// Assumption: The array contains only numbers and nested arrays of numbers. No other data types are present.

// TC: O(n)
const arrToString = arr.toString();
const flatArray = [];

let currentNumber = 0;

for(const item of arrToString){
    if(item === ','){
        flatArray.push(currentNumber);
        currentNumber = 0;
    }
    else{
        currentNumber = currentNumber*10 + Number(item);
    }
}
console.log(flatArray);