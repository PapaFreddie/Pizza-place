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


//Add to cart functionality here

let addToCartButtons = document.getElementsByClassName("btn-primary")
let mainContainer = document.getElementsByTagName("tbody")[0]
for(let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", addToCart)
}

function addToCart(event){
    button = event.target
     let buttonParent = button.parentElement

     let buttonGrandParent = button.parentElement.parentElement

     let itemName = buttonParent.children[0].innerText
     let itemPrice = buttonParent.children[1].innerText
     let itemImage = buttonGrandParent.children[0].src

     let itemContainer = document.createElement('tr')
     itemContainer.innerHTML = `
     <td><input class="checkbox" type="checkbox"></td>
     <td><img class="image1" src=${itemImage}></td>
     <td class="text">
         <h5 class="pizza-name">${itemName}</h5>
     </td>
     <td class="pizza-price"><h5>${itemPrice}</h5></td>
     <td><input type="number" class="no" value="1"></td>
     <td class="unit-price"><h5>${itemPrice}</h5></td>
     <td><button type="button" class="btn btn-danger">Remove Item</button>
     </td>
     `
     mainContainer.append(itemContainer)

      
    console.log(button)

}