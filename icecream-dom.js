//var flavours = document.querySelector(".FlavourType:checked");
//var container  = document.querySelector(".ContainerType:checked");
//var toppings = document.querySelectorAll(".ToppingType:checked");
var outPrice = document.querySelector(".price-message");
var priceButton = document.querySelector(".priceButton");

var myPriceInstance = IceCream();

function Iceprice() {
    var flavours = document.querySelector(".FlavourType:checked");
    var container  = document.querySelector(".ContainerType:checked");
    var toppings = document.querySelectorAll(".ToppingType:checked"); 

    myPriceInstance.addPrice(flavours.value, toppings.value, container.value);
    outPrice.innerHTML = "R" + myPriceInstance.getPrice();
     
}
priceButton.addEventListener('click', Iceprice);




