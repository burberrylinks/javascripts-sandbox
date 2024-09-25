// determine whether variables should be const or let
// create a variable names my country set it to whether value
// create a variable called my age set it to your own value
// create a variable called fullname and set it to any value
// log the lenght of your country as well as the lenght of fullname to the console
// covert fullname to all upper case
// extract just the first name in your fullname and log it in your console
// write a short description off the person in this format
// e.g peter pan is a citizen of portugal 

// increase the age declared above by 1
// log the remainder of when 100 is divided by 7 to the console
// check whether the country variable start with h

const fullName = " Ayinla Abubakar Sesan ";
const country = "Nigeria"
const age = 30
let aboutme = "Sesan hails from kwara state, Nigeria. he is simply a nice soul who appreciate loyalty and authenticity and a great fan of the outdoors, avid traveller"
const sentence = `${fullName} is a citizen of ${country}`
console.log(sentence);

console.log(fullName.toUpperCase());
console.log(fullName.length);
console.log(country.length);
console.log(country.startsWith("h"));
console.log(aboutme)
console.log(fullName.slice(0, 5));
console.log(100 / 7)
const num = 144.28796
console.log(num.toFixed(3));
console.log(age + 1)
const marksMass = 95;
const marksHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76

const marksBmi = marksMass / marksHeight ** 2;
const johnBmi = johnMass / johnHeight ** 2;
const MarkHigherBmi = marksBmi > johnBmi;
console.log(marksBmi, johnBmi);
console.log(MarkHigherBmi);


// if (MarkHigherBmi){
//     console.log("Mark's BMI is higher than John's!");
    
// } else {
//     console.log("john's Bmi is higher than Mark's! ");
    
// }

if ( marksBmi > johnBmi){
    console.log("Mark's BMI is higher than John's");
    
} else if (johnBmi > marksBmi){
    console.log("john's Bmi is higher than Mark's");
    
} else(
    console.log("mark and john bmi are equal"));

    // nexted if statment
    let userChoice = "rock"
    let computerChoice = "rock"
    // rock paper scissors


   if (userChoice === computerChoice) {
     console.log("This is a tie");
   } else if (userChoice === "rock") {
     if (computerChoice === "scissors") {
       console.log("User wins, Rock smashes scissors");
     } else {
       console.log("Computer Wins, Paper covers rock");
     }
   } else if (userChoice === "paper") {
     if (computerChoice === "rock") {
       console.log("User wins, paper covers rock");
     } else {
       console.log("computer wins, scissors cuts paper");
     }
   } else if (userChoice === "scissors") {
     if (computerChoice === "rock") {
       console.log("Computer wins, rock smashes scissors");
     } else {
       console.log("User wins, scissors ccuts paper");
     }
   } else {
     console.log("Invalid entry, try again");
   }
 



        








