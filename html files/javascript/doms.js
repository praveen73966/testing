//   let form = document.createElement("form");
//   form.action="#";
//   form.method="GET";

//   let divForUsername=document.createElement("div");
//   let divForPassword=document.createElement("div");
//   let divForButton=document.createElement("div");

//   form.appendChild(divForUsername);
//   form.appendChild(divForPassword);
//   form.appendChild(divForButton);

//   let labelForUsername=document.createElement("label");
//   let labelForPassword=document.createElement("label");

//   labelForUsername.htmlFor="usename";
//   labelForPassword.htmlFor="password";

//   let inputForUsername=document.createElement("input");
//   let inputForPassword=document.createElement("input");

//   inputForUsername.type="text";
//   inputForUsername.id="username";
//   inputForUsername.placeholder="enter username";
//   inputForUsername.name="username";

//   inputForPassword.type="password";
//   inputForPassword.id="password";
//   inputForPassword.name="password";
//   inputForPassword.placeholder="enter password";

//   let button=document.createElement("button");
//   button.textContent="login";

//   divForUsername.appendChild(labelForUsername);
//   divForUsername.appendChild(inputForUsername);

//   divForPassword.appendChild(labelForPassword);
//   divForPassword.appendChild(inputForPassword);

//   divForButton.appendChild(button);

//   document.body.appendChild(form);  




 //add dynamic classes through dom
//   let links=document.getElementsByTagName("a");//html collections

//   for(i=0;i<links.length;i++){
//       links[i].className="links link- "+1;
//   }

//   console.log(links);
  
//dom events
// let btn=document.getElementById("btn");
// btn.onclick = function(){
//     console.log("button clicked");
// }
// btn.onmouseleave =function(){
//     console.log("mouse  leaved");
// }
// btn.onmouseenter = function(){
//     console.log("mouse entered");
// }

//dom built in property
// let btn=document.getElementById("btn");
// btn.onclick=function(){
//     console.log('event');
//     console.log(`type of event $(event.type)`);
// }

//dom built in method
// let btn=document.getElementById("btn");
// btn.addEventListener("click",() =>{
//     console.log("hello");
// });

// let btn=document.getElementById("btn");
// btn.addEventListener("click",()=>{
//     document.body.style.background="red";
    
// })


//classList.toggle
// let btn=document.getElementById("btn");
// btn.addEventListener("click",()=>{
//     document.body.style.background="red";
//     document.body.classList.toggle("active");
// });

 //input keyboard event
// let input=document.getElementById("input");

// input.addEventListener("keyup",e =>{
//     console.log(e.target.value);
// })

// input.addEventListener("keyup",e =>{
//     if(e.keyCode=== 13){
//         console.log(e.target.value);
//     }
// })

// let text1=document.getElementById("text1");
// let text2=document.getElementById("text2");

// text1.addEventListener("keyup",e=>{
//     text2.innerText=e.target.value;
//     if(e.target.value.length > 10){
//         text2.style.background="crimson";
//     }else if(e.target.value.length<10){
//         text2.style.color="pink";
//     }
// });

// text2.addEventListener("keyup",a=>{
//     text1.innerHTML=a.target.value;
// })

























