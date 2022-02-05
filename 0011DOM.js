// event listener file

function paraClicked(){
    document.getElementById("abc").setAttribute("style", "color:red");
}
function paraMouseOver(){
    document.getElementById("abc").setAttribute("style", "color:blue");
}
// adding a listener dynamically
document.getElementById("abc").addEventListener("click", paraClicked);
document.getElementById("abc").addEventListener("mouseover", paraMouseOver);

// All the listener or the events are always written in small-case.
// when you add event listener dynamically, make sure you write the function name without the calling round bracket.

function buttonClick(){
    document.getElementById("b").setAttribute("style", "color:blue");
}
function buttonMouse(){
    document.getElementById("b").setAttribute("style", "color:red");
}