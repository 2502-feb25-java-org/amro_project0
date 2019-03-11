function buttonFs(){
    document.getElementById("submit").disabled = true;
}
 function buttonEn(){
    document.getElementById("submit").disabled = false;
}



function load(){
    document.getElementById("firstname").value = localStorage.getItem("firstname");
    document.getElementById("lastname").value = localStorage.getItem("lastname");
    document.getElementById("age").value = localStorage.getItem("age");
    document.getElementById("tel").value = localStorage.getItem("tel");
    document.getElementById("email").value = localStorage.getItem("email");

}


function save(){
   localStorage.clear();
    let ids = [document.getElementById("firstname"),
    document.getElementById("lastname"),
    document.getElementById("age"),
    document.getElementById("tel"),
    document.getElementById("email")];
    for (let i = 0; i < ids.length; i++) {
        localStorage.setItem(ids[i].id, ids[i].value); 
    }
}
function validatefirstname(){
    if(document.getElementById("firstname").value.length == 0){
        document.getElementById("errorfn").innerHTML = "First Name can't be empty";
        buttonFs();
    }else{
    document.getElementById("errorfn").innerHTML = "";
    buttonEn();
    }
}

function validatelastname(){
    if(document.getElementById("firstname").value === document.getElementById("lastname").value){
        document.getElementById("errorln").innerHTML = "First Name can't be as Last Name";
        buttonFs();
        
    }else if(document.getElementById("lastname").value.length == 0){
        document.getElementById("errorln").innerHTML = "First Name can't be empty";
        buttonFs();
    }else{
        document.getElementById("errorln").innerHTML = "";
        buttonEn();
    }
}

function validatemiddlename(){
    if(document.getElementById("middlename").value === document.getElementById("lastname").value){
        document.getElementById("errormn").innerHTML = "Middle Name can't be as Last Name";
        buttonFs();
        
    }else{
        document.getElementById("errorln").innerHTML = "";
        buttonEn();
    }
}

function validateage(){
    if(document.getElementById("age").value < 16 || document.getElementById("age").value > 100){
        document.getElementById("errorage").innerHTML = "Age should be between 8 and 120";
        buttonFs();
    }
    else{
        document.getElementById("errorage").innerHTML = "";
        buttonEn();
    }
}

function validatetel(){
    if(!document.getElementById("tel").value.match("[0-9]{3}-[0-9]{3}-[0-9]{4}")){
        document.getElementById("errortel").innerHTML = "Phone has to be like 000-000-0000";
        buttonFs();
    }else{
        document.getElementById("errortel").innerHTML = "";
        buttonEn();
    }
}

function validateemail(){
    if(!document.getElementById("email").value.match("^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$")){
        document.getElementById("erroremail").innerHTML = "email isn't correct";
        buttonFs();
    }else{
        document.getElementById("erroremail").innerHTML = "";
        buttonEn();
    }
}

// window.addEventListener("DOMLoad" , ()=>{
//     let email = document.getElementById("email");

//     email.addEventListener("edit", ()=>{
//         if(email.value.match("^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$")){
//             document.getElementById("erroremail").innerHTML = "email isn't correct";
//             buttonFs();
//         }else{
//             document.getElementById("erroremail").innerHTML = "";
//             buttonEn();  
//         }
//     });


// })();

