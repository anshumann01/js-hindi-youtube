// console.log("Hello");
// console.log(typeof "Hello"); //string

// console.log(typeof null); //object
// console.log(typeof undefined); //undefined

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

// console.log(Math.ceil(Math.random()*6)) //Dice Game

// const min=10
// const max=20

// console.log(Math.floor(Math.random()*(max-min+1))+min) //Range between min and max

/*************************************Date and Time********************************************/

let myDate = new Date();
// console.log(myDate); //2025-06-26T05:58:34.005Z
// console.log(myDate.toDateString()); //Thu Jun 26 2025
// console.log(myDate.toLocaleString()); //6/26/2025, 5:59:49 AM
// console.log(myDate.toLocaleDateString()); //6/26/2025

let myCreatedDate = new Date(2023,0,23);
// console.log(myCreatedDate.toLocaleString()); //Mon Jan 23 2023

// let Time = myCreatedDate.getTime();
// console.log(Time);

// let myNewDate = new Date(2023,0,24);
// console.log(myNewDate.toLocaleString());

// let newTime = myNewDate.getTime();

// console.log(newTime-Time); //86400000 ms

// console.log(typeof myNewDate); //object

// console.log(myDate.toLocaleString('default' , {
//     weekday:"long"
// }
// ));    //thursday

/***************************************** ARRAYS **********************************************/

//Arrays in JS is dynamic in size 

// let myArr = [0,1,2,3,"Hello",[1,2]]
// console.log(myArr[4]);

// myArr.push(6);

// console.log(myArr); //[ 0, 1, 2, 3, 'Hello', [ 1, 2 ], 6 ]

// myArr.pop();
// console.log(myArr); //[ 0, 1, 2, 3, 'Hello', [ 1, 2 ] ]

// myArr.unshift(1);
// console.log(myArr); //[ 1, 0, 1, 2, 3, 'Hello', [ 1, 2 ] ] => 1 added to the starting of the array

// myArr.shift();
// console.log(myArr); //[ 0, 1, 2, 3, 'Hello', [ 1, 2 ] ] => 1 removed from the array, which was at the zeroth index

// console.log(myArr.includes(1)); //true
// console.log(myArr.indexOf(1)); //1

// const newArr = myArr.join();
// console.log(newArr); //0,1,2,3,Hello,1,2 
// console.log(typeof newArr); //string

let marvel_heroes = ["ironman","thor","hulk"]
let dc_heroes = ["superman","flash","batman"]

// console.log(marvel_heroes.push(dc_heroes));  //4 - length of array

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes); //[ 'ironman', 'thor', 'hulk', [ 'superman', 'flash', 'batman' ] ] - added dc_heroes as a single element i.e whole array

// marvel_heroes.concat(dc_heroes);
// console.log(marvel_heroes); // [ 'ironman', 'thor', 'hulk' ]

// let all_heroes = marvel_heroes.concat(dc_heroes);
// console.log(all_heroes); //[ 'ironman', 'thor', 'hulk', 'superman', 'flash', 'batman' ]

// const all_new_heroes = [...marvel_heroes,...dc_heroes];
// console.log(all_new_heroes); //[ 'ironman', 'thor', 'hulk', 'superman', 'flash', 'batman' ]

// console.log(Array.isArray("Anshuman"));
// console.log(Array.from("Anshuman"));

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1,score2,score3));

// *****************************************Objects*********************************************************

const obj1 = new Object();

obj1.name = "Anshuman";
obj1.email = "anshuman.gupta2037@gmail.com";

// console.log(obj1); //{ name: 'Anshuman', email: 'anshuman.gupta2037@gmail.com' }

const obj2 = new Object();

obj2.mobile = "9149132230";
obj2.City = "Budaun";

// const obj3 = Object.assign({},obj1,obj2);
// console.log(obj3);
 //{
//   name: 'Anshuman',
//   email: 'anshuman.gupta2037@gmail.com',
//   mobile: '9149132230',
//   City: 'Budaun'
// }


