// rest and spread operator denoted by (...)
// rest operator 
const countries = ["Cuba", "Algeria", "Mexico", "USA"];
const [one, ...others] = countries;
console.log(one);
console.log(others);

const country= {
    name: "Nigeria",
    yearOfIndependence: 1960,
    officalLanguage: "English",
    isIsland: "False",

}

const{name, isIsland, ...remaining} = country;
console.log(remaining);
// sread operator
const africanCountries = ["Mali", "Togo", "Kenya", "Uganda"]
const asianCountries = ["China", "Japan", "Bangladesh", "Vietnam"]

const allCountries = [ 
    ...africanCountries,
    "Congo",
    asianCountries,
    "Austria",
    "France"
]





// optional chaining
const user = {
    name: "John Doe",
    age: 45,
    gender: "Male",
    previousJobs: {
        one: "Jumia",
        two: "Paystack",
        three: "Meta"
    }
}
console.log(user?.name);
console.log(user?.car);
console.log(user?.previousJobs?.three);





// nullish

// nullish coalesence 
// leftExpression (null // undefined) ?? default value
const username= null