let username=document.getElementById("username");
let password=document.getElementById("password");
let template=document.getElementById("template");
let form=document.getElementById("form");


form.addEventListener("submit",e=>{
    e.preventDefault();
    console.log(username.value);
    console.log(password.value);
});