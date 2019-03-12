let bt = document.getElementById("signinbt");
let name = document.getElementById("userName");
let form = document.getElementById("form");


bt.addEventListener("click", ()=>{
    let user = document.getElementById("user").value;
    let pass = document.getElementById("password").value;
    if (user.toLowerCase() === "admin" && pass === "Password123") {
        form.action = "game.html";
    }
    else{
        alert("Invalid user or password");
    }
})

let forgetlink = document.getElementById("forgetlink");
let num = 0;
forgetlink.addEventListener("click", ()=>{
    num++;
    if(num === 1)
        alert("Try to remember it yourself!!!!");
    else if (num === 2)
        alert("Hmmm... Are you sure???");
    else{   
        alert("bye bye");
        forgetlink.innerHTML = "";
    }
})