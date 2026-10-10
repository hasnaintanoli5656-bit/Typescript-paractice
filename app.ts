//  TYPE ANNOTATION
// Jab hum khud TypeScript ko type batate hain:

let myname: string = "hasnain"
let age : number = 18
let isLive : boolean = true

// console.log(name)
// console.log(age)
// console.log(isLive)

// Type Inference
// Humne string nahi likha. Phir bhi TypeScript samajh jaati hai ka ya str | num | bol  ha:

let value = "Tanoli"
let num  = 7
let isAdmin  = true

//  Arrays

let fruits:string[] = ["banana" , "apple" , "orange" ,]
fruits.push("strawbery")

// console.log(fruits)


let studentInfo:(string | number)[] = ["hasnain", 17 , "karachi" ]
studentInfo.push(200 , "Tanoli")

// console.log(studentInfo)

// TUPLES =====>   Array ke kis position par kaunsi type ki value honi chahiye.

let info:[string , number , boolean] = ["Hassan" , 19 , true]
// console.log(info)

let product: [string, number] = ["Laptop", 50000];

product[0] = "Mobile";  
product[1] = 25000;     
// console.log(product)

//  Enums  =====> Enum ka matlab hai: related fixed values ka group banana.

enum courses {
    REACT = "REACT",
    JAVASCRIPT = "JAVASCRIPT",
    TYPESCRIPT = "TYPESCRIPT"
}

// console.log(courses.JAVASCRIPT)

enum userRole {
    Admin = "ADMIN",
    Guest = "GUEST",
}

// console.log(userRole.Admin)

let a:unknown ;

// a = 17.777
// //   type narrowing
// if(typeof a == "string"){
//     console.log(a.toUpperCase())
// }else if(typeof a == "number"){
//     console.log(a.toFixed())
// }

//  void 

function foo(a:number , b : number) : number{
   return a + b
}

// console.log(foo(12 , 14))

function hello(a:string , b : string) : string{
   return "Hello " + a + b
}

// console.log(hello("Hasnain " , " Tanoli"))


interface UserObj {
    email : string,
    password : number,
    age : number
}


const myObj = {
    email :"codermhasan@gmail.com",
    password : 4567890,
    age : 56
}
// console.log(myObj);


class Bottle {
    constructor(public  name :string, public price : number, public material:string){

    }

}

const b1 = new Bottle ("aquafina" , 60 , "plastic")
console.log(b1)















