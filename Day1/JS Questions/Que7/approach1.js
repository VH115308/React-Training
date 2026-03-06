// cpp approach we used store is map
//  key: and its children

const arr = [ 

{ id:1, parentId:null }, 

{ id:2, parentId:1 }, 

{ id:3, parentId:1 }, 

{ id:4, parentId:2 } 

]

// utils
function printTree(map, parentId, level){
    console.log(" ".repeat(level*4) + parentId);
    for(let item of map.get(parentId) || []){
        printTree(map, item, level+1);
    }
}
//
const map = new Map();
const children = new Set();

for(let item of arr){
    children.add(item.id);
    if(map.has(item.parentId)){
        map.get(item.parentId).push(item.id);
    }
    else{
        map.set(item.parentId, [item.id]);
    }
}

const parentIds = new Set(map.keys());

const rootIds = [...parentIds].filter(id=>!children.has(id));

console.log("Root Ids: ", rootIds);

for(let rootId of rootIds){
    printTree(map, rootId, 0);
    console.log("End of tree with root id: ", rootId);
}
