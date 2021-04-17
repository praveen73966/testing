// console.log(window.document);
// console.log(window.navigator);
// console.log(window.screen);
// console.log(window.history);
// console.log(window.location);
//how to get latitide and longitude
// function getCurrentLocation(){
//     if(window.navigator.geolocation){
//         window.navigator.geolocation.getCurrentPosition(function(position){
//             console.log(position);
//             document.write(
//                 `my current latitide is <h1>${position.coords.latitude}</h1>
//                 my current longitude is <h1>${position.coords.longitude}</h1> 
//                 `
//             );
//         });

//     };
// };
// getCurrentLocation();


//online or not
// console.log(window.navigator.onLine);

// if(window.navigator.onLine === true){
//     document.write(`hey i am online please chat <h1 style="color:green">ONLINE</h1>`
//     );

// }
// else{
//     document.write(`hello i am <h1 style="color:red">OFFLINE</h1>`)
// };

//live video
// window.navigator.getUserMedia=window.navigator.getUserMedia || window.navigator.webkitgetusermedia;
// if(window.navigator.getUserMedia){
//     window.navigator.getUserMedia({audio: true,video: {height:600,width:800} },
//         stream =>{
//             let video =document.querySelector("video");
//             video.srcObject=stream;
//             video.onloadedmetadata=function(){
//                 video.play();
//             }
//         }, 
//         err => {
//             console.log(err.name);
//         }
// );

// }
// else{
//   console.log("user media is not supported by browser");
// }


console.log(window.navigator.userAgent);
console.log(window.navigator.appVersion);
console.log(window.navigator.appCodeName);
console.log(window.navigator.product);
console.log(window.navigator.vendor);
console.log(window.navigator.language);
console.log(window.navigator.cookieEnabled);
console.log(window.navigator.javaEnabled);






























