const arr = [1, [2, [3, 4], 5], 6]; 

// Approach 1: Using toString
// Assumption: The array contains only numbers and nested arrays of numbers. No other data types are present.

// TC: O(n)
const arrToString = arr.toString();//1,2,3,4,5,690
const newArray = arrToString.split(',').map(Number);//["1", "2", "3", "4", "5", "6"]
console.log(newArray);

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
flatArray.push(currentNumber);//push the last number
console.log(flatArray);