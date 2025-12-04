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
    Used to get the inneeHTML of an element and used for manipulaing the innerHTML. can insert html tag to an element.


const neche = document.querySelector("#ai");
neche.innerHTML = "<em>Neche is now happy</em>";
*/

/*
    Innertext
    use to cange the inner text of an html element.

*/

const neche = document.querySelector("#ai");
neche.innerText = "<em>Neche is now happy</em>";
//Node: it will insert everything as text

/*
    DOM Manipulation Methods
    createElement()
    appendChild()
    append()
    perPend()
    removeChild()
    element.remove()
    replaceChild()
    insertBefore()
    */

/*
    document.createElement
    this creates a new element in JS but does not add it to the page yet
    */

const newElement = document.createElement("h2");
newElement.textContent = "new content i am";

/*
document.appendChild(parameter)
used for adding achild element at the end of child element of a parent element.
adds one element at a time. this adds only one element at time, it does not add text.

document.prepend(paramter)
this adds element to the begining of an element.

document.append()
this adds multiple elements at a time.
it can add both text or element.
*/

const body = document.querySelector("body");
body.appendChild(newElement);

body.append("welcome to JS again.");

const newlist = document.createElement("li");
newlist.textContent = "Savour is out";
body.prepend(newlist);

/*
removeChild(parameter)
this removes specific child element from it's  parent.

element.rmove(parameter)
emoves element directly without needing its parant.

*/

p = document.querySelector("p");
p.remove();

/*
    document.replaceChild
    this replace one child  element with another one.

*/

const newh1 = document.createElement("h1");
newh1.textContent = "I am the first header";

const newh2 = document.createElement("h2");
newh2.textContent = "i have replcaed the first header";
body.append(newh1);

body.replaceChild(newh2, newh1);

/*
    insertBefore()
    this inserts element before a particular existing  Child element

*/

body.insertBefore(neche, newlist);
