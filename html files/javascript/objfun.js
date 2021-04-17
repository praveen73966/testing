 // object constructor 
/* function employee(
     emp_id,
     emp_name,
     emp_designation,
     emp_city,
     emp_salary,
 )
 {
     this.emp_id=emp_id;
     this.emp_name=emp_name;
     this.emp_designation=emp_designation;
     this.emp_city=emp_city;
     this.emp_salary=emp_salary;
 }
 //base constructor function
 let bikka=console.log(new employee('1a','bikka','web developer','bang',500000));
 let praveen=console.log(new employee('1b','praveen','web deve loper','bang',600000));*/

 //array
 /* let lang=['ssdd','wewe','wewe'];
 console.log(lang.length);
 console.log(typeof lang);
 let str="ddd,wd,wded,ed,e";
 console.log(str.length);
 console.log(typeof str);
 let bikka="id,ded,ded,de";
 console.log(typeof "id,ded,ded,de");
 console.log("id,ded,ded,de".length);*/
 /*
 let languages =['java','js','c#'];
 let value1=languages[0];
 let values2=languages[1];
 let values3=languages[2];

 console.log(value1);
 console.log(values2);
 console.log(values3);
*/

 //array literal
//  //array constructor
//  let languages=new Array('a','aa','aaa');
//  console.log(languages);


// let arrayconstructor=new Array();
// let arrayliteral=[];
// console.log(arrayconstructor);
// console.log(typeof arrayconstructor);
// console.log(arrayliteral);
// console.log(typeof arrayliteral);
// //check it is array or not
// console.log(Array.isArray(arrayconstructor));
// console.log(Array.isArray(arrayliteral));

 
// //insert values to empty array
// let array=[];
// array[0]='aaaa';
// array[1]='bbbb';
// array[2]='cccc';
// console.log(array);

// //array constructor
// let users=new Array()
// users[0]='aaaa';
// users[1]='bbbb';
// users[2]='cccc';
// console.log(users);

// //spread operator
// let x=['a','b'];
// let y=['c','d'];
// let z=['e','f'];
// let combine=[...x,...y,...z];
// console.log(combine);

//concat are of two types 1.string concat 2.array conact













// //convert string into array
// //split method no space
// let str="hello bikka";
// console.log(str.length);
// let splitmethod=str.split("");
// console.log(splitmethod);
// console.log(typeof splitmethod);//object
 
// //one space
// let str1="hello bikka";
// console.log(str1.length);
// let splitmethod1=str1.split(" ");//provide one space in between paranthesis we can covert into word by word
// // two spaces into sentences no psaces character by character
// console.log(splitmethod1);
// console.log(typeof splitmethod1);
// //two spaces
// let str2="hello bikka";
// console.log(str2.length);
// let splitmethod2=str2.split("  ");
// console.log(splitmethod2);
// console.log(typeof splitmethod2);


// let date;
// date=11;
// switch (date) {
//     case 07:
//         console.log("Rose day");
//         break;
//     case 08:
//         console.log("Propose day");
//         break;
//     case 09:
//         console.log("Chocolate day");
//         break;
//     case 10:
//         console.log("Teddy day");
//         break;
//     case 11:
//         console.log("Promise day");
//         break;
//     case 12:
//         console.log("Hug day");
//         break;
//     case 13:
//         console.log("Kiss day");
//         break;
//     case 14:
//         console.log("Valentines  day");
//         break;
//     default:
//         console.log("Please give the day in valentines week");
//         break;            
    
// }





//function declaration
// var x=myFunction(4,3);
// function myFunction(a,b){
//     return a*b;
// };
// console.log(x);

// function bikka(a,b){
//     return a*b;
// };
// console.log(bikka(5,6));

// //function expression
// var a=function(a,b){return a*b};
// console.log(a(4,2));

// //anonymous function
// function(){
//     console.log("i am bikka");
// };


//IIFE immediate invoke function expression
// (function(){
//   let x=10;
//   let y=10;
//   console.log(x*y);
// })
// ();
//alternate for IIFE
// {
//     var c="bikka";
//     console.log(c);
// }


//function with parameters
function emp(name,id){
    return {name,id};
}
console.log(emp('bikka',12));













