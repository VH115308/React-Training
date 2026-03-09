let viewMode = "card";

let fruits = JSON.parse(localStorage.getItem("fruits")) || [];

let searchInput = document.getElementById("searchInput");

// Add fucntionality
let nameInput = document.getElementById("fruitName");
let descInput = document.getElementById("fruitDescription");
let priceInput = document.getElementById("fruitPrice");
let addBtn = document.getElementById("addBtn");

let toggleBtn = document.getElementById("toggleBtn");

let productContainer = document.getElementById("productContainer");
let editId = null;

renderProducts(fruits);

// --------------Utils-----------------------
function renderProducts(fruitList){
    productContainer.className = viewMode === "card"?"card-view":"list-view";
    productContainer.innerHTML = fruitList.map(fruit => 
        `
        <div class="productItem">
            <div class="productInfo">
                <h4>${fruit.name}</h4>
                <p>${fruit.desc}</p>
                <p>$${fruit.price}</p>
            </div>
            <div class="productActions">
                <button onclick="editFruit(${fruit.id})">Edit</button>
                <button onclick="deleteFruit(${fruit.id})">Delete</button>
            </div>
        </div>
        `
    ).join("");
}
function clearForm(){
    nameInput.value = "";
    descInput.value="";
    priceInput.value="";
}
function clearSearchBar(){
    searchInput.value="";
}
//Save
function saveData(){
    localStorage.setItem("fruits", JSON.stringify(fruits));
}
// Delete
function deleteFruit(id){
    fruits = fruits.filter(fruit => fruit.id !== id);
    saveData();
    renderProducts(fruits);
}
//Edit
function editFruit(id){
    let fruit = fruits.find(fruit=>fruit.id === id);

    nameInput.value = fruit.name;
    descInput.value = fruit.desc;
    priceInput.value = fruit.price;

    editId = id;
    addBtn.textContent = "Update";
    clearSearchBar();
}
// Toggle
toggleBtn.onclick = function(){
    viewMode = viewMode === "card"?"list":"card";
    renderProducts(fruits);
}
// Search
searchInput.addEventListener("input", function(){
    let value = searchInput.value.toLowerCase();
    let filtered = fruits.filter(fruit => fruit.name.toLowerCase().includes(value));
    renderProducts(filtered);
});

addBtn.onclick = function(e){
    e.preventDefault();
    let name = nameInput.value.trim();
    let desc = descInput.value.trim();
    let price = Number(priceInput.value.trim());
    if(!name || !desc || price <= 0){
        alert("Enter Valid Inputs");
        return;
    }

    if(editId){
        fruits = fruits.map(fruit => fruit.id === editId? {id:editId, name, desc, price}: fruit);
        editId = null;
        addBtn.textContent = "Add";
    }else{
        fruits.push({
            id: Date.now(),
            name,
            desc, 
            price
        });
    }
    saveData();
    renderProducts(fruits);
    clearForm();
    clearSearchBar();
}
