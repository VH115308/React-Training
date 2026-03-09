function findPairs(arr, sum){
    
    if(!Array.isArray(arr)){
        return [];
    }

    const set = new Set();//space is required, it also saves time complexity here
    let pairs = [];

    for(let num of arr){
        if(typeof num != "number" || set.has(num)) continue;
        
        if(arr.some(n => n === sum-num)){
            pairs.push([num, sum-num]);
            set.add(sum-num);
            set.add(num);
        }
    }

    for(let [n1, n2] of pairs){
        console.log(n1, " ", n2);
    }
}

const input = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 0, -1, 8];
findPairs(input, 7);