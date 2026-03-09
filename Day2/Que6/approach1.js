
const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 4, name: "Stephen" },
    "Stephen",
    { id: 3, name: "Mike" },
    { id: 5, name: "Enrique" },
    true,
    12
]
function searchUser() {
    let input = document.getElementById("input").value.toLowerCase();

    const resultUsers = [];

    users.forEach((user)=>{
        if(Object.prototype.toString.call(user) != "[object Object]")return;
        
        if(user["name"] && (typeof user["name"] == "string")){
            let lowerUsername = user["name"].toLowerCase();
            if(lowerUsername.includes(input)){
                resultUsers.push(user["name"]);
            }
        }
    });

    let result = document.getElementById("result");
    console.log(resultUsers);
    result.innerHTML = resultUsers.map(username=> `<li>${username}</li>`).join("");
}