/**
 * Created by rakesh on 4/24/14.
 */
/**
 * Created by rakesh on 4/23/14.
 */
/** fizzbuzz is function which used to test
 * wheather a number is divisible by 3 or 3 and 5 or 5
 */
var fizzbuzz=function(number){

    if(number%15==0)

     return "FizzBuzz";

    else if(number%3==0)

         return "Fizz";

    else if(number%5==0)

         return "Buzz";
    else
         return number;
};

module.exports=fizzbuzz;
