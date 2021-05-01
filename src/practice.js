// const numberOfSeats = 30;
// let numberOfGuests = 27;

// if( numberOfSeats == numberOfGuests  ){
//  console.log("All seats used")
// } else if( numberOfSeats < numberOfGuests){
//   console.log("Too many guests")
// }else {
//   console.log("seats remaining")
// }

const alphabet = ["a", "b", "c", "d", "e"];
alphabet[5] = "c";
console.log(alphabet);
const alphabetLength = alphabet.length;
console.log(alphabetLength);

alphabet[2] = "snake";
console.log(alphabet);

// forEach
alphabet.forEach((alphBet, index) => {
  console.log(alphBet, index);
});

const scores = [50, 60, 70, 80, 90, 100];

const logScore = (score) => console.log("score Over 65", score);

// Iterate over the scores array using forEach.

// Execute the logScores

scores.forEach((element) => {
  if (element > 65) {
    console.log(element);
  }
});

const pets = ["dog", "cat", "rabbit", "hamster"];

console.log(pets.sort());
//  a   b
//  10 -5 = 5;
// [// b which is five sort first 5, then 10 ]
// a  b
// 5-10 = -5
//  [// a which is five sort first 5, then 10 ]

const grades = [88, 94, 72, 99, 53, 77];

grades.sort((a, b) => {
  return a - b;
});

// const  condiments = ['Ketchup', 'mustard', "relish", 'mayo']
// // Use reverse to change the order of this array/

// console.log(condiments.reverse())

// const reversed = [...condiments]
// console.log(reversed.reverse())

// Find() and FindIndex()

// Returns the first element that passes the testing function
//If no match ? Returns undefined

//FindIndex() return negative -1 if nothing passes this ....

const gradeZs = [99, 83, 87, 91, 77];
const underEighty = gradeZs.find((element) => {
  return element < 80;
});
console.log(underEighty);

const overEighty = grades.findIndex((element) => {
  return element > 80;
});
console.log(overEighty);

const students = [
  { name: "John", grade: 75 },
  { name: "Jane", grade: 93 },
  { name: "Rasheed", grade: 90 },
  { name: "Michael", grade: 94 },
];
// Sort the array of students based on their grade,
students.sort((a, b) => {
  return b.grade - a.grade;
});

// students.reverse()

// Find a student in the array who has a grade over 90
const answer = students.find((element) => {
  if (element.grade > 90) {
    console.log(element);
  }
});

console.log(answer);
// return first element Object in the array that passes the test
const overEighty = students.find((student) => student.grade > 100);

const array = [1, 2, 3, 5, 6, 7, 8];
const ans = array.includes(1);
console.log(ans);

const careers = ["teacher", "doctor", "engineer", "nurse", "scientist"];

const nurseIncluded = careers.includes("doctor");
console.log(nurseIncluded);

// some method and Every method of Array
// Return Boolean

/**
 * !Some()
 * ? Returns a boolean to indicate if an array contains some elements
 * ? that match the criteria provided
 *
 * !Every()
 * Returns a boolean to indicate if every element in the array matches the
 * criteria provided
 */

const temps = [90, 88, 85, 92, 84, 99];
// Are some temperatures less than 90? Is every temperature over 80?
const some = temps.some((element) => element < 90);
const every = temps.every((element) => element > 80);
console.log({ some, every });

const states = [
  "California",
  "New York",
  "New Jersey",
  "Alaska",
  "New Mexico",
  "Montana",
];
// Use this handy string method to find the solution: startsWith("New")
// Do some of the states in the array start with "New"?
const someStates = states.some((state) => {
  return state.startsWith("New");
});
console.log(someStates);
// Does every state in the array start with "New"?

// Includes, Some and Every
const bowlingScores = [154, 204, 300, 184, 286];

// Challenge Question #1
// Does the array of bowling scores includes a 300?
const doesIncludes = bowlingScores.includes(300);
console.log({ doesIncludes });
// Challenge Question #2
// Are some of the scores under 150?
const someScores = bowlingScores.some((element) => element < 150);
console.log(someScores);
// Challenge Question #3
// Is every score an even number?
const everyScores = bowlingScores.every((element) => element % 2 === 0);
console.log(everyScores);

/**
 * What is a stack ? A stack is a data structure that hold a list of items, and operate using the last in, first out rules...
 */

