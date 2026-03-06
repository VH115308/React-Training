// Approach 2: Using recursion
// Handles all data types

function flattenTheArray(arr){

    let flatArray = [];

    for(let item of arr){
        if(Array.isArray(item)){
            try{
                flatArray = flatArray.concat(flattenTheArray(item));
            }
            catch(e){
                console.error("Error while flattening the array: ", e);
            }
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