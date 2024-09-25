// primitive data types( strings, numbers, boolean, null and undefined)
// complex data types( object and arrays)
// ----
// strings are just text characters, they are always in quotation marks, either single quotes or double quotes. ' ""
// boolean value are basically( true or false)

const firstName = "John";
const lastName = "Doe";
console.log(firstName)
console.log(lastName)

// string propoerties. lenght properties(gives us the )
// string.lenght
console.log(firstName.length);
console.log(lastName.length);

// string concatenation(joing string together)
const fullName = firstName + " " +  lastName;
console.log(fullName);
console.log(fullName.length);

// string methods- funations that can be perfomed on strings
// toUpperCase
// toLowerCase
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase())
// replace, replacAll. replace act on first thing it comes in contact with, rePlace all replace all properties it comes in contact with
console.log(fullName.replace("o", "&"));
console.log(fullName.replaceAll("John", "*"));
// includes
console.log(fullName.includes("h"));
// startsWith, endsWith
console.log(fullName.startsWith("Jo"));
console.log(fullName.endsWith("Doe"));

const myEmail = "Aayinlaa12@gmail.com"
console.log(myEmail.length);
console.log(myEmail.toUpperCase())
console.log(myEmail.includes("e"));
console.log(myEmail.endsWith("e"));
console.log(myEmail.endsWith("google.com"))

// indexOf(gives us first occurance of an element), LastIndexOf(last occurance of an element)
// javascripts if a zero based languages
console.log(myEmail.indexOf("y"))
console.log(myEmail.lastIndexOf('o'));

// charArt(characterAt)
console.log(myEmail.charAt('5'))
// concat(joinging things or character together)
console.log(myEmail.concat('example'))

// trimming
const userName = "  burberrylang    ";
console.log(userName.length);
console.log(userName.trim());
// trimStart trimEnd
console.log(userName.trimStart());
console.log(userName.trimEnd());

// extracting portion of a string
// slice(slice methods), substring (substringmethod), substr(substr method, "start and number of characters we want" )
// substr(1,4)
// slice(start, end (non-inclusive));

const surname = "sandler";
console.log(surname.slice(0, 4));
console.log(surname.substring(1, 6));
console.log(surname.substr(0, 5));

const author = "Ngozi Adichie"
const bookTitle = "Americana"
const yearPublished = "2016"

// the book Americana written by 
// Ngozi Adichie was published in year 2016
const description = " The book " + bookTitle + " written by " + author + " published in the year " + yearPublished

console.log(description);
   


// template literals- this allows us to format variables into strings
// backticks ``(just before 1 on the keyboard)
// backticks `the book $(bookTitle)`


const description2 = `The book $ {bookTitle} written by ${author} was publish in ${yearPublished}` 
console.log(description);

const name1 = "Ade";
const name2 = "Wale";

// Ade is a bot
const sentence = `${name1} is a boy`;
// his name is wale
const sentence1 = `His name is ${name2}`;

// Tinubu said and i quote `let the poor breathe1`
const quote = `Tinube said and i quote "let the poor breathe"`
console.log(quote);










