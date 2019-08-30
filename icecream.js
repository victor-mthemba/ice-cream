function IceCream() {

    var  toppingList = [

        {topping: "Crumbed peanuts", price: 10.50},
        {topping: "Caramal dip", price: 15.75},
        {topping: "Chocolate Dip", price: 25.50},
        {topping: "Smarties", price: 17.75},
        {topping: "Oreo", price: 21.50}  
    ];

    var flavourList = [

        {flavour: "Vanilla", price: 7.50},
        {flavour: "Chocolate", price: 9.75},
        {flavour: "Strawberry", price: 8.10}

    ];

     var containerList = [

        {container: "Plain Cone", price: 2.50},
        {container: "Sugar Cone", price: 3.75},
        {container: "Paper Cone", price: 5.10}

 ];

    var thePrice = 0;
    var errorMessage = "";

    function addPrice(theFlavour, theTopping, theContainer) {

        var currentTopping = null;
        var currentFlavour = null;
        var currentContainer = null;
        

        for (let i = 0; i < toppingList.length; i++) {
            const topping = toppingList[i];
            if(topping.topping == theTopping) {
               currentTopping = topping;

            }
            
        }

        for(let i = 0; i < flavourList.length; i++) {
            const flavour = flavourList[i];
            if(flavour.flavour === theFlavour) {
               currentFlavour = flavour;
            }
        }
        
         for(let i = 0; i < containerList.length; i++) {
             const container = containerList[i];
             if(container.container === theContainer) {
               currentContainer = container;
             }
         }

        


        if(currentFlavour.flavour === theFlavour && currentTopping.topping === theTopping && currentContainer.container === theContainer) {
         
            thePrice += currentFlavour.price;
            thePrice += currentTopping.price;
            thePrice += currentContainer.price;
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