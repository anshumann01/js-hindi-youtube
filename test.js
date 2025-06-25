// console.log("Hello");
// console.log(typeof "Hello");

// console.log(typeof null);
// console.log(typeof undefined);

// let num = "123";
// console.log(typeof num);

// let valueInNumber = Number(num);
// console.log(typeof valueInNumber);

// //"33" => 33
// //"33abc" => NaN

// let isLoggedIn = 1;
// let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(typeof booleanIsLoggedIn);

// 1 => true 0 => false
// "" => false "Anshuman" => true

// console.log("2">1); // true

// console.log(null>0) //false
// console.log(null>=0) //true
// console.log(null==0) //false

// console.log(undefined==0) //false
// console.log(undefined < 0) //false
// console.log(undefined>0) //false

// console.log("2"===2) //false

//Data Types
//primitive data types - 7 types (call by value) - Copy provide ki jaati hai
//String, Number, boolean, null, undefined, Symbol, BigInt

//non-primitive/reference type (call by reference) - Address provide kiya jata hai
//Arrays, Objects, Functions

// const Id = Symbol('123');
// const anotherId = Symbol('123');

// console.log(Id==anotherId) //false

// const myfunction = function() {
//     console.log("hello world")
// }
// console.log(typeof myfunction) //function

// const number  = 238563297562379562n
// console.log(typeof number) //bigint

//Stack (Primitive) , Heap (Non - Primitive)

//String

// const Name = "Anshuman"
// const NewName = Name.substring(0,4); //Ansh
// const sliceName = Name.slice(-5,5) //hu

// console.log(NewName);
// console.log(sliceName);

// console.log(Name.includes("sh")) //true

// console.log(Name.split("a")); //['Anshum','n']

// const balance = new Number(100)
// console.log(balance) //[Number: 100]

// console.log(balance.toFixed(2)) //100.00

// const newBalance=1000000
// console.log(newBalance.toLocaleString()); // 1,000,000
// console.log(newBalance.toLocaleString('en-IN')); // 10,00,000

// const price = 1223.4533
// console.log(price.toPrecision(6)); //1223.45

//************************Maths***************************

// Math.abs, Math.round(), Math.ceil(), Math.floor(), Math.sqrt(), Math.min(), Math.max(), Math.random()

console.log(Math.ceil(Math.random()*6)) //Dice Game

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)