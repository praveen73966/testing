console.log(xyz);
var xyz=123;



var x;
x=10;
x='stt';
x=true;
console.log(x);
let y=10;//block scope
console.log(y);
const z=10;//block scope
console.log(z);
var d=11;//gloabal scope
console.log(d);



/*
console.log(c);
let c=5;// Cannot access 'c' before initialization*/

var a=111;
if (a){
    var myName="bikka"//global scope
    console.log('a is true');
}else{
    console.log('a is false');
}

console.log(myName);

/*
//use let keyword
var n=true;
if (n){
    let myname='praveen'//block scope
    console.log('n is true');
}else{
    console.log('n is false');
}
console.log(myname);//myname is not defined
*/



var m=11;
var m='bbbb';
console.log(m);


/*
let l=333;
let l='sdcedcwe';
console.log(l);//Identifier 'l' has already been declared
*/

{
    var f=10;//global scope
    console.log(f);
}


{
    let asdca=22332;//block sccope
    console.log(asdca);
}







// constant
const pancard="daaaa11111";
pancard='dsdas';
console.log(pancard);//assignment to constant variable




const users={
    naame: "aaaa",
    compaany: "jsaapiders",
};
console.log(users);
users.naame="sashi";
users.compaany="qspiders";

console.log(users);

































