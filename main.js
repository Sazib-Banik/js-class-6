/*
//function declaration...
function calculateAge(birthyear){
  const age = 2022 - birthyear;
  return age;
}
let age = calculateAge(1997);
console.log(age);

//example - 1;
function sum(firstNumber, secondNumber){
  const total = firstNumber + secondNumber;
  return total;
}
let total = sum(20, 30);
console.log(total);

// example-2
function sub(firstNumber, secondNumber){
  const subNumber = firstNumber - secondNumber;
  return subNumber;
}
let subNumber = sub(50, 20);
console.log(subNumber);

//example -3 
function mul(firstNumber, secondNumber){
  const multi = firstNumber * secondNumber;
  return multi;
}
let multiNumber = mul(20, 5);
console.log(multiNumber);

//example-4
function divi(firstNumber, secondNumber){
  const divi = firstNumber / secondNumber;
  return divi;
}
let diviNumber = divi(50, 5);
console.log(diviNumber);


//function expression...

const calculateAge2 = function(birthyear){
  const age = 2022 - birthyear;
  return age;
}
age = calculateAge2(1997);
console.log(age);

//example - 1;
let sum1 = function (firstNumber, secondNumber){ 
  return firstNumber + secondNumber;
}
total = sum1(20, 30);
console.log(total);

// example-2
let sub2 = function (firstNumber, secondNumber) {
  const subNumber = firstNumber - secondNumber;
  return subNumber;
};
subNumber = sub2(50, 20);
console.log(subNumber);

//example -3 
let mul2 = function (firstNumber, secondNumber){
  const multi = firstNumber * secondNumber;
  return multi;
}
multiNumber = mul2(20, 5);
console.log(multiNumber);

//example-4
let divi2 = function (firstNumber, secondNumber) {
  const divi = firstNumber / secondNumber;
  return divi;
};
diviNumber = divi2(50, 5);
console.log(diviNumber);

//NB.. function declaration a function k agei call kora jay...kinto function expression a function likhar pore function k call korte hoy...ta nahole error asbe...

//Arrow function

// let/const/var functionName = (parameter) => function body;
const calculateAge3 = (birthyear) => 2022 - birthyear;
age = calculateAge3(2002);
console.log(age);

//example 2 in arrow function
const calculateAge4 = (birthyear) => {
  return 2022 - birthyear;
}
age = calculateAge4(2002);
console.log(age);


//example - 1;
let sum3 = (firstNumber, secondNumber) =>{ 
  return firstNumber + secondNumber;
}
total = sum3(20, 30);
console.log(total);

// example-2
let sub3 = (firstNumber, secondNumber) => {
  const subNumber = firstNumber - secondNumber;
  return subNumber;
};
subNumber = sub3(50, 20);
console.log(subNumber);

//example -3 
let mul3 =  (firstNumber, secondNumber) => {
  const multi = firstNumber * secondNumber;
  return multi;
}
multiNumber = mul3(20, 5);
console.log(multiNumber);

//example-4
let divi3 = (firstNumber, secondNumber) => {
  const divi = firstNumber / secondNumber;
  return divi;
};
diviNumber = divi3(50, 5);
console.log(diviNumber);
//NB... jodi amra arrow function a {} use kori tahole amader k return korte hobe must ..r jodi {} use nah kori tahole return kora lagbe nah...

//Example 3
const jobLeft = (birthyear) => {
  let age = 2022 - birthyear;
  return 65 - age;
}
let ageLeft = jobLeft(1997);
console.log(ageLeft);
console.log(`Your job age left is ${ageLeft} years.`);

//NB.. js DRY principle mene cole...
/*
  Dry means... ... ...
  D = don't
  R = repeat
  Y = yourself
*/
// Array
const students = ['asif', 'rakib', 'rahim'];
console.log(students);
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);

//array example 2
const players = new Array("sakib", "tamim", "miraz");
console.log(players);
console.log(players[0]);
console.log(players[1]);
console.log(players[2]);

//array value change or new value assign
players[0] = "rahim";
console.log(players);
console.log(players[0]);

// array er length check korar jonno
console.log(players.length);

// check array last value in dynamic way...
console.log(players[players.length - 1]);

// Array Method
const messMember = ['sazib', 'srejon', 'mehedy', 'hanif', 'shohug', 'kawsar', 'munna', 'saddam', 'sorif'];
console.log(messMember);

// add new member in array last value
messMember.push('sakin');
console.log(messMember);

// add new member in array past value
messMember.unshift("Ashiq");
console.log(messMember);

// delete member in array last value
messMember.pop();
console.log(messMember);

// delete member in array past value
messMember.shift();
console.log(messMember);

//NB... array theke kono kichu delete korle array sei value tai return kore ...
let removeItem = messMember.shift();
console.log(removeItem);

removeItem = messMember.pop();
console.log(removeItem);





