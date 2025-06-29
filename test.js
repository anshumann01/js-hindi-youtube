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

const arr = [100,200,300,400,500]

function handleArray(anyArray) {
    return anyArray[1];
}

// console.log(handleArray(arr)); //200

// ******************************************* Scopes in JS ***************************************************

if(true) {
    const a = 10
    let b = 20
    var c = 30
}

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

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

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

const chai =  () => {
    let username = "hitesh"
    console.log(username);
    
    console.log(this);
}


chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 //implicit return

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