const sports = ["baseball", "basketball", "soccer", "football"];

const pushAns = sports.push("Rasheed");
console.log(pushAns);
sports.pop("Rasheed");

/**
 * A Queue function summarily to a stack.... that is first in, first out rule
 */
const ages = [18, 33, 71, 29, 64, 62];
ages.unshift(36);
console.log(ages);

const holidays = ["Labor Day", "Christmas", "HanaKuh", "Independence Day"];
//

const shiftedValue = holidays.shift();
console.log(shiftedValue);

// Push, Pop, Unshift, and Shit

const foods = [
  { food: "strewBerry", type: "fruit" },
  { food: "Orange", type: "fruit" },
  { food: "brocoli", type: "vegetable" },
  { food: "quinoa", type: "grain" },
];
const blackBeans = { food: "black beans", type: "league" };
const chiaSeeds = { food: "Chia seeds", type: "seed" };

foods.pop();

foods.shift();

foods.unshift(blackBeans);
foods.push(chiaSeeds);

// Map( ) generate new array

const grades = [88, 75, 92, 95, 85];
let bonusGrades = grades.map((grade) => {
  return grade + 5;
});

console.log(grades);

let bonusGrades = grades.map((grade) => {
  return grade + 5;
});

const friends = [
  { firstname: "Jane", lastname: "Doe" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Alex", lastname: "Trebek" },
];

// const fullName = friends.map(friends => {
//   return friend.firstname + " "+ friend.lastname
// })

// console.log(fullName)

// Option two
const fullName = friends.map(
  (friend) => `${friend.firstname} ${friend.lastname}`
);
console.log(fullName);

// filter ( )
const pets = [
  { name: "Fido", type: "dog" },
  { name: "Sally", type: "cat" },
  { name: "Garfield", type: "cat" },
];

const cats = pets.filter((pet) => pet.type === "cat");
console.log(cats);

const groceries = [
  { item: "apples", type: "fruit" },
  { item: "cereal", type: "pantry" },
  { item: "Park Chops", type: "meat" },
  { item: "bananas", type: "fruit" },
];

// filter the following array to include only those grocery items
// that are fruits

const fruit = groceries.filter((item) => {
  return item.type === "fruit";
});

console.log(fruit);

// !Reduce
//? Reduce executes a reducer function against each item in a an array
//? returning a single value. How the value returned is the accumulated value

//reducer(function(accumulator, currentValue, index, array)

//accumulator(acc): required, element being processed in the array

// Index: optional, index of the currentValue

// Array: optional, original array being iterated over

const sales = [2.5, 4, 5.5, 1.75, 2, 2.5, 6];

const totalSales = sales.reduce((total, amount) => total + amount);

console.log(totalSales);

const bills = [1200, 29.99, 65.93, 17.32, 44.76];

const totalBills = bills.reduce((total, bill) => total + bill);
console.log(totalBills);

// flat() + map() = flatMap()
// The flat map function create a new array, where each monthly allowance amount is doubled

const allowance = [[20], [15], [18]];
// Returns a new array by applying a callback function to each item of the array, and then flattening it one level

const doubleAllowance = allowance.flatMap((value) => [value * 2]);

const doubleAllowance = [40, 30, 36];

const wordJumble = ["Shampoo", "conditioner", "soap"];

const splitwords = wordJumble.flatMap((value) => value.split(""));

console.log(splitwords);

{
  /* <button class="btn btn-md btn-outline-dark">Hello world</button> */
}

// 1.

const newMoviesArray = movies.map((item) => item);
console.log(newMoviesArray);

// 2.
const onlyPG13 = movies.filter((item) => {
  return movies.rating === "PG-13";
});

// 3
const movies = [
  {
    title: "Avatar",
    year: "2009",
    rating: "PG-13",
  },
  {
    title: "I am legend",
    year: "2007",
    rating: "PG-13",
  },
  {
    title: "300",
    year: "2006",
    rating: "R",
  },
  {
    title: "The Avengers",
    year: "2018",
    rating: "PG-13",
  },
  {
    title: "The Wolf of Wall Street",
    year: "2013",
    rating: "R",
  },
];

const ratedRonly = movies.reduce((acc, item) => {
  if (item.rating === "R") {
    acc++;
  }
  return acc;
}, 0);

console.log("Rated R MOVIES", ratedRonly);

// Custome Average Function
Array.prototype.average = function () {
  return this.reduce((acc, elem) => acc + elem) / this.length;
};

const list = [1, 2, 3];
const avg = list.average();

/// Do this always
class ArrayUtils {
  // Custom average function
  static average(list) {
    return list.reduce((acc, elem) => acc + elem) / list.length;
  }
}
const list = [1, 2, 3];

const avg = ArrayUtils.average(list);

console.log(avg);

// // !Removing Duplicate from an array
// let arr = [1,3,1,14,53,3,5,5,1,6,6];

// const removeDuplicated = [...new Set(arr)];
// console.log(removeDuplicated);

// const answ = [...new Set([{},{}]); // ? Different references, no duplicates

// //const obj = {}
// /**
//  * [...new Set([obj,obj])]
//  */
// ;

function Particle() {
  this.x = 100;
  this.y = 99;
  this.show = function () {
    point(this.x, this.y);
  };
}

var p;

function setup() {
  createCanvas(600, 300);
  p = new Particle();
}
/**  IS PRIME FUNCTION */
function isPrime(num) {
  if (num === 2) return "is prime";
  const checkforPrime = [];
  for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
    const reminder = num % 1;
    checkforPrime.push(reminder);
  }
  if (checkforPrime.includes(0)) {
    return "not prime";
  } else {
    return "is prime";
  }
}
console.log(isPrime(2));

