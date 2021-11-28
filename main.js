//Sign up and login
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const signUpAccountForm = document.querySelector("#signUpAccount");

    document.querySelector("#linkSignUp").addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        signUpAccountForm.classList.remove("form-hidden");

    } );
    document.querySelector("#linkLogin").addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        signUpAccountForm.classList.add("form-hidden");

    } );
    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        //do fetch login
        formMessage(loginForm, 'error', "Invalid Username/Password");

    })

    document.querySelectorAll(".form-input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if(e.target.id === "signUpUserAccount" && e.target.value.length > 0 && e.target.value < 7) {
                inputError(inputElement, "Username must be atleast 7 characters");
            }

        })
    })


});

function formMessage(formElement, type, message) {
    let messageElement = formElement.querySelector(".form-message");

    messageElement.textContent = message;
    messageElement.classList.remove("form-message-success", "form-message-error");
    messageElement.classList.add("form-message-$(type)");

}
formMessage(loginForm, "success", "Logged In Successfully" );


//input errors
function inputError(inputElement, message) {
    inputElement.classList.add("form-input-error");
    inputElement.parentElement.querySelector(".form-input-error-message").textContent = message;


}


//Add to cart

