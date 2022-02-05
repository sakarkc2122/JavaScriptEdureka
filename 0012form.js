function validateForm(){
    var name=document.getElementById("name");
    var phno=document.getElementById("phno");

    if (name.value==""){
        alert("please enter some value in Name");
    }
    
    
    if(!isNaN(name.value)){
        alert("please enter some value in Name");
    }
    if(isNaN(phno.value)){
        alert("please enter phone number!!");
    }
}