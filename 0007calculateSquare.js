// named function
function nCalSquare(a){
    return a*a;
}

// anonymous function
console.log("calling named function: " + nCalSquare(9));

var aCal = function(b){
    return b*b;
}
console.log("calling anonymous function: " + aCal(6));

// new constructor
var c = new Function("c","return c*c;");
console.log("calling constructor function: " + c(7));

// self-invoking function
(function(a){
    console.log("calling self invoking function: " + a*a); 
    return a*a;
})(3);