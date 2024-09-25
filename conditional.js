// conditional statement: (if statement)
// control flow. is how a program or script is evaluated
// if statement. (if statement caters one thing or value)
// if (condition)
// IF ELSE STATEMENT GIVES TWO OR MORE INSTRUCTIONS
// Nan( translate to not a number)

if (false) {
  console.log("no");
}

if (true) {
  console.log("yes");
}

const myBalance = 3000;
const transaction = 3000;

if (myBalance >= transaction) {
  console.log("transaction successfull");
}

// 18+
const age = 19;
if (age >= 18) {
  console.log("You are elgible to vote");
}

//  if the lenght of the password is 7 and above. good password
const password = "olluchis034";
if (password.length >= 7) {
  console.log("Good password");
}

// if else statment
// if(condition){
// first action}
// else{
// section action}

const age2 = 15;
// eligible 18+ or not
if (age2 >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are ineligible to vote, you must be 18+");
}

// youth/underage 0-40  or aged 41
const age3 = 40;
if (age3 >= 0 && age3 <= 40) {
  console.log("You are in the youth/underage category");
} else {
  console.log("You are in the aged category");
}

// const num = 90;
// if (
//     num % 2 === 0
// ){
//     console.log("This is an even number");

// }

let savings = 30000;
const transactionAmount = 70000;

if (savings >= transactionAmount) {
  console.log("transaction succesful");
} else {
  console.log("insufficicent funds");
}

// multiple condition, (else if statement)

let myNum = 98;
if (myNum > 0) {
  console.log("This is a Positive Number");
} else if (myNum < 0) {
  console.log("This is a Negative Number");
} else {
  console.log("This is Zero");
}

// underage 0-12 teens 13-19 adults 20+
const age4 = -89;

if (age4 >= 0 && age4 <= 12) {
  console.log("underage");
} else if (age4 >= 13 && age4 <= 19) {
  console.log("Tennager");
} else if (age4 >= 20 && age <= 40) {
  console.log("Adult");
} else if (age4 >= 41) {
  console.log("Aged");
}else{
    console.log("invalid age, try again");
    
}

//    switch statement are used to perform difference actions based on condition

let grade = "B"
switch (grade) {
  case "A":
  case "a":
    console.log("Excellent");
    break;
  case "B":
  case "b":
    console.log("Very Good");
    break;
  case "C":
  case "c":
    console.log("Good");
    break;
  case "D":
  case "d":
    console.log("Fair");
    break;
  case "E":
  case "e":
    console.log("Poor");
    break;
  case "F":
  case "f":
    console.log("failed");
    break;
  default: {
    console.log("invalid grade");
  }
}

