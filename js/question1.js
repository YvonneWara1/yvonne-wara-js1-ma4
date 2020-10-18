const form = document.querySelector("#contactForm");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");

function checkLastName () {

    event.preventDefault();

    if(checkLength(lastName.value, 5) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
 
    }
    console.log("Hi");
}

form.addEventListener("submit", checkLastName);


function checkLength(value, len) {
if (value.trim().length > len) {
    return true;
}else {
    return false;
 }
}