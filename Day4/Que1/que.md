### Dynamic Form Builder 

#### Problem 

Build a form builder tool. 

#### Requirements 

- User can add/Remove dynamic fields: 
    1. Text input 
    2. Dropdown 
    3. Checkbox 
    4. Date picker 

    <!-- <!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Form Tool</title>
  </head>
  <body>
    <h1>Form Builder</h1>
    <div class="formInputs">
      <select class="fieldType" onchange="handleFieldType()" required>
        <option value="text">Text</option>
        <option value="dropdown">Dropdown</option>
        <option value="checkbox">Checkbox</option>
        <option value="date">Date</option>
      </select>
      <div class="inputDetails"></div>
      <button class="generateBtn">Generate Form</button>
    </div>

    <div class="formContainer">
      <form id="dynamicForm"></form>
    </div>

    <script src="./main.js"></script>
  </body>
</html> -->



// let generateBtn = document.getElementsByClassName("generateBtn");
// let currentForm = null;

// function handleFieldType() {
//   let fieldType = document.querySelector(".fieldType").value;
//   console.log(fieldType);
//   let inputDetails = document.getElementById("inputDetails");

//   try {
//     if (fieldType === "text") {
//         inputDetails.innerHTML = `
//             <label>Label</label>
//             <input type="text" class="labelInput" required>
//             <br/>
//             <label>Name</label>
//             <input type="text" class="nameInput" required>
//             <br/>
//             <label>Placeholder</label>
//             <input type="text" class="placeholder">
//             <br/>
//             <label>Required</label>
//             <select class="required">
//                 <option value="true">true</option>
//                 <option value="false">false</option>
//             </select>
//             <br/>
//             <label><b>Validation</b></label>
//             <label>Min Length</label>
//             <input type="text">
//         `;
//     } else if (input === "date") {
//     } else if (input === "checkbox") {
//     } else if (input === "dropdown") {
//     } else {
//       throw new Error("Field not available");
//     }
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// // generateBtn.addEventListener("click", () => {});
