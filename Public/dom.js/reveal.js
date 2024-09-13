


//revealing user password
// Get references to the input element and the icon elements

document.addEventListener('DOMContentLoaded', function(){
    var passwordInput = document.getElementById("password");
    var deleteIcon = document.querySelector(".delete");
    var revealIcon = document.querySelector(".reveal");
    
    // Initial state: Password is hidden, delete icon is shown, reveal icon is hidden
    passwordInput.type = 'password';
    deleteIcon.style.display = 'inline-block';
    revealIcon.style.display = 'inline-block'
    // Add a click event listener to toggle the icons and password visibility
    deleteIcon.addEventListener("click", function () {
        passwordInput.value = ''; // Clear the password input
    });
    
    revealIcon.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text"; // Reveal the password
            deleteIcon.style.visibility = "hidden"; // Hide the "delete" icon
            revealIcon.style.display = "inline-block"; // Show the "reveal" icon
        } else {
            passwordInput.type = "password"; // Hide the password
            deleteIcon.style.visibility = "visible"; // Show the "delete" icon
            revealIcon.style.display = "inline-block"; // Hide the "reveal" icon
        }
    });
    
    
})






//BASIC FORM VALIDATION FOR INPUT ONLY

function showEror(errorElement, errorMessage) {
    document.querySelector("." + errorElement).classList.add("display-error");
    document.querySelector("." + errorElement).innerHTML = errorMessage;
}
function clearError() {
    var errors = document.querySelectorAll(".error")
    for (var error of errors) {
        error.classList.remove("display-error");
    }
}

clearError();



var form = document.forms['login-form'];
form.onsubmit = function () {
    if (form.email.value === "" && form.pass.value==="") {
        showEror("email-error", "This field is required");
        return false;
    } 
    if (form.pass.value === "") {
        showEror("pass-error", "This field is required");
        return false;
    } else {
        return true;
    } 
    
};



//LOGIN DISPLAY

//    var login = document.getElementById("login");
//    var rotateicon =document.querySelector("rotate")
//    login.addEventListener("click", function(){
//      this.value= style.opacity="0";
//    })




