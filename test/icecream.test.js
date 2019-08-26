describe('Ice cream building' , function(){
    it('should be able to return  correct price if you want vanilla ice cream with caramel topping' , function(){
        var instance = IceCream();
        instance.addPrice("Vanilla", "Caramel"); 

        assert.equal(instance.getPrice(), 18.00);
    });

    it('should be able to return  correct price if you want Strawberry ice cream with caramel topping' , function(){
        var instance = IceCream();
        instance.addPrice("Strawberry", "Caramel"); 

        assert.equal(instance.getPrice(), 18.60);
    });

});