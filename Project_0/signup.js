function buttonFs() {
    document.getElementById("submit").disabled = true;
}
function buttonEn() {
    document.getElementById("submit").disabled = false;
}

// load all saved data from local storage
function load() {
    document.getElementById("firstname").value = localStorage.getItem("firstname");
    document.getElementById("lastname").value = localStorage.getItem("lastname");
    document.getElementById("age").value = localStorage.getItem("age");
    document.getElementById("tel").value = localStorage.getItem("tel");
    document.getElementById("email").value = localStorage.getItem("email");
    document.getElementById("middlename").value = localStorage.getItem("middlename");
    document.getElementById("addressline1").value = localStorage.getItem("addressline1");
    document.getElementById("addressline2").value = localStorage.getItem("addressline2");
    document.getElementById("zipcode").value = localStorage.getItem("zipcode");
    document.getElementById("city").value = localStorage.getItem("city");
    document.getElementById("state").value = localStorage.getItem("state");
}

// save all form data to local storage
function save() {
    localStorage.clear();
    let ids = [document.getElementById("firstname"),
    document.getElementById("lastname"),
    document.getElementById("age"),
    document.getElementById("tel"),
    document.getElementById("email"),
    document.getElementById("middlename"),
    document.getElementById("addressline1"),
    document.getElementById("addressline2"),
    document.getElementById("zipcode"),
    document.getElementById("city"),
    document.getElementById("state")];
    for (let i = 0; i < ids.length; i++) {
        localStorage.setItem(ids[i].id, ids[i].value);
    }
}

// validate first name
function validatefirstname() {
    if (document.getElementById("firstname").value.length == 0) {
        document.getElementById("errorfn").innerHTML = "First Name can't be empty";
        buttonFs();
    } else {
        document.getElementById("errorfn").innerHTML = "";
        buttonEn();
    }
}

// validate last name
function validatelastname() {
    if (document.getElementById("firstname").value === document.getElementById("lastname").value) {
        document.getElementById("errorln").innerHTML = "First Name can't be as Last Name";
        buttonFs();

    } else if (document.getElementById("lastname").value.length == 0) {
        document.getElementById("errorln").innerHTML = "First Name can't be empty";
        buttonFs();
    } else {
        document.getElementById("errorln").innerHTML = "";
        buttonEn();
    }
}

// validate middle name
function validatemiddlename() {
    if (document.getElementById("middlename").value === document.getElementById("lastname").value) {
        document.getElementById("errormn").innerHTML = "Middle Name can't be as Last Name";
        buttonFs();

    } else {
        document.getElementById("errorln").innerHTML = "";
        buttonEn();
    }
}

// validate age
function validateage() {
    if (document.getElementById("age").value < 16 || document.getElementById("age").value > 120) {
        document.getElementById("errorage").innerHTML = "Age should be between 16 and 120";
        buttonFs();
    }
    else {
        document.getElementById("errorage").innerHTML = "";
        buttonEn();
    }
}

// validate phone
function validatetel() {
    if (!document.getElementById("tel").value.match("[0-9]{3}-[0-9]{3}-[0-9]{4}")) {
        document.getElementById("errortel").innerHTML = "Phone has to be like 000-000-0000";
        buttonFs();
    } else {
        document.getElementById("errortel").innerHTML = "";
        buttonEn();
    }
}

// validate email
function validateemail() {
    if (!document.getElementById("email").value.match("^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$")) {
        document.getElementById("erroremail").innerHTML = "email isn't correct";
        buttonFs();
    } else {
        document.getElementById("erroremail").innerHTML = "";
        buttonEn();
    }
}

// using zipcode API to fill city and state based on input zipcode
function fillcity() {
    let zip = document.getElementById("zipcode").value;
    let city = document.getElementById("city");
    let state = document.getElementById("state");
    let errorzip = document.getElementById("errorzip");
    

    const URL = "https://api.zip-codes.com/ZipCodesAPI.svc/1.0/QuickGetZipCodeDetails/" + zip + "?key=DEMOAPIKEY";;
    let xtr = new XMLHttpRequest();
    let str;

    xtr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // parse JSON to Js Object
            str = JSON.parse(xtr.response);
            if (str.City && str.State) {
                // set value for city
                city.value = str.City;
                // set the value for state
                state.value = str.State;
                errorzip.innerHTML = "";
                buttonEn();
            } else {
                errorzip.innerHTML = "Wrong zipCode";
                buttonFs();
            }
        }
    }
    xtr.open("get", URL, true);
    xtr.send();
}

