//Approach 2: Using XOR
// O(n)

const arr = [1,2,3,5,6];

let n = arr.length + 1;

let totalXor;

for(let i = 1; i <= n; ++i){
    totalXor ^= i;
}

let currXor = arr.reduce((acc, curr)=>{
    return acc ^ curr;
}, 0);

console.log("Missing Value: ", totalXor^currXor);


