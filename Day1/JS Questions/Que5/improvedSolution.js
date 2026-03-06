const users = [ 

{ name: "A", role: "admin" }, 

{ name: "B", role: "user" }, 

{ name: "C", role: "admin" }, 

{ name: "D", role: "user" } 

]; 

const newObj = {}

for(let item of users){
    let role = item.role;
    if(newObj[role]){
        newObj[role].push({"name":item.name});
    }
    else{
        newObj[role] = [{"name":item.name}];
    }
}
console.log(newObj);