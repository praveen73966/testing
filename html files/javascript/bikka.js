// //how to store variable into object literal
// var username="bikka";
// var age=21;
// var sal=222323;
// var company="xyz";

// let obj={
//     username : username,
//     age : age,
//     sal : sal,
//     company : company,
// };
// console.log(obj);

// let obj1={
//     username,
//     age,
//     sal,
//     company,
//     designation:"react js"
// };
// console.log(obj1);


// //we can use keywords as keys
// let obj2={
//     for:"for",
//     while:"while",
//     if:"if",
//     switch:"switch",
// };
// console.log(obj2);

// //if we want to use two words with the help of "-" we have to kept that words in between quotes
// let a={
//     "user-name":"bikka"
// };
// console.log(a);
// let createServer={
//     "content-type":"application/json"
// };
// console.log(createServer);

//merge
// let a1={name:"bikka"};
// let a2={age:21};

// let combine=(Object.assign(a1,a2));
// let combinewithSpread={...a1,...a2};
// console.log(combine);
// console.log(combinewithSpread);


//error
// const x1="bikka";
// const x1="praveen";
// console.log(x1);

// const x2={
//     name:"bikka",
// };
// x2.name="praveen";
// console.log(x2);


//Object.freeze
// let abc={
//     username:"bikkaa",
//     age:21,
//     sal:12121,
// };
// Object.freeze(abc);

// abc.username="praveen";
// abc.age=222;
// abc.sal=22222;

// console.log(abc)

// "use strict";
// let abc={
//     username:"bikkaa",
//     age:21,
//     sal:12121,
// };
// Object.freeze(abc);

// abc.username="praveen";
// abc.age=222;
// abc.sal=22222;
// //error if we use strict
// console.log(abc);

//object into array :object.entries
let u={username:"anu",
       company:"qspiders",
     };
     let result=Object.entries(users);
     console.log(result);

     console.log(Array.isArray(result));





     !
  







































