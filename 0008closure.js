var add = (function(){
    var counter = 0;
    return function () {return counter += 1;}
})();

// We have a variable called "add".
// It has self invoking function.
// It has a variable "counter" of its own.
// And it returns another function as output.
// and that function actually uses the function i.e. defined in the outer scope.


// In console, you can check closure by:
// console.dir(add)

// JSON = Java Script Object Notation