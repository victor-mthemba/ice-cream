function IceCream() {

    var  toppingList = [

        {topping: "Caramel", price: 10.50},
        {topping: "Sprinkle", price: 15.75},
        {topping: "Chocolate syrup", price: 25.50},
        {topping: "Strawbarry sauce", price: 17.75},
        {topping: "Oreo", price: 21.50},   
    ];

    var flavourList = [

        {flavour: "Vanilla", price: 7.50},
        {flavour: "Chocolate", price: 9.75},
        {flavour: "Strawberry", price: 8.10},
        {flavour: "Mint Chocolate Chip", price: 9.00},
        {flavour: "Moose tracks", price: 8.60},
    ];

    var thePrice = 0;
    var errorMessage = "";

    function addPrice(theFlavour, theTopping) {

        var currentTopping = null;
        var currentFlavour = null;
        

        for (let i = 0; i < toppingList.length; i++) {
            const topping = toppingList[i];
            if(topping.topping === theTopping) {
               currentTopping = topping;
            }
        }
        

        for(let i = 0; i < flavourList.length; i++) {
            const flavour = flavourList[i];
            if(flavour.flavour === theFlavour) {
               currentFlavour = flavour;
            }
        }

        if(currentFlavour.flavour === "" && currentTopping.topping === "" ) {
            errorMessage = "You have selected nothing!";
            return false;
        }


        if(currentFlavour.flavour === theFlavour && currentTopping.topping === theTopping) {
            thePrice += currentFlavour.price;
            thePrice += currentTopping.price;
        }


    }

    function getEorrorMessage() {
        return errorMessage;
    }

    function getPrice() {
        return thePrice.toFixed(2);
    }

    return {

        getEorrorMessage,
        addPrice,
        getPrice,
    }


}