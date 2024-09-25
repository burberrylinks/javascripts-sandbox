// teneray operator
let myAtmpin = 5678;
let enteredPin = 5679;
const myBalance = 8000;
let transactionAmount = 5000;

if (myAtmpin === enteredPin ){
    console.log("Perfom Transaction"); } else{
        console.log("Incorrect Pin");
        
    }
// tenary operator
// condition ? first action : second action

myAtmpin === enteredPin
?console.log("Perform Transaction")
:console.log("Incorrect Pin")

myBalance >= transactionAmount
?console.log("Transaction Successfull")
:console.log("Insufficient funds");



