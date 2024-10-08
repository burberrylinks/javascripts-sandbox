// write a function that checks enteredPin
// build a simple atm machine
let usersPin = 1234;
let savings = 40000;
const checkPin = function (enteredPin) {
  if (enteredPin === usersPin) {
    return true;
  } else {
    return false;
  }
};

const withdraw = function (amount) {
  if (checkPin(1234)) {
    // withdraw
    if (amount < savings) {
      savings -= amount;
      console.log(
        `The withdrawal of ${amount} is successful and balance is ${savings}`
      );
    } else {
      console.log("insufficient funds");
    }
  } else {
    console.log("incorrect pin, try again");
  }
};
withdraw(2000);
withdraw(5000);

const Deposit = function (amount) {
  if (checkPin(1234)) {
    savings;
  }
};

const balance = function () {
  if (checkPin(1234)) {
    console.log(`Your current balance is ${savings}`);
  } else {
    console.log("incorrect pin, try again");
  }
};
balance();

// write a function that checks number of attmeps on the pin,
// max attmept is 3, card should be blocked

// let attempt = 0;
// const checkCardAttempt = function () {
//   if (checkPin(1230)) {
//     // go through
//   } else {
//     attempt++;
//     console.log(`incorrect pin, ${3 - attempt} left`);
//     if (attempt >= 3) {
//       console.log("Your card is blocked");
//     }
//   }
// };

let attempt = 0;
let blocked = false;

const checkCardAttempt = function () {
  if (checkPin(7689)) {
    console.log("perform transaction");
  } else {
    if (!blocked) {
      attempt++;
      console.log(`Incorrect Pin, ${3 - attempt} attempt left`);
    }
    if (attempt === 3) {
      console.log("your card is blocked");
      blocked = true;
    }
  }
};
checkCardAttempt();
checkCardAttempt();
checkCardAttempt();
checkCardAttempt();

let attempt1 = 0;
let blocked1 = false;
const checkCardAttempt1 = function () {
  if (blocked) {
    console.log("Your card is Blocked");
    return;
  }
  if (checkPin(4536)) {
    console.log("perform transaction");
    attempt1 = 0;
  } else {
    attempt++;
    if (attempt1 === 3) {
      console.log("Your card is Blocked");
      blocked1 = true;
    } else {
      console.log(`incorrect pin, $(3 = attempt1)`);
    }
  }
};

checkCardAttempt1();
checkCardAttempt1();
checkCardAttempt1();
checkCardAttempt1();

// write a function that takes string as a parameter and return string in all capital letter

// let name = Valuable
// console.log(Name.toUpperCase());

const capitalizeStr = (Str) => Str.toUpperCase();

// write a js function that accepts a string as a parameter
// and convert the first letter of the word to Uppercase

// const CapitalizeFirstLetter = (str) => str.charArt(0).toUpperCase
// console.log(CapitalizeFirstLetter("typhrurs"));

// write a js function that accepts an argument and returns the datatype
const checkDataType = (arg) => typeof arg;
console.log(checkDataType(90));

// write a function that returns whether a number is even or odd

// write a fuction that named MinitetoHours

const minutesToHours = (minute) => minute / 60;

// write a function called longestString that recieves two strings as parameters
const longestString = (str1, str2) => (str1.lenght > str2.lenght ? str1 : str2);

// and returns the longest of the two strings
// write a function named concat 3 that recieves 3 string as parameters
const concat3 = (str1, str2, str3, seperator) =>
  str1 + seperator + str2 + seperator + str3;
console.log(concat3("Ade", "Wale", "Tunje", "#"));

// the function should concatenate the three strings using the provided seperator and return the result

// write the function that returns sqaure of a number

const numSquare = (num) => num ** 2;
console.log(numSquare(16));

// ----
// write a function called checkLoanEligibility
// which recieves an amount as a parameter and returns
// white a user is eligible or not based on the criterion
// the loan amount can not be more than twice than amount of savins

let saving = 6000;

const EligibleAmount = (amount) =>
  amount > saving * 2 ? "ineligible" : "Eligible";
console.log(EligibleAmount(10000));

const conzole = () => console.log("hello world");

conzole();

// write a function that returns 34

const loggerNum = () => 34;
console.log(loggerNum);

// write a function that returns number of vowels
const countNumofVowels = (str) => {
  let Vowels = 'aeiou'
  let numOfVowels = 0
  const toLowerCaseStr = str.toLowerCase
  // loop over the lowerCase
  for (let 1 =0; < toLowerCaseStr.lenght; i++) {
    if (Vowels.includes(toLowerCaseStr(i))
    ) {numberOfVowels++}
  }
  return numOfVowels;

}

