/* CONTROL STRUCTURE 
    Switch Case
        1. it is used to perform different actions based on different conditions.
        2. it is alternative to if...else if...else statement.
        3. it is used when we have multiple conditions to check.
        4. it is more readable and easier to maintain than if...else if...else statement.
            SYNTAX:
                switch(expression) {
                    case value1:
                        code to be executed if expression === value1
                        break;
                    case value2:
                        code to be executed if expression === value2
                        break;
                    ...
                    default:
                        code to be executed if expression doesn't match any case
                }
        */
/*
let day = "Wednesday";
switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  default:
    console.log("Today is any other day");
}
*/

/* LOOPS
    1. Loops are used to repeat a block of code multiple times until a certain condition is met.
    2. Types of loops in JavaScript:
        a. for loop
        b. while loop
        c. do...while loop
*/

/*
 for loop:
        used when the number of iterations is known.
        initialization: it is used to initialize the loop counter variable
        condition: it is used to check the condition before each iteration.
        increment/decrement: it is used to update the loop counter variable after each iteration.
        i++ : increment by 1 (postfix i.e post increament)
        i-- : decrement by 1 (postfix i.e post decreament)
        --i : decrement by 1 (prefix i.e pre decreament)
        ++i : increment by 1 (prefix i.e pre increament)


        SYNTAX:
            for(initialization; condition; increment/decrement) {
                code to be executed
            }



for (let i = 0; i < 6; i++) {
  console.log("Iteration number: " + i);
}

for (let b = 8; b > 0; b--) {
  console.log("Decrementing Iteration number: " + b);
}
*/

/*
WHILE LOOP
    1. while loop is used when the number of iterations is not known.
    2. This execute a block of code untill the condition becomes false.
    SYNTAX
        while (condition){
            statements to be executed
        }


let count = 7;
while (count > 3) {
  console.log(`Count is : ${count}`);
  count--;
}
*/

/*
DO WHILE LOOP
    do while loop: it executes a code atleast once before checking the condiions

    SYNTAX:
        do {
        code execution; 
        iteration;
        } whil (condiion);


let num = 5;
do {
  console.log(`num is ${num}`);
  num++;
} while (num < 5);
*/

/* 
    PRACTICE EXERCISES
    
    JAVASCRIPT VALIDATION
    
    MULTIPLICATION TABLE
    trim() method is a string method used for clearing white spaces from the starting and ending of a string.
*/

let number = prompt("Enter a number : ");
if (number.trim() == "" || isNaN(number)) {
  alert("invalid input");
} else {
  for (let i = 1; i <= 12; i++) {
    number = Number(number);
    console.log(`${number} x ${i} = ${number * i}`);
  }
}
