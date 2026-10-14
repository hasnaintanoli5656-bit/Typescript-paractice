"use strict";
//  TYPE ANNOTATION
// Jab hum khud TypeScript ko type batate hain:
let myname = "hasnain";
let age = 18;
let isLive = true;
// console.log(name)
// console.log(age)
// console.log(isLive)
// Type Inference
// Humne string nahi likha. Phir bhi TypeScript samajh jaati hai ka ya str | num | bol  ha:
let value = "Tanoli";
let num = 7;
let isAdmin = true;
//  Arrays
let fruits = ["banana", "apple", "orange",];
fruits.push("strawbery");
// console.log(fruits)
let studentInfo = ["hasnain", 17, "karachi"];
studentInfo.push(200, "Tanoli");
// console.log(studentInfo)
// TUPLES =====>   Array ke kis position par kaunsi type ki value honi chahiye.
let info = ["Hassan", 19, true];
// console.log(info)
let product = ["Laptop", 50000];
product[0] = "Mobile";
product[1] = 25000;
// console.log(product)
//  Enums  =====> Enum ka matlab hai: related fixed values ka group banana.
var courses;
(function (courses) {
    courses["REACT"] = "REACT";
    courses["JAVASCRIPT"] = "JAVASCRIPT";
    courses["TYPESCRIPT"] = "TYPESCRIPT";
})(courses || (courses = {}));
// console.log(courses.JAVASCRIPT)
var userRole;
(function (userRole) {
    userRole["Admin"] = "ADMIN";
    userRole["Guest"] = "GUEST";
})(userRole || (userRole = {}));
// console.log(userRole.Admin)
let a;
// a = 17.777
// //   type narrowing
// if(typeof a == "string"){
//     console.log(a.toUpperCase())
// }else if(typeof a == "number"){
//     console.log(a.toFixed())
// }
//  void ======>  ka matlab hai: function koi value return nahi karta
function foo(a, b) {
    return a + b;
}
// console.log(foo(12 , 14))
function hello(a, b) {
    return "Hello " + a + b;
}
// console.log(hello("Hasnain " , " Tanoli"))
//  null ====>  variable mein koi value na rakhna.
let user = null;
// Never
function poo() {
    while (true) {
        console.log("janiiii");
    }
}
poo();
console.log("poo function chala");
let student1 = {
    name: "Hasnain Tanoli ",
    age: 18,
    ispresent: true
};
// console.log(student1)
function random(obj) {
    // console.log(obj.ispresent)
}
let detailUser = {
    email: "hasnain@gmail.com",
    age: 18,
    isadmin: true
};
function xyz(obj) {
    // console.log(obj)
}
let x = "janii";
x = 1234,
    x = false,
    x = null;
// console.log(x )
//  CLASS   =====>    Class aik blueprint (naqsha) hoti hai jis ki madad se hum objects banate hain.
class cars {
    name;
    price;
    color;
    constructor(name, price, color) {
        this.name = name;
        this.price = price;
        this.color = color;
    }
}
// constructor   =====>   Constructor ek special method hai jo new se object banate waqt automatically execute hota hai.
let car1 = new cars("CIVIC", 100000, "WHITE");
let car2 = new cars("GRANDY", 1000000, "SILVER");
// new    =====>  new ka kaam class se naya object banana hota hai.
// console.log(car1)
// console.log(car2)
// ACCESS  MODIFIER    =====>    (PUBLIC  ,  PRIVATE , PROTECTED)
// PUBLIC   =====>    Har jagah se access ho sakta hai
// PRIVATE  =====>    Property ya method ko sirf usi class ke andar access kar sakte hain.
// PROTECTED   =====>   Property ko us class aur uski child classes ke andar access kar sakte hain,
class bottle {
    name;
    price;
    material;
    constructor(name, price, material) {
        this.name = name;
        this.price = price;
        this.material = material;
        // this.name= "PAKOLA"         
    }
}
let b1 = new bottle("AQUAFINA", 70, "PLASTIC");
// console.log(b1)
// b1.name = "nestle"     error in typescript
class User {
    userEmail;
    userAge;
    constructor(userEmail, userAge) {
        this.userEmail = userEmail;
        this.userAge = userAge;
    }
}
class Admin extends User {
    userPassword;
    constructor(userEmail, userAge, userPassword) {
        super(userEmail, userAge);
        this.userPassword = userPassword;
        // this.userEmail = "test@gmail.com"
    }
}
// super   =====>   child class mein parent class ke constructor ya methods ko call karne ke liye use hota hai.
let u1 = new Admin("hasnain@gmail.com", 18, "test?12345");
// u1.userEmail = "example@gmail.com"
// console.log(u1)
// readonly  =====>  Property ko initialize karne ke baad dobara change nahi kar sakte 
// Optional ?  =====>  Optional property woh property hoti hai jo object mein ho bhi sakti hai aur nahi bhi. TypeScript mein property ke naam ke baad ? lagate hain.
class student {
    studentName;
    roolNum;
    DOB;
    constructor(studentName, roolNum, DOB) {
        this.studentName = studentName;
        this.roolNum = roolNum;
        this.DOB = DOB;
        // this.studentName = "hasnain"   
    }
}
let s1 = new student("janiii", 123456, "10/12/2026");
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
    age = 18;
    get abc() {
        return this.age;
    }
    set abc(val) {
        this.age = val;
    }
}
let u = new kuchbhi;
// u.abc = 49
// console.log(u.abc)
class BOTTLE {
    name = "AQUAFINA";
    get brandname() {
        return this.name;
    }
    set brandname(val) {
        this.name = val;
    }
}
// let bot1 = new BOTTLE
// console.log(bot1)
// console.log(bot1.brandname)
// bot1.brandname = "NESTLE"
// console.log(bot1.brandname)
// static  ======>   static keyword class ki property ya method ko class ke saath attach karta hai, jise object banaye baghair class ke naam se access kiya ja sakta hai.
class Student {
    static name = "Hasnain Tanoli";
}
// console.log(Student.name)
// abstact ======> 
class createDish {
    kyabananaha;
    kisparbananaha;
    constructor(kyabananaha, kisparbananaha) {
        this.kyabananaha = kyabananaha;
        this.kisparbananaha = kisparbananaha;
    }
}
class created extends createDish {
    constructor(name, gas) {
        super(name, gas);
    }
}
let dish = new created("BIRYANI", "LPG PAR");
// console.log(dish);
// Function
function wxyz(name, cb) {
    // console.log( name + cb(" kase ho bhai"))
}
wxyz("HASNAIN TANOLI ", (val) => {
    // console.log(val)
    return val;
});
function foooo(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        throw new Error("invalid arguments");
    }
}
let obj = {
    email: 123456,
    password: "jdld"
};
function n(obj) {
    console.log(obj);
}
n(obj);
