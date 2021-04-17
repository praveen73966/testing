//add two numbers
var a=10;
var b=20;
c=a+b;
console.log(c);

//swap two numbers
var a=10;
var b=20;
var temp;
temp=a;
a=b;
b=temp;
console.log("value of a is "+ a);
console.log("value of b is "+ b);

//check given number is positive or negative or zero
const number =prompt("enter the number");

if (number<0) {
    console.log("negative");
}
else if(number==0){
  console.log("zero");
}else{
    console.log("positive");
  }

//odd or even
const number=prompt("enter the number");

if (number%2===0) {
    console.log("given number is even");
}else{
    console.log("given number is odd");
}

//leap year or not
const year=prompt("enter year");
if(year%4===0){
    console.log("is leap year");
}else{
    console.log(" not a leap year")
}

//print numbers from 1 to 10
var a=1;
do {
    console.log(a);
    a++;
} while (a<=10);

//multiply numbers using function
var a=function (p,q) {
    return p*q;
}
console.log(a(10,12));

//average of three numbers
let func=(a,b,c)=> (a+b+c)/3;
console.log(func(1,2,3));