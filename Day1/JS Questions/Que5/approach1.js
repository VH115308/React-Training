const users = [ 

{ name: "A", role: "admin" }, 

{ name: "B", role: "user" }, 

{ name: "C", role: "admin" }, 

{ name: "D", role: "user" } 

]; 

const groupedValues = users.reduce((acc, user)=>{

    (acc[user.role] = acc[user.role] || []).push({"name":user.name});
    return acc;

}, {});

console.log(groupedValues);

// Try to avoid map, set, etc.
