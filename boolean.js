// Error. syntax error, reference error(trying to call something that doesnt exist)
// you can only use a variable after initializing
// debug( check your console to know where is the issue coming from. i.e console gives feebad on the lines that are affected)
// Boolean value(these are used to make decisions. true or false)

const isMarried = false;

// comparison operators > <
//  == loose equality sign(doesnt check data types)
// === strict equality 
// <= 
// >=

console.log(6.0 >=6);
console.log(5 == "5");
console.log(5=== "5");
console.log(6.0 >= 6);
console.log(7.2 == "7.2");
console.log(5.0 === 5.0);
console.log(7 <= 8);
console.log(89 ==="89");

// logial operators and(&&), (or ||) (not!)  
// (yaba and ikeja) (yaba or ikeja) the rule is if false is on a line, the line is false 
console.log(7 > 6 && 5 > 4);
console.log(11 === "11" && 3 >= 2); 
console.log(5 >= 6 && 2 ==2);
console.log(7 === 7 && 9 > 11);

// logal operators. we only need one true for everything to be true

console.log(false || false );
console.log(6 > 7 || 5 > 6);

console.log(8 !== 5);

// truthy and falsy value
// strings 'wale"

console.log(Boolean(""));
// numbers are aall valid numbers(-ve or +ve)
console.log(Boolean (0));

// null and undefined are falsy value















