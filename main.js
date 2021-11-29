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
function addToCart(id) {
    console.log(id);
}

/*//select elements
const menuElements = document.querySelector(".menuItems");

//render menu-items
function renderMenuItems() {
    menuItems.forEach( (menuItems) => {
        menuElements.innerHTML += `
            <div class="col-md-4">
                <div class="menu-items">
                    <div>
                        <img src="./images/medium_size-removebg-preview.png" id="small">
                    </div>
                    <p>Small Size</p>
                    <a class="price-btn" href="#">Kshs 350</a>
                    <button type="button" id="1">Add to Cart</button>
                </div>
            </div> 
         `
         
    })

} 
renderMenuItems();*/