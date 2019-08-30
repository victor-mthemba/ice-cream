describe('Ice cream building' , function(){
    it('should be able to return  correct price if you want vanilla ice cream with Crumed peanuts and plain cone' , function(){
        var instance = IceCream();
        instance.addPrice("Vanilla", "Crumbed peanuts", "Plain Cone"); 

        assert.equal(instance.getPrice(), 20.50);
    });

    it('should be able to return  correct price if you want chocolate ice cream with caramel dip topping and plain cone' , function(){
        var instance = IceCream();
        instance.addPrice("Chocolate", "Caramal dip", "Plain Cone"); 

        assert.equal(instance.getPrice(), 28.00);
    });


});