const obj3 = {...obj1,...obj2};
// console.log(obj3);
 //{
//   name: 'Anshuman',
//   email: 'anshuman.gupta2037@gmail.com',
//   mobile: '9149132230',
//   City: 'Budaun'
// }

// console.log(Object.keys(obj3)); //[ 'name', 'email', 'mobile', 'City' ]
// console.log(Object.values(obj3)); //[ 'Anshuman', 'anshuman.gupta2037@gmail.com', '9149132230', 'Budaun' ]
// console.log(Object.entries(obj3));
//[
//   [ 'name', 'Anshuman' ],
//   [ 'email', 'anshuman.gupta2037@gmail.com' ],
//   [ 'mobile', '9149132230' ],
//   [ 'City', 'Budaun' ]
// ]

// console.log(obj3.hasOwnProperty('name')); //true


// const {name} = obj3
// // console.log(name); //Anshuman

// const {email : mail} = obj3
// console.log(mail); //anshuman.gupta2037@gmail.com  //We can shorten the name email => mail   


// ******************************************* FUNCTIONS *************************************************

function sayMyName() {
    console.log('A');
    console.log('N');
    console.log('S');
    console.log('H');
    console.log('U');
    console.log('M');
    console.log('A');
    console.log('N');
}

// sayMyName //without brackets this is not execution of function this is only reference of function

// sayMyName() // Now it is function execution 

// function printAddition(number1,number2) {
//     console.log(number1+number2);
// }
// const result = printAddition(3,5);
// console.log(result); //undefined

// function returnAddition(number1,number2) {
//     return number1+number2;
// }
// console.log(returnAddition(3,5)); //8

// function userLoggedIn(username) {
//     return `${username} just logged in`;
// }
// console.log(userLoggedIn('Anshuman')); //Anshuman just logged in

// console.log(userLoggedIn()); //undefined just logged in

// function printNumbers(num1) {
//     return num1;
// }
// console.log(printNumbers(200,400,500)); //200 - it will print only single value i.e first value

function printNumbers(...num1) {
    return num1;
}
// console.log(printNumbers(200,400,500)); //[ 200, 400, 500 ]- it will print all values by just adding ... before our paramenter

// const obj = {
//     username : "Anshuman",
//     price : "100"
// }

// function handleObject(anyObject) {
//     return `Username is ${anyObject.username} and price is ${anyObject.price}`
// }
// console.log(handleObject(obj)); //Username is Anshuman and price is 100 - METHOD 1
// console.log(handleObject({
//     username:"Sanni Dancer",
//     price:"20"
// }));  //Username is Sanni Dancer and price is 20

// const arr = [100,200,300,400,500]

// function handleArray(anyArray) {
//     return anyArray[1];
// }

// console.log(handleArray(arr)); //200

// ******************************************* Scopes in JS ***************************************************

// if(true) {
//     const a = 10
//     let b = 20
//     var c = 30
// }

// console.log(a); //ReferenceError: a is not defined
// console.log(b); //ReferenceError: b is not defined
// console.log(c); //30 - var does not follow scope rules that's why we do not prefer using var 

 //expression
//  const addTwo = function(num) {
//     return num+2;
//  }

// console.log(addTwo(5)); //7 - In function we can access our function above the function written , but here we have to first write our expression then we can access it.

// *********************************************** This and Arrow Function ***********************************************************

// function printName() {
//     const username = "Anshuman";
//     console.log(`Hello ${this.username} welcome to the website`);
// }
// printName() //Hello undefined welcome to the website

// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }

// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "hitesh"
//     console.log(username);
    
//     console.log(this);
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 //implicit return

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

//Immediately Invoked Function Expressions(IIFE)

// (function Name() {
//     console.log("Anshuman");
// })();

// ( () => {
//     console.log("Anshuman");
// } ) ();

// JavaScript execution unit
// 3 types
//1. Global Execution Unit
//2. Function Execution Unit
//3. Eval Execution Unit

//Memory Creation Phase 
//Execution Phase

/*                                       Control Flow                                                     */

