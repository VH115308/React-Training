const fieldConfigs = {
  text: `
        <h3>Text Field Settings</h3>

        <label>Label</label>
        <input type="text" id="textLabel" required>

        <br>

        <label>Field Name</label>
        <input type="text" id="textName" required>

        <br>

        <label>Placeholder</label>
        <input type="text" id="textPlaceholder">

        <br>

        <label>Required</label>

        <label>
        <input type="radio" name="textRequired" value="yes"> Yes
        </label>

        <label>
        <input type="radio" name="textRequired" value="no"> No
        </label>
        `,

  dropdown: `
        <h3>Dropdown Settings</h3>

        <label>Label</label>
        <input type="text" id="dropdownLabel" required>

        <br>

        <label>Field Name</label>
        <input type="text" id="dropdownName" required>

        <br>

        <label>Options (comma separated)</label>
        <input type="text" id="dropdownOptions" placeholder="India,USA,UK" required>

        <br>

        <label>Required</label>

        <label>
        <input type="radio" name="dropdownRequired" value="yes"> Yes
        </label>

        <label>
        <input type="radio" name="dropdownRequired" value="no" checked> No
        </label>
        `,

  checkbox: `
        <h3>Checkbox Settings</h3>

        <label>Label</label>
        <input type="text" id="checkboxLabel" required>

        <br>

        <label>Field Name</label>
        <input type="text" id="checkboxName" required>

        <br>

        <label>Options (comma separated)</label>
        <input type="text" id="checkboxOptions" placeholder="HTML,CSS,JS" required>

        <br>

        <label>Required</label>

        <label>
        <input type="radio" name="checkboxRequired" value="yes"> Yes
        </label>

        <label>
        <input type="radio" name="checkboxRequired" value="no" checked> No
        </label>
        `,

  date: `
        <h3>Date Field Settings</h3>

        <label>Label</label>
        <input type="text" id="dateLabel" required>

        <br>

        <label>Field Name</label>
        <input type="text" id="dateName" required>

        <br>

        <label>Min Date</label>
        <input type="date" id="dateMin">

        <br>

        <label>Max Date</label>
        <input type="date" id="dateMax">

        <br>

        <label>Required</label>

        <label>
        <input type="radio" name="dateRequired" value="yes"> Yes
        </label>
        
        <label>
        <input type="radio" name="dateRequired" value="no" checked> No
        </label>
        `,
};
const formContainer = document.querySelector(".formContainer");
const resultFormContainer = document.querySelector(".resultFormContainer");
const typeContainer = document.querySelector(".typeContainer");

let selected = document.querySelector('input[name="typeOption"]:checked').value || "text";
let selectBtn = document.querySelector(".selectBtn");
let buildFormBtn = document.querySelector(".buildFormBtn");

handleTypeChange(selected);
showSavedForms();

function handleTypeChange(value) {
  selected = value;
  formContainer.innerHTML = "";
  if (value === "text") {
    formContainer.innerHTML = fieldConfigs.text;
  } else if (value === "dropdown") {
    formContainer.innerHTML = fieldConfigs.dropdown;
  } else if (value === "checkbox") {
    formContainer.innerHTML = fieldConfigs.checkbox;
  } else {
    //date
    formContainer.innerHTML = fieldConfigs.date;
  }

  formContainer.innerHTML += `
    <br>
    <button class="selectBtn">Select</button>
  `;
}

function getCurrentFieldRefs(type) {
  let result = {};
  if (type === "text") {
    result ={
      type: "text",
      label: document.getElementById("textLabel")?.value || "",
      name: document.getElementById("textName")?.value || "",
      placeholder: document.getElementById("textPlaceholder")?.value || "",
      required: [...document.getElementsByName("textRequired")].find((radio) => radio.checked)?.value === "yes",
    };
  } else if (type === "dropdown") {
    result ={
      type: "dropdown",
      label: document.getElementById("dropdownLabel")?.value || "",
      name: document.getElementById("dropdownName")?.value || "",
      options: document.getElementById("dropdownOptions")?.value.split(",").map((opt) => opt.trim()),
      required: [...document.getElementsByName("dropdownRequired")].find((radio) => radio.checked)?.value === "yes",
    };
  } else if (type === "checkbox") {
    result ={
      type: "checkbox",
      label: document.getElementById("checkboxLabel")?.value || "",
      name: document.getElementById("checkboxName")?.value || "",
      options: document.getElementById("checkboxOptions")?.value.split(",").map((opt) => opt.trim()),
      required: [...document.getElementsByName("checkboxRequired")].find((radio) => radio.checked)?.value === "yes",
    };
  } else if (type === "date") {
    result ={
      type: "date",
      label: document.getElementById("dateLabel")?.value || "",
      name: document.getElementById("dateName")?.value || "",
      min: document.getElementById("dateMin")?.value || "",
      max: document.getElementById("dateMax")?.value || "",
      required: [...document.getElementsByName("dateRequired")].find((radio) => radio.checked)?.value === "yes",
    };
  }
  console.log(">>result:", result);
  return result;
}

document.querySelectorAll('input[name="typeOption"]').forEach((radio) => {
  radio.addEventListener("change", (e) => {
    handleTypeChange(e.target.value);
  });
});

formContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("selectBtn")) {
    e.preventDefault();
    console.log(">>selected:", selected);
    let refs = getCurrentFieldRefs(selected);
    if (!validateCurrentForm(selected)) {
      return; 
    }
    addToResultForm(refs);
    handleTypeChange(selected);
  }
  }
);