let i = 2;
const bagOfPrime = [];
const gatherPrime = (n) => {
  if (n > bagOfPrime.length) {
    const k = math.ceil(Math.sqrt(i));
    var check = [];
    for (j = 2; j < k; j++) {
      let res = i % j;
      check.push(res);
    }
    if (i === 2) {
      bagOfPrime.push(i);
    }
    if (!check.includes(0)) {
      bagOfPrime.push(i);
      i++;
      if (i % 2 === 0) i++;
      gatherPrime(n);
    }
    i++;
    gatherPrime(n);
  }
  return bagOfPrime;
};

gatherPrime(50);

const name = {
  rasheed: "Rasheed",
};

// function sayName(){
//   console.log(this.rasheed)
// };
// cosnt ages =sayName.bind(name)
// console.log(anwer)

const user = {
  id: null,
  name: "Itadori",
};

// Without assert
if (!user.id) console.log("User Id is missing.");

// With assert
console.assert(user.id, "User Id is missing.");

!user.id && console.log({ id: user.id });

// For in/ For Of
const names = ["James", "Jane", "Julie"];
for (const n of names) {
  console.log(n);
}
// For in
const student = {
  A: "Andrew",
  B: "George",
  C: "James",
};
for (const x in student) {
  console.log(student[x]);
}

const rasheed = {
  log: 1,
};

console.log(rasheed.log);

let user = {
  name: "John",
  surname: "Smith",
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};
user.fullName = "Rasheed Akanni";
alert(user.name);
alert(user.surname);

// Kingsley Ubah
/**
 7 inbuilt data types in Javascript
 null - It means no data, empty, nada
 undefined - undefined means data has not been explicitly defined or declared
 boolean - #boolean evaluates to either true or false. 
 number - are digits between 0 - 9
 string - strigs are characters enclosed within double quotes
 object
 symbol - added in ES6
 They are also called Primitive data types
 Data is held in a container called a variable. The name of the variable is called
 identifier as it "identifies"data.
 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 Variables in javascript can be: const let var 
 const is block scoped and fixed
 let is block scoped and reassignable
 var global

 */
const stR = new String("Rasheed");
const { log } = console;
log(stR);

// callback funcion is the uni of asynchrony; it shows there is a later part in your code:
function add(a, b, cb) {
  return cb(a + b);
}
add(1, 2, function (c) {
  return c;
});
// returns a string representation of an array
const arr = [1, 2, 4, 5];
console.log(arr.toString());
let a = 1;
while (a < 5) {
  a++;
  console.log(a);
}
let a = 1;
while (a < 5) {
  console.log(a);
}
// Do while loop
var i = 6;
do {
  console.log(i);
  i++;
} while (i < 5);

// For / of
const arr = [1, 2, 4, 5, 6];

for (element of arr) {
  console.log(element);
}
// For / in
const students = {
  A: "Andrew",
  B: "George",
  C: "James",
};
for (const y in students) {
  console.log(student[y]);
}
