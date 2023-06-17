// employee array
let employees = [];

//function generator a unquice id on each employee.
function generatorID() {
  return employees.length + 1;
}
//function create a obj and push to array
function addedEmployee(name, profession, age) {
  console.log(name);
  let employe = {
    id: generatorID(),
    name: name,
    profession: profession,
    age: age,
  };
  employees.push(employe);
  displayemployeData();
  showMessage("Success:  Employee Added!", "success");
}

//function showing message on display employe all details filled or not.
function showMessage(messageStr, className) {
  let messageDiv = document.getElementById("message");
  messageDiv.innerText = messageStr;
  messageDiv.className = className;
}
// function update data on UI design.
function displayemployeData() {
  const AddedEmployee_container = document.querySelector(".added-employee");
  AddedEmployee_container.innerHTML = "";
  console.log(employees);
  employees.forEach((employe) => {
    const update_user_data = document.createElement("div");
    const button = document.createElement("button");
    const addData = document.createElement("div");
    addData.classList.add("addData");
    button.id = "delete-btn";
    button.innerText = "Delete User";
    button.addEventListener("click", () => deleteEmployee(employe.id));
    update_user_data.classList.add("update_user_data");
    let innerHTML = `
                            <div class="id">${employe.id}</div>
                            <div class="name">Name: ${employe.name}</div>
                            <div class="profession">Profession: ${employe.profession}</div>
                            <div class="age">age: ${employe.age}</div>`;

    update_user_data.innerHTML = innerHTML;
    addData.append(update_user_data);
    addData.append(button);
    AddedEmployee_container.append(addData);
  });
}

// function is delete the employe
function deleteEmployee(id) {
  // console.log(id);
  employees = employees.filter((employe) => employe.id != id);
  // console.log(employees);
  displayemployeData();
}
// listener handle a submit event.
document.getElementById("employee_Form").addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let profession = document.getElementById("profession").value;
  let age = document.getElementById("age").value;

  if (name.trim() === "" || profession.trim() === "" || age.trim() === "") {
    showMessage(
      "Error: Please Make sure All the fields are filled before adding in an employee !",
      "error"
    );
  } else {
    addedEmployee(name, profession, age);
    document.getElementById("employee_Form").reset();
  }
});
// displayemployeData();
