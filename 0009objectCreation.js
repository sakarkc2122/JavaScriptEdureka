// 1st way:
/*
function createPerson(){
    var person = new Object();
    person.designation = "Trainer";
    person.name = "Gauri";
    person.phno = 9876543210;
    return person;
}
var gauri = createPerson();
*/

// 2nd way:
/*
function createPerson2(){
    var person = {};
    person.designation = "Trainer";
    person.name = "Gauri2";
    person.phno = 9876543210;
    return person;
}
gauri = createPerson2();
*/

// 3rd way:
/*
function createPerson3(){
    var person = {};
    person['name'] = "Gauri3";
    person['designation'] = "Trainer";
    person['phno'] = 9876543210;
    return person;
}
gauri = createPerson3();
alert("name: " + gauri.name + "\ndesignation: " + gauri.designation);
*/

// 4th way:
/*
function createPerson4(){
    var person = {
        name: "Gauri4",
        age: 21,
        designation: "Trainer",
        phno: "9876543210"
    };
    return person;
}
gauri=createPerson4();
*/

//5th way:
/*
function Person(){
    this.name = "Gauri5";
    this.designation = "Trainer";
    this.age = 21;
}
gauri = new Person()
*/

// 6th way:
// # Object creation with Object.creat()
// # Creates (duplicates) an object with a prototype object
// # No need to define a constructor function for the object
// # Set values for the initial set of properties (attributes)
/*
var Animal = {
    type: "Invertibrates",
    displayType: function(){alert("type is: "+this.type);}
}
var Horse = Object.create(Animal);
Horse.type = "something else";
Horse.displayType();
*/

// Delete an Object's property with delete keyword

var Trainer = {
    name: "ABC",
    subject: ["Math", "Physics", "Chemistry"],
    Teaches: ['F','S'],
    age: 30
}
var properties = "";
for (p in Trainer){
    properties += p + " : ";
}
console.log("Before deletion: "+ properties);

delete Trainer.age;

var properties = "";
for (p in Trainer){
    properties += p + " : ";
}
console.log("After deletion: "+ properties);