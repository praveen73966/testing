// let x={
//     name:"bikka",
//     age:21,
//     sal:25000
// };
// let name=x["name"];
// let age=x["age"];
// let sal=x["sal"];
// console.log(`my name is ${name} my age is ${age} my sal is ${sal}`);


//declare an object
// let object={};
// object.name="bikka";
// object.age=20;
// object.sal=20000;
// object.company="tcs";
// console.log(object);


//object constructor
// let users=new Object();
// users.name="aaaaa";
// users.age=21;
// users.sal=2222222;
// users.designation="web developer";
// console.log(users);


//built in constructor   new Object();
// let manii= new Users("manii",22,33232,"dasdaas");
// let dineshh= new Users("asas",23,324322323,"dadqeqd");
// console.log(manii);
// console.log(dineshh);

//objecct.assign
// let username={username:"name"};
// let password={password:"name@123"};
// let output=Object.assign(username,password);
// console.log(output);


// let x={x:"bikka",x:"praveen"};
// let y={y:"kumar",y:"b"};
// let combine=Object.assign(x,y);
// console.log(combine);

// //loop objects with the help of FOR IN
// let users={
//     username:"bikka",
//     age:22,
//     sal:23111,
//     designation:"react",
//     company:"asda",
// };
// for(let i in  users){
//     console.log(`$(i) => $(users[i]`);
// }

//store multiple object
// let users=[
//     {
//         user_name:"bikka",
//         user_age:21,
//         user_sal:212121,
//     },
//     {
//         user_name:"sas",
//         user_age:12,
//         user_sal:21333,
//     },
// ];  
// console.log(users);

//call apply bind
// let x={
//     firstName:"bikka",
//     lastName:"praveen",
// };
// let y={
//     firstName:"praveen",
//     lastName:"kumar",
// };
// function fullName(){
//     return this.firstName+this.lastName;
// };
// console.log(fullName.call(x));
// console.log(fullName.call(y));

//example for call apply bind
let numbers={num1:100};

function calculate(num2,num3){
    return this.num1+num2+num3;
}

let resultWithCall=calculate.call(numbers,10,30);
let resultWithApply=calculate.apply(numbers,[10,30]);
let resultWithBind=calculate.bind(numbers,10,30)

console.log(resultWithCall);
console.log(resultWithApply);
console.log(resultWithBind);

































