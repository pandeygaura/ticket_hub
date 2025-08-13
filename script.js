let form= document.querySelector("form");

let first_name = document.getElementById("first_Name");
let last_name = document.getElementById("last_Name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let f1 = document.getElementById("f1");
let l1 = document.getElementById("l1");
let e1 = document.getElementById("e1");
let p1 = document.getElementById("p1");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let firstName = first_name.value.trim();
    let lastName = last_name.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();

    let isValid = true;

    if (firstName === "") {
        f1.textContent = "First name is required";
        f1.classList.add("form_required");
        isValid = false;
    } else {
        f1.textContent = "";
    }

    if (lastName === "") {
        l1.textContent = "Last name is required";
        l1.classList.add("form_required");
        isValid = false;
    } else {
        l1.textContent = "";
    }

    if (emailValue === "") {
        e1.textContent = "Email is required";
        e1.classList.add("form_required");
        isValid = false;
    } else {
        e1.textContent = "";
    }

    if (passwordValue === "") {
        p1.textContent = "Password is required";
        p1.classList.add("form_required");
        isValid = false;
    } else {
        p1.textContent = "";
    }

    if (isValid) {
        alert("Form submitted successfully!");
        // Here you can add code to send the form data to the server
    }
});
