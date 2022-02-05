/*
console.log("Hello world");
document.write("Hello Browser");
*/

var general;
console.log(general);
general = 6;
console.log(typeof general);
general = "hello";
console.log(typeof general);
general = true;
console.log(typeof general);
general = null;
console.log(typeof general);

// Array
var space = ["moon", "star", "sun"];
var space01 = new Array("moon", "star", "sun");
console.log(typeof space);
console.log(space.length);

/* JavaScript - Type Conversions
    Concatenation operator: "+"
    Two types: implicit and explicit
    prompt: 
        something which prompts you to write in the data. 
        A global function
        always return string type
    parseInt() OR parseFLoat() explicitly does conversion. 
    alert("fjlkgja");
*/
console.log(2+3);
console.log("Hello" + " there");
console.log("Hello " + 8);

var num1 = prompt("Enter a value:");
console.log(typeof num1);
console.log(num1 + 9);
console.log(parseInt(num1) + 9);

alert("Hi this is emergency by Sakar");