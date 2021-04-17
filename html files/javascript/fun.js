/*
//we can execute anonymous function into function expression by using an identifier and assign value 
//as function()
let users = function(){
 console.log('users are there')
}//function syntax in js---------> called function
// how to invoke function => by calling identifier
users();// calling function
*/



/*
//while page is loading stack memory is registered by invoke call stack
//iife or self executing function
(
    function() {
        console.log('i am iife function');
    }
) ();
//syntax
//(this is for write expression)(this is for invoke expression);
*/


(
    function()
    {
        var $='angular';//local variable
        console.log($);
    }
)();
(
    function()
    {
        var $='jquery';//local variable
        console.log($);
    }
)();
(
    function()
    {
        var $='react';//local variable
        console.log($);
    }
)();


//alternate for iife
{
    let $='react';//here we have to use block scopelet or char
    console.log($);
}
{
    let $='jquery';//here we have to use block scopelet or char
    console.log($);
}
{
    let $='angular';//here we have to use block scopelet or char
    console.log($);
}

//function declaration or named declaration
function jspiders(){
    console.log('i am functio declaration');
}
jspiders();

//function with parameter
function employee(emp_id,emp_name,emp_salary,emp_designation){
    return{emp_id,emp_name,emp_salary,emp_designation};
}
let emp1=employee('typ1','bikka',11111,'web developer');
let emp2=employee('typ2','biikka',111111,'web developer');
console.log(emp1);
console.log(emp2);
//if we donot give return keyword output will be undefined
//to return a value from a custom function you need to use return keyword


function userss(name,age,sal){
    return{
        name,age,sal
    };
}
let use11=userss('bikkaaa',21,25000);
console.log(use11);


function clg(name){
    return arguments;
}
let x=clg('dddd',33,'dfdfdfe');
console.log(x);


/*let arrowfunction=()=>{
    return arguments;//error arguments is not defined for arrow function
}
console.log(arrowfunction('sdss',232,'sdsdsds'));*/




// ES-6 onwards they introduce REST parameter instead of argument Object
//syntax
function xyz(...REST){
    return REST;
}
console.log(xyz('nodejs','java','css','react'));



function courses(coursename,trainer,...REST){
    return{coursename,trainer,REST};
}   
let javafullstack=courses('java','madhu',21,'ew','edewfwe');
console.log(javafullstack);














































