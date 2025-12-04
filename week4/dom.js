/*
    DOM: Document Object Model
    this is a tree of all html elements in a web docuent.
    Javascript uses DOM to have access to each element on a web document.
    DOM Methods
        i.  document.getElementById("ID as parameter")
        ii. document.getElementByClassName("class as parameer")
        iii.document.querySelector("css selector as parameter")
        iv. document.querySelectorAll("css selector as parameter")
        v.  document.getElementsByTagName("css selector as the parameter")

*/

/*        document.getElementById("ID as parameter");
        this selects a single element on the web document by is's Id

e.g;
const greeting = document.getElementById("IS");
greeting.textContent = "hi";
greeting.style.color = "red";
greeting.style.fontSize = "30px";
greeting.style.textTransform = "uppercase";
*/

/*
    document.getElementsByClassName
        used when selecting multiple html elements that shares the same class name.
        note this return an array containing of all element that belong the class. to work on them use a loop to loop-through the array and work on them.

e.g

const subjects = document.getElementsByClassName("text");
console.log(subjects);

for (let subject of subjects) {
  subjects.style.color = "blue";
}
// subjects[0].style.color = "green";
// subjects[1].style.color = "purple";
// subjects[2].style.color = "yellow";

/*

/*
    document.getElementsByTagName;
        this selects all Element with a particular tag name
        it also return something like an array
        NOTE: this is the name given to the element inside the html file using name attribute. very common with button, input, radio, checkbox form tags.

        e.g
        
        const list = document.getElementsByTagName("li");
        for (let i of list) {
        i.style.color = "blue";
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

/*
NOTE: 
both
i.  document.getElementsByClassName()
ii. document.getElementsByTagName()
iii.document.querySelectorAll()    all returns an Array
*/

/*
        header = document.querySelectorAll("h2");
        header.forEach(h, index)=> {
            if (index === 0) {
                h.style.color = "red";
            }
            else if (index === 1) {
                h.style.color = "yellow";
            }
            else if (index === 2) {
                h.style.color = "pink";
            }
            else {
                h.style.color = "green";
            }
        }
*/

/*
    DOM proprties
        these are properties that belong to the DOM Object. they are use to manipulate html File.
        textcontent.

        i.  innerhtml
        ii. innertext
        iii.style
        iv. classlist.add()
        v.  classlist.remove()
        vi. classlist.togle()
        vii.    setattribute()
        viii.   getattribut()
        ix. reomoveattribute()

*/

/*
    InnerHML
    Used to get the inneeHTML of an element
*/
