// loops. for, while, do, -while. another name for loops is iteration, recursion
// for loop
// for initalizer(delcaring a variable), condition(true or false), increment {line of code}
// infinite loop
for (let i = 0; i < 10; i++) {
  console.log("loop");
}

//  write a loop that that returns the sum of natural numbers between 0 and 100
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += 1;
}
console.log(sum);

// while loop perform the same task as "for loop"
let y = 0;
while (y <= 5) {
  // perform action
  console.log("In the loop");
  y++;
}

let num = 1;
while (num <= 10) {
  console.log("current value of num is" + num);

  num++;
}

// do while loop= (perform the action once least, whether condition
//  is true or false)

let x = 5;
do {
  console.log("I am in the loop");
  x++;
} while (x <= 2);
