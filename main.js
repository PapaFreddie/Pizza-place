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
//select elements
const menuElements = document.querySelector(".menu");

//Render menu function
function renderMenu() {
    menu.forEach((menu) => {
        menuElements.innerHTML += `
                <div class="pizza">
                    <div class="pizza-container">
                        <div class="pizza-image">
                            <img src="./images/pizza fresh.jpeg" alt="pizza1">
                        </div>
                        <div class="description">
                            <h4>Small Size</h4>
                            <h5>Ksh 500</h5>
                            <p>Garlic fresh</p>
                        </div>
                        <div class="add-to-cart">
                            <button type="submit">Add to cart</button>
                        </div>
                    </div>
                </div>
        `

    });
}
renderMenu();