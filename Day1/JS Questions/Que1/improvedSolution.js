const users = [
    { id: 1, name: "John" }, 
    { id: 2, name: "Jane" }, 
    undefined,
    { id: 1, name: "John" }, 
    { id: 3, name: "Mike" },
    { id: 1, name: "John" }, 
    true,
    { id: 2, name: "Jane" }, 
    null,
    { id: 1, name: "John" }, 
    { id: 3, name: "Mike" },
    "Hello",
    [{ id: 3, name: "Alice"}],
]
/* 
New Tasks:
1. Consider Edge Cases
2. Write negative testing
3. Reduce space complexity
*/
const filteredUsers = [];

// Current findings
/*
1. Object.prototype.toString.call(value)
2. "in" keyword: ("id" in user)
3. hasOwnProperty("age")
*/

// O(n^2)
for(let user of users){
    if(user && Object.prototype.toString.call(user) === "[object Object]" && user.hasOwnProperty("id") && user.hasOwnProperty("name") && !filteredUsers.some(u => u.id === user.id)){
        filteredUsers.push(user);
    }
}

for(const user of filteredUsers){
    console.log(user);
}


//Note: Javascript Set approach: ES6 