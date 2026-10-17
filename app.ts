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

//  void ======>  ka matlab hai: function koi value return nahi karta

function foo(a:number , b : number) : number{
   return a + b 
}

// console.log(foo(12 , 14))

function hello(a:string , b : string) : string{
   return "Hello " + a + b
}

// console.log(hello("Hasnain " , " Tanoli"))

//  null ====>  variable mein koi value na rakhna.

let user:null = null


// Never

function poo(){
    while(true){
        console.log("janiiii")
    }
}
poo()
console.log("poo function chala")



// Interface =====>Interface aik structure ya naqsha hota hai jo batata hai ke kisi object mein kaun-si properties honi chahiye aur unki types kya hongi.


interface student {
    name : string,
    age : number
    ispresent : boolean
}

let student1 = {
    name : "Hasnain Tanoli ",
    age : 18,
    ispresent : true
}
// console.log(student1)


function random(obj:student){
// console.log(obj.ispresent)
}
// random(student1)


// extends  ====>   ka matlab hai kisi pehle se bane structure ki properties ko apne naye structure mein use karna.


interface users {
    email : string,
    age : number
}

interface admin extends users{
    isadmin : boolean 
}

let detailUser = {
    email : "hasnain@gmail.com",
    age : 18,
    isadmin : true
}

function xyz (obj :admin) {
    // console.log(obj)
}

// xyz(detailUser)

type val = string | number | boolean | null

let x : val = "janii"
x = 1234,
x = false,
x = null

// console.log(x )

    
//  CLASS   =====>    Class aik blueprint (naqsha) hoti hai jis ki madad se hum objects banate hain.



class cars {
    constructor(public name:string , public price:number , public color:string){}
}

// constructor   =====>   Constructor ek special method hai jo new se object banate waqt automatically execute hota hai.

let car1 = new cars ("CIVIC" , 100000 , "WHITE")
let car2 = new cars ("GRANDY" , 1000000 , "SILVER")

// new    =====>  new ka kaam class se naya object banana hota hai.

// console.log(car1)
// console.log(car2)


// ACCESS  MODIFIER    =====>    (PUBLIC  ,  PRIVATE , PROTECTED)


// PUBLIC   =====>    Har jagah se access ho sakta hai

// PRIVATE  =====>    Property ya method ko sirf usi class ke andar access kar sakte hain.

// PROTECTED   =====>   Property ko us class aur uski child classes ke andar access kar sakte hain,


class bottle {
    constructor(private name:string , private price:number , private material:string){
        // this.name= "PAKOLA"         
    }
}

let b1 = new bottle ("AQUAFINA" , 70 , "PLASTIC")
// console.log(b1)
// b1.name = "nestle"     error in typescript


class User {
    constructor(protected userEmail:string , protected userAge:number){
    }
}

class Admin extends User{
    constructor( userEmail:string ,  userAge:number , protected userPassword:string){
        super(userEmail , userAge)
        // this.userEmail = "test@gmail.com"
    }
}

// super   =====>   child class mein parent class ke constructor ya methods ko call karne ke liye use hota hai.

let u1 = new Admin ("hasnain@gmail.com" , 18 , "test?12345")

// u1.userEmail = "example@gmail.com"
// console.log(u1)

// readonly  =====>  Property ko initialize karne ke baad dobara change nahi kar sakte 
// Optional ?  =====>  Optional property woh property hoti hai jo object mein ho bhi sakti hai aur nahi bhi. TypeScript mein property ke naam ke baad ? lagate hain.

class student {
    constructor(public readonly studentName:string , public roolNum:number , public DOB?:string){
        // this.studentName = "hasnain"   
    }
}

let s1 = new student ("janiii" , 123456 , "10/12/2026" )
// s1.studentName = "Hasnain"  
// console.log(s1)




// optional property

// class User {
//  constructor(public email : string = "test@gmail.com"){}
// }
// let u = new User()


// GETTER (get)  ======>   Class ki property ki value ko read ya hasil karne ke liye use hota hai.
// SETTER (set)  ======>   Class ki property ki value set ya update karne ke liye use hota hai.

class kuchbhi {
    public age : number = 18

    get abc(){
        return this.age;
    }
    set abc(val:number){
        this.age = val
    }
}

let u = new kuchbhi 
// u.abc = 49
// console.log(u.abc)

class BOTTLE {
    private name : string = "AQUAFINA"

    get brandname(){
        return this.name
    }
    set brandname(val : string){
        this.name = val
    }
}

// let bot1 = new BOTTLE
// console.log(bot1)
// console.log(bot1.brandname)
// bot1.brandname = "NESTLE"
// console.log(bot1.brandname)


// static  ======>   static keyword class ki property ya method ko class ke saath attach karta hai, jise object banaye baghair class ke naam se access kiya ja sakta hai.

class Student {
    static name : string = "Hasnain Tanoli"
}

// console.log(Student.name)


// abstact ======> 


abstract class createDish {
    constructor(protected kyabananaha:string , protected kisparbananaha : string){}
}

class created extends createDish{
    constructor(name : string , gas:string){
        super(name , gas)
    }
}

let dish = new created ("BIRYANI" , "LPG PAR")
// console.log(dish);



// Function


function wxyz(name : string , cb:(val:string) => string){
    // console.log( name + cb(" kase ho bhai"))
}

wxyz("HASNAIN TANOLI " , (val : string) => {
    // console.log(val)
    return val
})


// rest operator

// function rest(...arg:number[]){
// console.log(arg)
// }

// rest(1,2,3,4,5,6,7,8,9,)



// function overloading    =====>


// signature
function foooo(a:string , b:string):string
function foooo(a:number , b:number):number


function foooo(a:number | string , b:number | string):string | number{
    if(typeof a === "string" && typeof b === "string"){
        return a + b
    } else if(typeof a === "number" && typeof b === "number"){
        return a + b
    }
    else{
        throw new Error("invalid arguments")
    }
}


// console.log(foooo("hasnain " , " tanoli"))
// console.log(foooo(10 , 10));



//  generics =====>   dynamic data type la ka jata ha 


// function generic<T>(val: T){
// console.log(val)
// }

// generic<string>("hasnain")
// generic<number>(18)
// generic<boolean>(true)

// class generic <T> {
//     constructor(public key:T){}
// }

// let g1 = new generic(false)
// console.log(g1)

interface generic <T> {
    email : T
    password : T
}
let obj = {
    email : 123456,
    password : "jdld"
}


function n(obj:generic){
    console.log(obj)
}
n(obj)
