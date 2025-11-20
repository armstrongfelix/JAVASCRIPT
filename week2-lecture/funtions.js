/*
    FUNCTIONS
    Function these are reusable blocksof code. they are defined and calld any time on the apllication.
    Syntax
    function functionName(parameters) {
        code block
    declaration of a fuction simply means defining it. stating the name, the code blocks and the parameters.

    calling a function:
    this is simply invoking the function

    parameters: the variables place holders specified when defining a function
    while argument are values that are passed when callin the function.
}
*/

/* Defining function (Function Declearation)
function Myname() {
  console.log("my name is obinna");
}

//calling function
Myname();

function Add(a, b) {
  console.log(a + b);
}

Add(4, 3);
Add(80, 56);
*/

/*Funtion expresion: declearing a function as a variable
const greet = function (time) {
  console.log(`Good ${time}`);
};

greet("morning");
greet("evenng");
*/

/*
  Anonymous function
  are funion that do not have a name , rather the can be asigned to variable

*/

/*
Arrow function they make use of arrow. it came from ES6. Only decleared using const
const Subtract = (c, d) => {
  console.log(c - d);
};

Subtract(20, 5);
*/

/*
  CALLBACK FUNCTION 
  this is function that is passed as an argument to another function
  callback function are used to handle asynchronous operation
  they ensure that a function is not exectuted before a task is completed but will be exectuted right after the task is completed.

function SayHi(name, welcome) {
  console.log(`Hello ${name}`);
  welcome();
}

function welcome() {
  console.log("Welcome to the world of JavaScript");
}

SayHi("Obinna", welcome);
*/

/*
    RETURN STATEMENTS
    return passes a value back from a function to the place where the function was called.
    it also terminates the function execution

    function Multiply(x, y) {
      return x * y;
    }



function Multiply(b, c, d) {
  return b * c + d;
}


console.log(Multiply(1, 3, 4));
console.log(Multiply(5, 6, 7));
*/

/*  PRACTICE EXERCISE
  Create a function that will simulate a bank account withdrawal.
  The function should take in the amount to withdraw as a parameter.
  The function should check if the account has sufficient funds for the withdrawal.
  If there are sufficient funds, the function should deduct the amount from the account balance and return the new balance.
  If there are insufficient funds, the function should return a message indicating that the withdrawal cannot be processed.

let balance = 2000;

const Account = (amount) => {
  if (amount > balance) return "insufficient fund";
  else {
    return `your withrawal was succesfully, balance is ${balance - amount}`;
  }
};

let withdraw = Number(prompt("Enter amount you want to withdraw : "));

Account(withdraw);

alert(Account(withdraw));
*/
