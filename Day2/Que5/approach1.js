function countCharacters(input){
    let result = {};
    
    for(let item of input){
        if("0" <= item && item <= "9"){
            result[item] = result[item] ? result[item]+1:1;
        }
    }
    console.log(result);
}

let input="aaa1a2a2ass4a22s55b";
countCharacters(input);