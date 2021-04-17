let form = document.getElementById("form");
let username = document.getElementById("username");
let password = document.getElementById("password");
let errormessage = document.getElementById("errormessage");


form.addEventListener("submit",e =>{
    e.preventDefault();
    let message=[];
    //check username is empty
    if (username.value === "" || username.value === null) {
        message.push("username is required"); 
    }
    //check password is empty
    if (password.value === "" || password.value === null) {
        message.push("paswword  is required");
    }
    //check password minimum 6 characters
    if (password.value.length < 6) {
        message.push("password should be minimum 6 characters")
    }
    //check array greater than 0
    if (message.length >0) {
     errormessage.innerHTML = message.join(" ");   
    }
    else{
        console.log("username" + username.value, "password " + password.value);
    }
});
