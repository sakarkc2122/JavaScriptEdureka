// 1. named function
/*
function addNum(a,b)
{
    console.log("named function addNum is called!!");
    return a+b;
}

console.log(addNum(2,3));
*/

// 2. anonymous function
/*
var anon = function (a,b)
{
    console.log("anonymous function is called!!");
    return a+b;
}
anon(5,6);

setTimeout(anon, 3000);
setTimeout(function(){console.log("anonymous function call in setTimeout");}, 2000);

//I was hoping the ouput will be:
// anonymous function is called!!
// anonymous function is called!!             #after 3 second
// anonymous function call in setTimeout      #after 2 second

// But the output is:
// anonymous function is called!!
// anonymous function call in setTimeout
// anonymous function is called!!

//This is maybe due to setTimeout function 
*/

// 3. Constructor
/*
var addNum = new Function("a", "b", "console.log('in constructors function'); return a+b;");
console.log(addNum(3,4));
*/

// 4. Self-Invoking Functions

(function (a, b){
    console.log("I am in the self Invoking function.")
    return a+b;
})(2,6);
 
//round parenthesis in the beginning can ended just outside the call or before the call.