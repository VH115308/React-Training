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


// Using map: new approach
// TC: O(n), SC: O(n)


const filteredUsers = [
    ...new Map(users.map(user=>[user.id, user])).values()
]

filteredUsers.forEach(user => console.log(user))
