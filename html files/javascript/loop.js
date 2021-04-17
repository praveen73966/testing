// let args=function(){
//     for(let x of arguments){
//         console.log(x);
//     }
// };
// args("name","bikka");

// let array=["a","b","c"];
// array.forEach(function(values,index,array){
//     console.log(values,index,array);
// });

// let array=["aa","bb","cc"];
// array.map(function(values){
//     return values;
// });
// console.log(array);


// let array=["a","b","c"];
// let x=array.forEach(function(values,index,array){
//    return {values,index,array};
// });
// console.log(x); 


//push
// let a=['a','b','c'];
// console.log(a);
// a.push('d');
// console.log(a);



//splice
// let x=["aa","aaaaaaaa","aaaaaaaaaaa"];
// x.splice(1,1);
// console.log(x);


//find first occurence array index by using array.indexOf()
// let x=["aa","aaaaaaaa","aaaaaaaaaaa",];
// console.log(x);
// console.log(x.indexOf("aa")); //output : 0

//find last occurence array index by using array.lastindexOf()
// let x=["aa","aaaaaaaa","aaaaaaaaaaa","aa"];
// console.log(x);
// console.log(x.lastIndexOf("aa")); //output : 3


//unique value  
// let array=[1,1,2,2,3,3];
// let uniquevalue=[...new Set(array)];
// console.log(uniquevalue);


// sort
// let x=['b','a','d','z',"e"];
// let newarray=x.sort();
// console.log(newarray);

//sort numbers
// let x=[12,1,4,232,43,324,441,212,2];
// let newa=x.sort((a,b)=>{
//     return a-b;
// })
// console.log(newa);

//reverse a array
// let x=["aa","bb","cc","dd","ee"];
// let rev=x.reverse();
// console.log(rev);

//reverse a string
// let x="string";
// let convert=x.split("");
// let rev=convert.reverse();
// let arr=rev.join("")
// console.log(rev);
// console.log(arr);

//filter length
// let lang=['javascript','java','php','corejava'];
// let filterLength=lang.filter(word=>word.length>6);
// console.log(filterLength);


//reduce method with arrow function
// let reduceMethod=["b","i","k","k","a"];
// let result=reduceMethod.reduce((accumulator,currentvalue)=>accumulator+currentvalue);
// console.log(result);

//reduce method with callback function
// let num=[1,2,3,4,5,6,7,8,9,10];
// let add=num.reduce(function(accumulator,returnvalue){
//     return accumulator+returnvalue;
// });
// console.log(add);


// let num=[1,2,3,4,5,6,7,8,9,10];
// let add=num.reduce(function(accumulator,currentvalue){
//     console.log(accumulator);
//     console.log(currentvalue);     
//     return accumulator+returnvalue;
// });
// console.log(add);


//reduceRight
// let array=['a','k','k','i','b'];
// let x=array.reduceRight((accumulator,currentvalue)=>accumulator+currentvalue);
// console.log(x);


//two dimensional array
// let arr=[[1,1],
// [2,2],
// ['bikka','sashi','naveen','prakash'],
// [3,3],
// [4,4],
// ];
// console.log(arr[1],[1]);

//reduce multidimensional array
// let x=[[1,1],
//        [2,2],
//        [3,3],
//        [4,4],
//  ];
// let y=x.reduce((accumulator,currentvalue)=>{
//     return accumulator.concat(currentvalue);
// });
// let o=y.reduce((accumulator,currentvalue)=>accumulator+currentvalue);
// console.log(o);

//flat(convert twodimensional to single dimensional)
// let x=[[1,1],[[1,1,1]],[2,2]];
// console.log(x);
// let output=x.flat(2);
// console.log(output);
// let result=output.reduce((accumulator,currentvalue)=>accumulator+currentvalue);
// console.log(result);

//flat(infinity) :(convert multidimensional to single dimensional)
// let x=[[1,1],[[[[[[[[[[[[[[[[[2,5]]]]]]]]]]]]]]]]],[[[[[[[3,3]]]]]]],];
// console.log(x);
// let output=x.flat(Infinity);
// console.log(output);
// let result=output.reduce((accumulator,currentvalue)=>accumulator+currentvalue);
// console.log(result);
//find() it is used to get the first resultent value in an array
// let x=[11,22,23,432,23,332,32,1,1,12];
// let output=x.find(Element=>Element>10);
// console.log(output);

//findindex()
// let x=[11,12,133,10];
// let output=x.findIndex(Element=>Element>11);
// console.log(output);

//fill() method
// let x=[1,2,3,4];
// console.log(x.fill(9,0,4));

//entries()
// let x=[1,11,111,1111];
// //index as key
// //value as value
// for(let y of x.entries()){
//     console.log(y);
// }

//every()  example:1
// let x=[11,13,33,3131,111,43];
// let result=x.every(x=>x>10);
// console.log(result);

//it will give result true if and only is  all the given valyes want to satisfy

//example:2
// let x=[19,30,20,17,33,24];
// let result=x.every(x=>x>18);
// console.log(result);
// if(result){
//     console.log("all are eleigible to vote");
// }
// else{
//     console.log("not elegible")
// }


//some() it will check that any of one value satisfy the condition output will be true 
// let x=[1,2,3,4,5,6];
// let output=x.some(x=>x%2===0);
// console.log(output);



//includes to check whether the data is present or not
// let x=["bikka","praveen"];
// if(x.includes("bikka"))
// {
//     console.log("number is present");
// }
// else{
//     console.log("number i snot present");
// }

//slice removing the selected part
// let x=["cat","dog","monkey","donkey"];
// let result=x.slice(1,3);
// console.log(result);   output:dog,monkey

//key if you want only index we use key
// let x=["aaa","bbb","ccc","ddd"];
// for (let key of x.keys());
// console.log(x);


//value if you want only values we use value
// let x=["aaa","bbb","ccc","ddd"];
// for (let value of x.values());
// console.log(x);






























































 








































