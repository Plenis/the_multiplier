var assert = require("assert")
var TheMultiplier = require("../multiplier")


describe('The multiplier tests' , function(){
    it('should be able to multiple any digits together', function () {
        let instance = TheMultiplier;

        instance.multiply({
            number: 2,
            multiplier: 2
        })
    
        assert.equal(instance.multiply(2*2), 4)
    
    });
    
  
});