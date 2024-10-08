// Object
// {key: value, key2: value2}
// key and value pairs are called object properties

const person = {
  firstName: "Ade",
  lastName: "Wale",
  age: 64,
  IsMarried: true,
  friends: ["John", "Jane"],
  workHours: { monday: "8hours" },
};
console.log(person);

// access properties inside a object
//  dot notation - objName.propertyName
console.log(person.age);
console.log(person.friends);
console.log(person.friends[0]);

console.log(person.car);
console.log(person.workHours.monday);

//  bracket notation - objName['propertyName']
console.log(person["age"]);
console.log(person["friends"][1]);
console.log(person["workHours"]["monday"]);

// adding a new property to an object

person.car = "Benz";
person.hobbies = ["running", "sleeping"];
console.log(person);

// removing a property from an object/ delete
delete person.IsMarried;
console.log(person);

// object method = funsctions that the developer writes to work on the object

const book = {
  title: "In The Shadow",
  author: "John Doe",
  yearPublished: 2000,
  genre: "Fiction",
  IsBestSeller: false,
  rating: 3.5,
  summary: function () {
    // the book is titled in the shadow and
    // it is written by john doe and has a rating of 3.5
    console.log(
      `The Book is Titled ${this.title}, written by ${this.author} published in ${this.yearPublished} and has a rating of${this.rating}`
    );
  },
};

book.summary();
book.title;

// (this) keyword - inside of a function declaration object
// it refers to the object

// object destrucring
// modern and faster way of picking properties in an object

const user = {
  userName: "user001",
  fullName: "Peter Pan",
  password: "*********",
  profilePic: "avatar",
  followers: ["Wale", "John", "Jane"],
  following: ["Elon Musk", "Tpain", "Ronaldo"],
  dateOfAccount: 2020,
  post: {
    title: "Js is fun",
    desc: "I love JS alot",
  },
};
user.profilePic;
const { userName, profilePic, dateOfAccount, password, followers } = user;
console.log();

// OBJECT DESTRUCTURING -
//modern and faster way of picking properties in an object
4// const { username, profilePic, dateOfAccount, password, followers } = user;
const {
  posts: { title, desc },
} = user;
console.log(title, desc);

const myMainUser = { 
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};
const email = "mubarak@google.com";
//aliase
const {
  id,
  email: mainUserEmail,
  address: {
    street,
    geo: { lat: latitude, lng: longitude },
  },
  company: { name, catchPhrase, bs },
} = myMainUser;
