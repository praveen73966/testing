//classes:it creates an object

//classes are in fact "special functions"  and just u can define function expressions and function declaraztions
//the class syntax has two componenets : class expressions and class declarations

//class decclaration
 class rectangle{
     constructor(height, width){
         this.height = heigth;
         this.width = width;
     }
 }

//class expressions: another way to define a class it can be named or unnamed.the name given to a named expression is local
//to the classes body (it canbe retrived through the classes (not an instance) name property through)

//unnamed
let rectangle = class{
    constructor(height,width){
        this.height= height;
        this.width= width;
    }
};
console.log(rectangle.name);
//output rectangle

//named
let rectangle = class rectangle2{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
}

 //hoisting 1)function declaration are hoisted
 //         2)class declaration are not hoisted



 //constructor:it is a special method for creating and intializing an object created with in a class
 //there can be only one constructor in a class
 //use SUPER keyword to call the constructor of the super class


class usersWithClass{
    constructor(){
        console.log("i am class");
    }
}

new usersWithClass();//invoke class constructor with new keyword
console.log(typeof usersWithClass);


function usersWithFunction(){
    console.log("i am function");
}
usersWithFunction();
console.log(typeof usersWithFunction);

//how to create object by using classes
//A class may have only constructor

// class employee{
//     constructor(){
//        console.log(this);//it created empty object
//     }
// }

// class employee{
//     constructor(emp_id,emp_name,emp_sal,emp_designation){
//       this.emp_id=emp_id;
//       this.emp_name=emp_name;
//       this.emp_sal=emp_sal;
//       this.emp_designation=emp_designation;
//     }
// }

// let mani =new employee("typ1","mani",200000,"web dev");
// let manu =new employee("typ2","manu",200000,"html dev");
// console.log(mani);
// console.log(manu);


//create a method inside a class

// class employee{
//     constructor(emp_id,emp_name,emp_sal,emp_designation){
//       this.emp_id=emp_id;
//       this.emp_name=emp_name;
//       this.emp_sal=emp_sal;
//       this.emp_designation=emp_designation;
//     }

//     getDetails(){
//         console.log(`my name is ${this.emp_name}`);
//     }
// }

// let mani =new employee("typ1","mani",200000,"web dev");
// let manu =new employee("typ2","manu",200000,"html dev");
// manu.getDetails();
// mani.getDetails();


// //static method
// class employee{
//     constructor(emp_id,emp_name,emp_sal,emp_designation){
//       this.emp_id=emp_id;
//       this.emp_name=emp_name;
//       this.emp_sal=emp_sal;
//       this.emp_designation=emp_designation;
//     }

//static keyword defines a  static method or property for a class.static ethods are called without instantiating,their class
// and cannot be called through a  class instance. 

//     static username="i am shashi";
//     static details(){
//         console.log("i am details block");
//     }

//     getDetails(){
//         console.log(`my name is ${this.emp_name}`);
//     }
// }

// let mani =new employee("typ1","mani",200000,"web dev");
// let manu =new employee("typ2","manu",200000,"html dev");
// manu.getDetails();
// mani.getDetails();

//inheritance

class userObject{
    constructor(username,password){
        this.username =  username;
        this.password = password;
    }
}

//inheritance:sub classing with extends
// the extends keyword is used in a class declarations or class expressions to create a class as a child of another class.


class user extends userObject{
    constructor(username,password,profile){
        super(username,password,profile);//must call super constructor in derivrd class before accessing "this"
        this.profile = profile;
    }
} 

let mani = new user("mani","mani@123","mani profile");
console.log(mani);

















