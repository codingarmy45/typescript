// /*
//     Basic Types
//     1. Primitive types (number, string, boolean)
//     2.Arrays
//     3.Tuples
//     4.Enums
//     5.Any, Unknown, Void, Null, Undefined, Never

//     primitives and reference
//     [], {}, () => reference type 
// */ 

// /***************** Primitive Data Types ********************/

// // String
// var n = 'Yash';
// var na = 'a'
// console.log(na);

// // Number
// var num = 12;
// var fl = 12.23
// console.log(num);

// // Boolean
// var bo = true;
// var fa = false;

// // NULL
// // let user = null;

// // undefined
// let score;

// // BigInt
// let a = 123n

// interface User{
//     id:number;
//     username:string;
// }

// const user : User = {
//     id:100,
//     username:'Yash'
// }

// console.log(user)

// const skills: string [] = ["MongoDB", "Express"]
// skills.push("React")
// console.log(skills)

// const greet = (name:string): void=>{
//     console.log('Hello ' + name);
// }
// greet('Yash');

// const car = {color:'red'};
// car.color = 'blue'
// console.log(car)


// const obj1 = {name:'A'}
// const obj2 = {name:'A'}
// const obj3 = obj1
// console.log(obj1 === obj2)
// console.log(obj1 === obj3)

// const scores: number[] = [10,20,30];

// let users: [number,string];

// users = [1,"Yash"]

// enum Direction{
//     Up,
//     Down,
//     Left,
//     Right
// }

// // Usage
// const move = Direction.Left;
// console.log(move);

// enum UserRole {
//   Admin = "ADMIN",
//   User = "USER",
//   Guest = "GUEST"
// }

// // Usage
// const currentUserRole = UserRole.Admin;

// if (currentUserRole === UserRole.Admin) {
//   console.log("Welcome, Boss!");
// }

// ************************************* Special Type *************************************//

// let value : any = "Yash";
// value = 5;
// console.log(typeof(value));

// let x: number = 5
// x = 'Yash'
// console.log(typeof(x));

let value: unknown = "Yash"
value = 5;
console.log(typeof(value));

function fun(): number
{
    return 5
}
const a = fun()
console.log(a);