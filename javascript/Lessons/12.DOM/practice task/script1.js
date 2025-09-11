let form = document.getElementById("userForm");
let tableBody = document.querySelector("#userTable tbody");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 


    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;

    
    let row = document.createElement("tr");

    
    row.innerHTML = `<td>${name}</td><td>${email}</td><td>${age}</td>`;

    
    tableBody.appendChild(row);


    form.reset();
});