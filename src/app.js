/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/*  
Using javascript, create a function that generates and returns a random excuse with the following structure:
let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
To create a consistent excuse you have to concatenate one item from each array in the proper order.
Call that function onLoad and set the excuse into the innerHTML of the #excuse HTML element.
*/
window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  console.log(excuseGen());
};

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function excuseGen() {
  //who
  let subject = Math.floor(Math.random() * (who.length - 1) + 1);
  //action
  let verb = Math.floor(Math.random() * (action.length - 1) + 1);
  //what
  let complement = Math.floor(Math.random() * (what.length - 1) + 1);
  //when
  let time = Math.floor(Math.random() * (when.length - 1) + 1);

  //concatenating the array and setting into the p
  document.getElementById("excuse").innerHTML =
    who[subject] +
    " " +
    action[verb] +
    " " +
    what[complement] +
    " " +
    when[time];
}
