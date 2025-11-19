/*let inpute = prompt("Which year did COVID19 took place : ");
inpute = Number(inpute);
message = inpute == 2020 ? "You are correct" : "You are wrong";
alert(message);
*/

/*
let age;
let situation;

age = prompt("Are you old enough to watch this movie, Enter your Age : ");

situation = age >= 18 ? "yes" : prompt("are you with your parents : ");
al = situation == "yes" ? "you can watch" : "you cannot wath";
alert(al);
*/

/*
question1 = prompt("Are you with your parents ");
question2 = prompt("Are you old enough to watch this movie, Enter your Age : ");
question1 == "yes" || question2 >= 18
  ? alert("you can watch")
  : alert("you cannot watch");
*/

/*Conditional Statement
    These are question that javascript ask before deciding what t do
    They helps us choose btwn actions (multiple instructions)
    
        
    if statement: Runs when a condition is true.
    if (condition){
        statements
    }

    else statement: Runs when the if condition is not true.
    else{
        statements
        }

    Asynchronous
    javascript runs line by line.    
*/

/*
let age = prompt("how old are you");
if (age >= 18) {
  alert("you are eligible to vote");
} else {
  alert("you are not eligible to votee");
}
*/

/*
else if statement
This is used to check for more than one conditions 

if (condition){
    statemen

else if (condition){
    statemen

else if (condition){
    statemen
else if (condition){
    statemen
    
.
.
.
else {
    statements
    }
}
*/

/*
let score = prompt("Enter Your Scorre : ");
if (score >= 80) {
  alert("A");
} else if (score >= 70) {
  alert("B");
} else if (score >= 60) {
  alert("C");
} else {
  alert("F");
}
*/

/*
let Maths = Number(prompt("Enter your maths score"));
let English = Number(prompt("Enter your English score"));
let Geogragpy = Number(prompt("Enter your Geogragpy score"));
let Igbo = Number(prompt("Enter your Igbo score"));

if   else if    else   statements
let Average = (Maths + English + Geogragpy + Igbo) / 4;
if (Average >= 85) {
  alert("your Average is " + Average + "% and your grsde is A");
} else if (Average >= 75) {
  alert("Your average is " + Average + "% and your grade is B");
} else if (Average >= 65) {
  alert("your Average is " + Average + "% and your grsde is C");
} else {
  alert("FAIL");
}
*/

let username = prompt("Enter your User Name : ");
let password = prompt("Enter your password");
if (username === "felix" && password === "0000") {
  alert("Logged in  Successfully");
} else {
  alert("Failed to log in .... invalid credentails");
}
