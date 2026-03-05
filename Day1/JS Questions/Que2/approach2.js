// Approach 2: Using recursion
// Handles all data types

function flattenTheArray(arr){

    let flatArray = [];

    for(let item of arr){
        if(Array.isArray(item)){
            flatArray = flatArray.concat(flattenTheArray(item));
        }
        else{
            flatArray.push(item);
        }
    }
    return flatArray;
}

const arr = [1, [2, [3, 4], 5], 6]; 
const flatArray = flattenTheArray(arr);

console.log(flatArray);