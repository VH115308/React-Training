const users = [
    { id: 1, name: "John" }, 
    { id: 2, name: "Jane" }, 
    { id: 1, name: "John" }, 
    { id: 3, name: "Mike" },
    { id: 1, name: "John" }, 
    { id: 2, name: "Jane" }, 
    { id: 1, name: "John" }, 
    { id: 3, name: "Mike" },
    { id: 3, name: "Alice"},
]

// Question: What if same(id) but different(name)?
// Assumption: id is integer

// Complexity: O(n^2)
const filteredUsers = [];

for(let i = 0; i < users.length; ++i){
    let flag = false;
    for(let j = 0; j < filteredUsers.length; ++j){
        if(users[i].id === filteredUsers[j].id){
            flag = true;
            break;
        }
    }
    if(!flag){
        filteredUsers.push(users[i]);
    }
}


for(const user of filteredUsers){
    console.log(user);
}
