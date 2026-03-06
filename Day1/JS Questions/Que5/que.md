### Group By Property 

Group users by their role. 

```js
const users = [ 

{ name: "A", role: "admin" }, 

{ name: "B", role: "user" }, 

{ name: "C", role: "admin" }, 

{ name: "D", role: "user" } 

]; 
```

Expected Output 

```js
{ 

admin: [{name:"A"}, {name:"C"}], 

user: [{name:"B"}, {name:"D"}] 

} 
```