// if
// const isUserloggedIn = true
// const temperature = 41

// if ( temperature < 50 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); //power is not defined - Reference Error


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2"); //short hand notation

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if (userLoggedIn && debitCard && 2==3) {
//     console.log("Allow to buy course");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("User logged in");
// }

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = "march"

// switch (month) {
//     case "jan":
//         console.log("January");
//         break;
//     case "feb":
//         console.log("feb");
//         break;
//     case "march":
//         console.log("march");
//         break;
//     case "april":
//         console.log("april");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }


// Truthy and Falsy Values

// Falsy - false, 0, -0, BigInt 0n, "" , null, undefined, NaN

// Truthy - "0", "false", " ", [], {}, function(){} -empty function

// const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator (??): null undefined

// let val1;
// // val1 = 5 ?? 10
// // val1 = null ?? 10
// // val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20



// console.log(val1);

// Terniary Operator

// condition ? true : false

// const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

// ***************************************************** Iterations ************************************************************************

// for

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         //console.log("5 is best number");
//     }
    //console.log(element);
    
// }

// console.log(element);

// for (let i = 1; i <= 10; i++) {
//     //console.log(`Outer loop value: ${i}`);
//    for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
//    }
    
// }
// // let myArray = ["flash", "batman", "superman"]
// //console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     //console.log(element);
    
// }


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         continue
//     }
//    console.log(`Value of i is ${index}`);
    
// }


// let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

// let myArray = ['flash', "batman", "superman"]

// let arr = 0
// while (arr < myArray.length) {
//     //console.log(`Value is ${myArray[arr]}`);
//     arr = arr + 1
// }

// let score = 11

// do {
//     console.log(`Score is ${score}`);
//     score++
// } while (score <= 10);

// ********************************************** Higher Order Loops ********************************************************

// const myObject = {
//     UP : "Lucknow",
//     Haryana: "Chandigarh",
//     Uttarakhand: "Dehradun",
//     Rajasthan: "Jaipur"
// }
//console.log(myObject);

// for(keys in myObject) {   //
//    // console.log(keys);
    
// }
// //UP Haryana Uttarakhand Rajasthan

// for(values in myObject) {
//     //console.log(myObject[values]); //Lucknow Chandigarh Dehradun Jaipur
// }

// for ...of loop

// const myArr = [1,2,3,4,5]

// for(values of myArr) {
    //console.log(values); // 1 2 3 4 5
// }

// const myMap = new Map()

// myMap.set("A",1);
// myMap.set("B",2);
// myMap.set("C",3);
// myMap.set("D",4);

// for(let key of myMap) {
   // console.log(key);
    
// }
//[ 'A', 1 ]
// [ 'B', 2 ]
// [ 'C', 3 ]
// [ 'D', 4 ]


// for(let key of myMap.keys()) {
//    // console.log(key); //A B C D
// }


// for(let key of myMap.values()) {
//    console.log(key);  // 1 2 3 4
// }

//for each loop :-

// array.forEach((value, index, array) => {
//   // your code here
// });

// const myArr = [1,2,3,4,5]

// myArr.forEach(function(value,index) {
//     console.log(`Value of index ${index} is ${value}`);
// })
// Value of index 0 is 1
// Value of index 1 is 2
// Value of index 2 is 3
// Value of index 3 is 4
// Value of index 4 is 5

//*************************************************************************************************** */

// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     // return item
// } )

// Q. What does .forEach() return in JavaScript?
// .forEach() returns undefined.
// It does NOT return a new array or any value.

// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// console.log(newNums); //5 6 7 8 9 10
 
// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )




// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//   let userBooks = books.filter( (bk) => bk.genre === 'History')

// //   userBooks = books.filter( (bk) => { 
// //     return bk.publish >= 1995 && bk.genre === "History"
// //})
//   console.log(userBooks);





//   const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const newNums = myNumers.map( (num) => { return num + 10})

// const newNums = myNumers
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40)  //Chaining

// console.log(newNums);


// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);


// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     },
// ]

// const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// console.log(priceToPay);