"use strict";

console.log('Hello from External JavaScript!');

alert("Welcome to my website!");

var color = "";

while (color === "") {
    color = prompt("Hi, what is your favorite color?");
}

alert("Great, " + color + " is my favorite color too!");






var cost = 3;
var lmdays = "";
var bbdays = "";
var hercdays ="";

while (lmdays === "") {
    lmdays = prompt("How many days did you rent the Little Mermaid?");
}

while (bbdays === "") {
    bbdays = prompt("How many days did you rent Brother Bear?");
}

while (hercdays === "") {
    hercdays = prompt("How many days did you rent Hercules?");
}

alert("You owe $" + ((Number(lmdays) + Number(bbdays) + Number(hercdays)) * cost) + " in rental fees.");






var googlepay = "";
var amazonpay = "";
var facebookpay = "";
var googlehours = "";
var amazonhours = "";
var facebookhours = "";

while (googlepay === "") {
    googlepay = prompt("How much does Google pay an hour?");
}

while (amazonpay === "") {
    amazonpay = prompt("How much does Amazon pay an hour?");
}

while (facebookpay === "") {
    facebookpay = prompt("How much does Facebook pay an hour?");
}

while (googlehours === "") {
    googlehours = prompt("How many hours did you work at Google?");
}

while (amazonhours === "") {
    amazonhours = prompt("How many hours did you work at Amazon?");
}

while (facebookhours === "") {
    facebookhours = prompt("How many hours did you work at Facebook?");
}

alert("You made $" + ((Number(googlepay) * Number(googlehours)) + (Number(amazonpay) * Number(amazonhours)) + (Number(facebookpay) * Number(facebookhours))) + " this week in pay.");

//+ can replace Number()
//var classSize = confirm("Is the class currently full?);
//var classSchedule = confirm("Does the class conflict with your schedule?"
//var enrollmentStatus = !classSize && !classSchedule;

//alert("Student enrollment status: " + enrollmentStatus);

//Way Sophia did it.

var numberOfItems = prompt("How many items did you buy>");
var offerExpiration = confirm("Is the offer valid?");
var membership = confirm("Are you a premium member?");

var couponStatus = (membership || Number(numberOfItems) > 2) && offerExpiration;
alert(couponStatus);