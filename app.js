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
