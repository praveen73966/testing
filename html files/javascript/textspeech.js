// window.SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
// let recognition = new SpeechRecognition();
// //dom events

// //result event
// recognition.addEventListener("result",e=>{
//     console.log(e.results[0][0].transcript);
// });

// //start speech event
// recognition.start();

// window.SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
// let recognition = new SpeechRecognition();
// let p=document.createElement("p");
// let template=document.querySelector("#template");
// template.appendChild(p);
// //dom events

// //result event
// recognition.addEventListener("result",e=>{
//     let transcript=e.results[0][0].transcript;
//     p.innerHTML=transcript;
//     if(e.results[0].isFinal){
//         p=document.createElement("p");
//         template.appendChild(p);
//     }
// });
// recognition.addEventListener("end",recognition.start);
 
// //start speech event
// recognition.start();