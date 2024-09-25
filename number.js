// Number 9 0.4 1198
const myAge = 87;
// number methods (are methods that can be performed on strings)
// toFixed 
const num = 9.5678;
console.log(num.toFixed(0));
console.log(num.toFixed(1));
console.log(num.toFixed(3));
console.log(num.toFixed(2));
// math operators, = + - *
const x = 7;
const y = 7;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
// ** raised to the power (exponent)
console.log(3 ** 2);

// modulus % (return the remainder of division)
console.log(2 % 2);
console.log(6 % 2);
console.log(100 % 10);
console.log(10 % 100);

// order of operation (BODMAS)
console.log(4 + 2 *3);

// PEMDAS

let likes = 0
likes - likes + 1;
likes - likes + 1;
likes - likes + 1;
likes - likes - 1;
likes++;
likes--;
console.log("like" , likes);

let savings = 5000;
savings = savings + 3000;
savings = savings + 10000;

// 7000
savings = savings - 7000;
// 525
savings = savings - 525;
console.log(savings)

savings += 2000;

const fullName = "Peter Obi"
const accountNumber = 4002914
let myBalance = 5000;

// jan transaction
// credited 10000, debited 200 as sms charges, gift of 3000, gifted someone 1200

myBalance += 10000
myBalance -=200
myBalance +=3000
myBalance -=1200

console.log("myBalance is", myBalance);

// fullname with account number: accountNumber has a balance of myBalance
const accountStatement = `${fullName} with account number ${accountNumber} has a balance ${myBalance.toFixed(2)}`;
console.log(accountStatement);
















