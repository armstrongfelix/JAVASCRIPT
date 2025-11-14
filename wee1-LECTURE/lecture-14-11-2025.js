// STRING DATATYPES
/*
string is sorrounded by qoutes "" or '' or `

    i. double quote  "felix"
    ii. sigle quote     'felix'
    iii. backtick       `felix`

    Backtick ` ` 
    Have extendedfuncionality 
    can be used to mixed text and variables easily


let moses = "double quote";
let ichie = "single quote";
let pinkranger = ``;

console.log(typeof moses, typeof ichie, typeof pinkranger);
*/

let pinkranger = "fortune";
let name = "Doctor";
console.log(`Hello ${name}`);

let firstName = "Armstrong";
let middleName = "Ezeudo";
let lastNmae = "Felix";
let greeting = `Hello ${firstName} ${middleName} ${lastNmae} how are you doin today`;
console.log(greeting);

/*CONCATENATION
this is using + (concatenation operator) to join muliple strings together to form a bigger string.

*/

let fullName = firstName + " " + middleName + " " + lastNmae;
console.log(fullName);

/*
BOOLEAN OPERATOR
Boolean operators are used for comparison
they are logical operators

*/

let agefieldcheck = false;
let namefieldcheck = true;
let g = 10;
let r = 20;
console.log(typeof agefieldcheck);
console.log(r > g);

/*
assignment operator =
concatenation operator +
comprison operators (<, <=, >, >=, ==, ===, !=, !==)
*/

/*
NULL DATATYPE
This is an empty value
it is an intentional empty value
it is assigned to a variable to indicate that the variable has no value
*/

let car = null;
console.log(car);
console.log(typeof car);
console.log(car == null);
let bike;
console.log(typeof bike);

/*UNDEFINED DATATYPE
This is a variable that has not been assigned a value
it is an unintentional empty value
it indicates that the variable has not been initialized
*/

/*
NON PRIMITIVE DATATYPES
OBJECT
    This store data in form of key:value pairs
    they holds collection of key:value pairs
*/

let student = {
  name: "ikechukwu",
  Age: 10,
  class: "Javascript",
  isStudent: true,
  score: null,
};

/*to target we targt the key threough the 
variable name (the object name) using . operator
it's container is curly braces {}
*/

console.log(student.class);
console.log(student.name);
console.log(student.Age);

/* ARRAY
Stores multiple items in order starting at index 0
it's container is square bracket []
*/

let fruits = ["mango", "banana", "orange", "apple"];

/*to target we target the index through the 
variable name (the array name) using [index number]
*/
console.log(fruits[2]);
console.log(fruits[0]);
console.log(fruits[3]);
console.log(fruits[1]);

let studentt = [
  "truth",
  "okuoku",
  "Ichiee",
  "Abike",
  "Abike",
  "shitu",
  "pinkranger",
  "dev AI",
  "Razzy",
  "360",
  "Butterfly",
  "smartern bigy",
];
console.log(studentt[10]);

/*
Array can contain objects
*/

let classroom = [
  { name: "johnson", Age: 12, gender: "male", gade: "A" },
  { name: "Amara", Age: 25, gender: "female", gade: "B" },
  { name: "Florish", Age: 60, gender: "female", gade: "C" },
  { name: "Saviour", Age: "6 months", gender: "male", gade: "A" },
];

/* 
OPERATOR AND EEXPRESSIONS

    Operators are symbols that perform operations on variables and values.
    Expressions are combinations of variables, values, and operators that evaluate to a single value.
    Operands are the values or variables on which the operators perform operations.
*/

let x = 10; // assignment operator =
let y = 5;
let sum = x + y; // addition operator +
let difference = x - y; // subtraction operator -
let product = x * y; // multiplication operator *
let quotient = x / y; // division operator /
let remainder = x % y; // modulus operator %
let exponentiation = x ** y; // exponentiation operator **
console.log(sum, difference, product, quotient, remainder, exponentiation);
