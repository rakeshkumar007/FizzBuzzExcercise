/**
 * Created by rakesh on 4/24/14.
 */
var assert=require("assert");
var fizbuzz=require("../elisa/FizzBuzz");
;
describe('MyFizbuzz',function(){
    it('should return Fizzbuzz if it is divisible by 3 and 5',function(){

        assert.equal("FizzBuzz",fizbuzz(15))
        assert.equal("FizzBuzz",fizbuzz(30))
    });
    it('should return Fizz if it is divisible by 3 but not 5',function(){

        assert.equal("Fizz",fizbuzz(3))
        assert.equal("Fizz",fizbuzz(6))

    });
    it('should return Fizz if it is divisible by 5 but not 3',function(){

        assert.equal("Buzz",fizbuzz(5));
       assert.equal("Buzz",fizbuzz(10));

    });
    it('should return number itself if not divisible by 5 and 3',function(){

        assert.equal("113",fizbuzz(113));

    });

});