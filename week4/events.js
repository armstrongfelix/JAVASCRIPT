/*EVENTS
        Events are action that happens on a web pageXOffset. they are signals that tells something have happened.
    EVENT LISTENER
        this a funtion that wait for event to happen, then runs some code when the event happens
    
        types of event
        click
        submit
        input
        mouseover
        keydown
        mousein

        addEventListener():
        used to add listener to an event

        Element.addEventListener(eventName, function(){ code block})
        Element.addEventListener(EventName, functionName)

*/

/*
const button = document.querySelector("button");
button.addEventListener("click", function () {
  alert("you don click me");
});
*/

const button = document.querySelector("button");
const body = document.querySelector("body");
let clicked = false;
button.addEventListener("click", function () {
  if (!clicked) {
    body.style.backgroundColor = "black";
  } else {
    body.style.backgroundColor = "white";
  }
});

const text = document.querySelector(".ppp");

input = document.querySelector("input");
input.addEventListener("keydown", function () {
  alert("this user is typing");
});

const changename = document.querySelector(".type");
changename.addEventListener("input", function () {
  text.textContent = changename.value;
});

const handlle = () => {
  text.textContent = changename.value;
};

const btn = document.querySelector(".btn");
const handleclick = () => {
  alert("button 2 was clicked");
};

changename.removeEventListener("input", handlle);

btn.addEventListener("click", handleclick);

/*
removeEventListener("eventName", functionName)
use to remove listener on an Event

*/
btn.removeEventListener("click", handleclick);

const colors = ["yellow", "red", "blue", "orange", "pink", "black"];
let index = 0;
function changecolor() {
  body.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
}

btn.addEventListener("click", changecolor);
