function countCharacters(input){
    let result = {};
    
    for(let item of input){
        if("a" <= item && item <= "z"){
            result[item] = result[item] ? result[item]+1:1;
        }
    }
    console.log(result);
}

let input="aaa1a2a2ass4a2s5b";
countCharacters(input);