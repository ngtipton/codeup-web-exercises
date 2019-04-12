//  Note:  What is this god-awful jumble of text that make almost no sense readability wise?
//
var myRadius = parseFloat(prompt("Enter the radius of your circle:", 0));
MyArea(myRadius);

function calculateArea(myRadius) {
    return (myRadius * myRadius * Math.PI);
}

function roundArea(area) {
    return Math.round(+area);
}

function MyArea() {
    var area = calculateArea(myRadius);
    console.log("A circle with a radius of " + myRadius + " has an area of " + area + ".  The area rounded to the nearest number is " + roundArea(area) + ".");
}

//  Note: Trying to convert the above exercise into a square/rectangle equation.

//var myLength = parseFloat(prompt("Enter the length of your square/rectangle:", 0));
//var myWidth = parseFloat(prompt("Enter the width of your square/rectangle:", 0));
//var myHeight = parseFloat(prompt("Enter the height of your square/rectangle:", 0));
//MyAreaSR();
//
//function calculateArea(myArea) {
//    return (myLength * myWidth * myHeight);
//}
//
//function roundArea(area) {
//    return Math.round(+area);
//}
//
//function MyAreaSR() {
//    var area = calculateArea(myArea);
//    console.log("A circle with a radius of " + myRadius + " has an area of " + area + ".  The area rounded to the nearest number is " + roundArea(area));
//}
//


//(function() {
//    "use strict";
//
//    // create a circle object
//    var circle = {
//        radius: 3,
//
//        getArea: function (area) {
//            // TODO: complete this method
//            // hint: area = pi * radius^2
//            this.area = Math.PI * (radius * radius);
//            console.log(area);
//            console.log(Math.round(area*100)/100);
//        },
//
//
//            return // TODO: return the proper value
//
//        logInfo: function (doRounding) {
//            // TODO: complete this method.
//
//            if (true);
//                math.round(radius,math.PI);
//            // If doRounding is true, round the result to the nearest integer.
//            // Otherwise, output the complete value
//
//            console.log("Area of a circle with radius: " + this.radius + ", is: ");
//        }
//    };
//
//    // log info about the circle
//    console.log("Raw circle information");
//    circle.logInfo(false);
//    console.log("Circle information rounded to the nearest whole number");
//    circle.logInfo(true);
//
//    console.log("=======================================================");
//    // TODO: Change the radius of the circle to 5.
//
//    // log info about the circle
//    console.log("Raw circle information");
//    circle.logInfo(false);
//    console.log("Circle information rounded to the nearest whole number");
//    circle.logInfo(true);
//})();
