/*
    DOM: Document Object Model
    this is a tree of all html elements in a web docuent.
    Javascript uses DOM to have access to each element on a web document.
    DOM Methods
        i.  document.getElementById("ID as parameter")
        ii. document.getElementByClassName("class as parameer")
        iii.document.querySelector("css selector as parameter")
        iv. document.querySelectorAll("css selector as parameter")

*/

/*
    document.getElementById("ID as parameter");
    this selects a single element on the web document by is's Id

    e.g
        const greeting = document.getElementById("IS");
        greeting.textContent = "hi";
*/

/*
    document.getElementsByClassName
        used when selecting multiple html elements that shares the same class name.
        note this return an array containing of all element that belong the class. to work on them use a loop to loop-through the array and work on them.

e.g
    const subjects = document.getElementsByClassName("text");

    for (let subject of subjects) {
        subject.style.color = "blue";
    }

*/

/*document.getElementsByTagName;
this selects all Element with a particular tag name
it also return somethnf like an array

e.g
const list = document.getElementsByTagName("li");
for (let i of list) {
  i.style.color = "green";
} 
  
*/

/*
document.getElementsByName
this selects elements by their named attributes
mostly on form elements
e.g <button name="action-button">Click Me</button>

const btn = document.getElementsByName("action-button");
btn.style.color = "red";
*/

/*
document.querySelector("css selector as parameter");
this selects the first element that matches that selector on the web page


const paragraph = document.querySelector("p");
paragraph.style.color = "yellow";
*/

/*
document.querySelectorAll("the css selector as parameter");
this selects all element that matches the css selector

const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
  btn.style.color = "yellow";
  btn.style.backgroundColor = "black";
});
*/
