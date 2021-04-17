// console.log(Math.max(1,22,33,3,244,44));
// console.log(Math.min(12,234,2,1,23,32323));
// console.log(Math.ceil(1.3));
// console.log(Math.ceil(1.9));
// console.log(Math.ceil(-0.2));
// console.log(Math.ceil(-0.8));
// console.log(Math.floor(1.2));
// console.log(Math.floor(1.9));
// console.log(Math.floor(-0.1));
// console.log(Math.floor(-0.8)); 
// console.log(Math.trunc(2.9));
// console.log(Math.trunc(0.1));


// window.localStorage.setItem("language","react");
// window.localStorage.setItem("froentend","js");
// document.getElementById("template").innerHTML=window.localStorage.getItem("froentend");
// document.getElementById("template").innerHTML=window.localStorage.getItem("language");
// window.localStorage.removeItem("language");

//overwrirte

// let input= document.getElementById("input");
// let form=document.getElementById("form");
// form.addEventListener("submit",e=>{
//     e.preventDefault();
//     let value =input.value;
//     window.localStorage.setItem("languages",value);
// });

//PRINT MULTIPLE VALUES
let input= document.getElementById("input");
let form=document.getElementById("form");
form.addEventListener("submit",e=>{
    e.preventDefault();
    let value =input.value;
    let key =input.value;
    window.localStorage.setItem(key,value);
});

let languages=window.localStorage;

for(let i in languages){
    let finalData = window.localStorage.getItem(i);
    if (finalData===null) {
    console.log("no data");        
    }else{
        console.log("finalData");
    }
}