function addToResultForm(refs) {
  if (refs.type === "text") {
    resultFormContainer.innerHTML += `
            <label>${refs.label}</label>
            <input type="text" name="${refs.name}" placeholder="${refs.placeholder}" ${refs.required ? "required" : ""}>
            <br>
        `;
  } else if (refs.type === "dropdown") {
    resultFormContainer.innerHTML += `
            <label>${refs.label}</label>
            <select name="${refs.name}" ${refs.required ? "required" : ""}>
                ${refs.options.map((opt) => `<option value="${opt}">${opt}</option>`).join("")}
            </select>
            <br>
        `;
  } else if (refs.type === "checkbox") {
    resultFormContainer.innerHTML += `
            <label>${refs.label}</label>
            ${refs.options
              .map(
                (opt) => `
                <label>
                    <input type="checkbox" name="${refs.name}" value="${opt}"> ${opt}
                </label>
            `,
              )
              .join("")}
            <br>
        `;
  } else if (refs.type === "date") {
    resultFormContainer.innerHTML += `
            <label>${refs.label}</label>
            <input type="date" name="${refs.name}" min="${refs.min}" max="${refs.max}" ${refs.required ? "required" : ""}>
            <br>
        `;
  }
}

function validateCurrentForm(type) {
  let missing = [];

  if (type === "text") {
    if (!document.getElementById("textLabel").value.trim()) missing.push("Label");
    if (!document.getElementById("textName").value.trim()) missing.push("Field Name");
  } else if (type === "dropdown") {
    if (!document.getElementById("dropdownLabel").value.trim()) missing.push("Label");
    if (!document.getElementById("dropdownName").value.trim()) missing.push("Field Name");
    if (!document.getElementById("dropdownOptions").value.trim()) missing.push("Options");
  } else if (type === "checkbox") {
    if (!document.getElementById("checkboxLabel").value.trim()) missing.push("Label");
    if (!document.getElementById("checkboxName").value.trim()) missing.push("Field Name");
    if (!document.getElementById("checkboxOptions").value.trim()) missing.push("Options");
  } else if (type === "date") {
    if (!document.getElementById("dateLabel").value.trim()) missing.push("Label");
    if (!document.getElementById("dateName").value.trim()) missing.push("Field Name");
  }

  if (missing.length > 0) {
    alert("The following fields are required: " + missing.join(", "));
    return false;
  }
  return true;
}

buildFormBtn.addEventListener("click", () => {
  const formHTML = resultFormContainer.innerHTML; 

  if(!formHTML){
    alert("Please add at least one field to the form before submitting.");
    return;
  }
  let formName = prompt("Enter the name of the form:");
  if (!formName) {
    alert("Form name is required.");
    return;
  }
  resultFormContainer.innerHTML = `<h2>${formName}</h2>` + resultFormContainer.innerHTML;
  resultFormContainer.innerHTML += `
    <br>
    <button type="submit" class="submitBtn">Submit</button>
  `;
  if(localStorage.getItem("forms")){
    const existingForms = JSON.parse(localStorage.getItem("forms"));
    if(existingForms.some((form) => form.name === formName)){
      let counter = 0;
      while(existingForms.some((form) => form.name === formName)){
        formName = prompt("A form with this name already exists. Please enter a different name:");
        counter++;
        if (counter > 10) {
          alert("Too many attempts. Please try again later.");
          return;
        }
      }
      return;
    }
    existingForms.push({ name: formName, content: formHTML });
    localStorage.setItem("forms", JSON.stringify(existingForms));
  } else {
    localStorage.setItem("forms", JSON.stringify([{ name: formName, content: formHTML }]));
  }
  resultFormContainer.innerHTML = "";
  showSavedForms();
});

function showSavedForms() {
  const savedForms = JSON.parse(localStorage.getItem("forms")) || [];
  const savedFormsContainer = document.querySelector(".savedFormsContainer");
  savedFormsContainer.innerHTML = "";
  savedForms.forEach((form) => {
    const formDiv = document.createElement("div");
    formDiv.classList.add("savedForm");
    formDiv.innerHTML = `
      <h3>${form.name}</h3>
      <button class="viewBtn">View</button>
      <button class="deleteBtn">Delete</button>
    `;
    savedFormsContainer.appendChild(formDiv);
  });
}

document.querySelector(".savedFormsContainer").addEventListener('click', (e)=>{
  if(e.target.classList.contains("viewBtn")){
    resultFormContainer.innerHTML = "";
    const formName = e.target.previousElementSibling.textContent;
    console.log(">>formName:", formName);
    const savedForms = JSON.parse(localStorage.getItem("forms")) || [];
    const form = savedForms.find((f) => f.name === formName); 
    if(form){
      resultFormContainer.innerHTML = form.content;
      resultFormContainer.scrollIntoView({ behavior: "smooth" });
      resultFormContainer.querySelector(".submitBtn").style.display = "none";
      resultFormContainer.innerHTML += `
        <br>
        <button type="button" class="closeBtn">Close</button>
      `;
    }
  } else if(e.target.classList.contains("deleteBtn")){
    const formName = e.target.previousElementSibling.previousElementSibling.textContent;
    let savedForms = JSON.parse(localStorage.getItem("forms")) || [];
    savedForms = savedForms.filter((f) => f.name !== formName);
    localStorage.setItem("forms", JSON.stringify(savedForms));
    formContainer.innerHTML = "";
    showSavedForms();
  }
})

document.querySelector(".resultFormContainer").addEventListener('click', (e)=>{
  if(e.target.classList.contains("closeBtn")){
    resultFormContainer.innerHTML = "";
  }
});
