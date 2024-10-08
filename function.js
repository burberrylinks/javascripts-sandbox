// functions are containers that hold blocks of code that we can call on at all times
// functions are used to run snippets of code
// it is declared by the function variable
// for a function to work you need to call or invoke

function greeting() {
  console.log("Welcome to our App");
}

// invoked / called
greeting();
function speak() {
  console.log("hello class");
}
speak();

// functions can take parameters
// functions can be reusable based on parameters that are passed with.
function specialGreeting(name = "user") {
  console.log(`$(name), welcome to our app`);
}

specialGreeting("olumide");
specialGreeting("timi");

// default parameters
specialGreeting();

// write a function that logs the addition of two numbers
function addTwoNums(num1, num2, num3) {
  const result = num1 + num2 + num3;
  console.log(result);
}

addTwoNums(9, 5, 6);
addTwoNums(11, 2, 5);

// check if a number is either positive or negative
function checkNum(num) {
  if (num > 0) {
    console.log(`${num} is postive`);
  } else if (num < 0) {
    console.log(`${num} is negative`);
  } else {
    console.log("this is zero");
  }
}

checkNum(4);
checkNum(-3);
checkNum(0);

// function expreession
myFunction1();
function myFunction1() {
  console.log("this is a func declaration");
}

const myFunction2 = function () {
  console.log("this is a func declaration");
};
myFunction2();

//  hoisting - moves all of the function delcaration up the script

// return keyword
// write a function that calculates the product of two nums
const productOfTwoNums = function (num1, num2) {
  return num1 * num2;
};

const result = productOfTwoNums(7, 9) + 8;
console.log(`The result is ${result} `);

// write a function that converts km to meter
// 7km - 7 * 1000

const kmtMeter = function (value) {
  const meter = value * 1000;
  return `${value}km is equal to ${meter}m`;
  // anything after a return keyword is void p.s in a block of code
};

console.log(kmtMeter(8));
console.log(kmtMeter(4.6));

// write a function that calculates the average of 3 numbers and returns the value

const calAverage = function (num1, num2, num3) {
  const average = (num1 + num2 + num2) / 3;
  return average;
};

console.log(average(3, 4, 5));

// write a func that calculates the age of user, yoyr function
// should take in year of birth as a parameter

const userAge = function (yearofBirth) {
  return 2024 - yearofBirth;
};
console.log(userAge(1960));
// write a function that checks if a number is even or odd

const oddOrEven = function (num) {
  if (num % 2 === 0) {
    return "This is an even Number";
  } else {
    return "This is an odd number";
  }
};
console.log(oddOrEven(62));

let savins = 8900;
const checkWitdrawal = function (amount) {
  if (amount < savings) {
    savings -= amount;
    return `widthdrawal of ${amount} is successful and my balance is ${savings}`;
  } else {
    return `insufficient funds`;
  }
};

// console.log(checkwithdrwawl (70000))
console.log(checkWitdrawal(6500));
console.log(checkWitdrawal(2000));
console.log(`my current savings is ${amount}`);

const depositAmount = function (amount) {
  savings += amount;
  return `Deposit of $(amount) is successful and your current balance is ${savings}`;
};
console.log(depositAmount(900));
console.log(checkWitdrawal(1200));
console.log(depositAmount(5000));
