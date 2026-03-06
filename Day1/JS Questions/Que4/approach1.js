const arr = [1,2,3,5,6];

// Approach 1: Using sum formula
// O(n)
let n = arr.length + 1;
let nSum = (n*(n+1))/2;

let currSum = arr.reduce((acc, curr)=>acc+curr, 0);

console.log("Missing Value: ", nSum-currSum);


