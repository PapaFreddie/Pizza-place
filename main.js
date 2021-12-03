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
$("#pizza-order").submit(function(e) {
    e.preventDefault();
    var pizzaSize = $("#pizza-size").val()
    var crust = $("#crust").val()
    var toppings = $("#topping").val()
    var quantity = $("#number").val()

    //Select pizza
    switch(pizzaSize){
        case "small":
            price = 500;
        break;
        case "medium":
            price = 700;
        break;
        case "large":
            price = 900;
        break;
        default:
            price = 0;
           
    }
    //Select crust
    switch(crust) {
        case "thincrust":
            cPrice = 150;
        break;
        case "flatbreadcrust":
            cPrice = 250;
        break;
        case "thickcrust":
            cPrice = 200;
        break;
        default:
            cPrice = 100;

    }
    //Select toppings
    switch(toppings) {
        case "sausage":
            tPrice = 50;
        break;
        case "pinneaple":
            tPrice = 30;
        break;
        case "tomato":
            tPrice = 15;
        break;
    }
    Delivery = 170;
    totalPrice = (price + cPrice + tPrice) * pizzaNumber
    tTotal = ((price + cPrice + tPrice) * pizzaNumber) + Delivery


    $(".feedback").show()
    $("#total-cash").HTML(totalPrice)
    $("#pizzaNo").HTML(pizzaNumber)
    $("#delivery").on(click, function(){
        $(".feedback").hide()
        $("list").append(`<td>${pizzaSize.size}</td>`)

    })
    $("#placeOfOrder").click(function(e){
        e.preventDefault()
        var name = $("#realName").val()
        var location = $("#locate").val()
        if(name == ""){
            alert("Please input name")
        }
        else{
            $("#orderText").show()
            $("#received").html(name)
            $("#notice").html(tTotal)
            $("#finalAmmount").html(tTotal) 
        }
    })
    $("#pick").click(function(){
        $("#finalPick").show()
        $(".notifyDelivery").hide()
        $("#finalAmmount").show()
    })

})


var price, cPrice, tPrice, totalPrice, Delivery, tTotal;

class pizza {
    constructor(size, crust, toppings, number) {
        this.size = size,
            this.crust = crust,
            this.toppings = toppings,
            this.number = number;
    }
}

/*let addToCartButtons = document.getElementsByClassName("btn-primary")
let mainContainer = document.getElementsByTagName("tbody")[0]
let quantitiFields = document.getElementsByClassName("no")


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
   
    
for(let i = 0; i < quantitiFields.length; i++){
    quantitiFields[i].addEventListener("click", updateTotal)
    total()
}


}

function addToCart(event){
    numberOfItems = event.target
    numberOfItemsParent = numberOfItems.parentElement.parentElement
    priceField = numberOfItemsParent.getElementsByClassName("pizza-price")[0]
    totalField = numberOfItemsParent.getElementsByClassName("unit-price")[0]
    priceFieldContent = priceField.children[0].innerText.replace('Ksh', '')

    totalField.children[0].innerText = numberOfItems.value * priceFieldContent

    if(isNaN(numberOfItems.value) || numberOfItems <= 0){
        numberOfItems.value = 1
    }
}

function total(){
    let total = 0
    let unitPrice = document.getElementsByClassName("unit-price")
    for(let i = 0; i < unitPrice.length; i++) {
        unitPriceContent = Number(unitPrice[i].innerText.replace('Ksh', ''))
        total += unitPriceContent
    }

}*/