// using set :uses 
// Complexity: O(n)

const users = [
    { id: 1, name: "John" }, 
    { id: 2, name: "Jane" }, 
    { id: 1, name: "John" }, 
    { id: 3, name: "Mike" },
    { id: 1, name: "John" }, 
    { id: 2, name: "Jane" }, 
    { id: 1, name: "John" }, 
    { id: 3, name: "Mike" },
    { id: 3, name: "Alice" },
]

const set = new Set();

// Approach 2.1:Using filter+set:
const filteredUsers = users.filter(user => {
    if(set.has(user.id)) return false;
    set.add(user.id);
    return true;
})

// Approach 2.2:

// const filteredUsers = [];
// for(let user of users){
//     if(!set.has(user.id)){
//         filteredUsers.push(user);
//         set.add(user.id);
//     }
// }

filteredUsers.forEach(user => console.log(user))
