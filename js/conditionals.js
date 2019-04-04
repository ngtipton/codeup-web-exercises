"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

var pickNumber = confirm("Would you like to enter a number?");

//    console.log(pickNumber);   Look at recursion!!!!

    if (pickNumber == true){
        var number = prompt("Type in a number.");
            if (isNaN(number)){
                number = prompt("Give me a real number");
            }
    } else {
        alert("You didn't enter anything.");
    }

    function isEven(value) {
        if (number%2 == 0)
            return alert("Is even");
        else
            return alert("Is odd.");
    }

    console.log(isEven());

    alert("Your number plus one hundred is " + (+number + 100));

    function isPositive(value) {
        if (number < 0)
            return alert("Is negative");
        else
            return alert("Is positive.");
    }

    console.log(isPositive());

//    function isOdd(numberToTest) {
//        (pickNumber % 2 === 1) ? console.log("Number was even") : console.log("Number was odd");
//    }


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

//var analyzeColor = prompt("Type a color.")

//    if (analyzeColor.toLowerCase() == "blue") {
//        alert("Blue is the color of the sky");
//    } else if (analyzeColor.toLowerCase() == "red") {
//        alert("Strawberries are red");
//    } else if (analyzeColor.toLowerCase() == "cyan") {
//        alert("I don't know anything about cyan")
//    } else {
//        alert("You didn't pick either the color blue, red, or cyan.");
//    }

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
//var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

//    if (randomColor.toLowerCase() == "red") {
//        console.log ("Red");
//    } else if (randomColor.toLowerCase() == "orange") {
//        console.log ("Orange");
//    } else if (randomColor.toLowerCase() == "yellow") {
//        console.log ("Yellow")
//    } else if (randomColor.toLowerCase() == "green") {
//        console.log ("Green")
//    } else if (randomColor.toLowerCase() == "blue") {
//        console.log ("Blue")
//    } else if (randomColor.toLowerCase() == "indigo") {
//        console.log ("Indigo")
//    } else if (randomColor.toLowerCase() == "violet") {
//        console.log ("Violet")
//    }

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

//    switch (randomColor.toLowerCase()) {
//        case "red":
//            console.log("Red");
//            break;
//        case "orange":
//            console.log("Orange");
//            break;
//        case "yellow":
//            console.log("Yellow");
//            break;
//        case "green":
//            console.log("Green");
//            break;
//        case "blue":
//            console.log("Blue");
//            break;
//        case "indigo":
//            console.log("Indigo");
//            break;
//        case "violet":
//            console.log("Violet");
//            break;
//    }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

//var analyzeColor = prompt("Type a color.");
//
//if (analyzeColor) {
//        alert(analyzeColor);
//}

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

//var luckyNumber = Math.floor(Math.random() * 6);
//var howMuch = prompt("How much were your items before the discount?");
//var percentage;
//
//    if (luckyNumber == 0){
//        percentage = 0;
//    } else if (luckyNumber == 1){
//        percentage = .10;
//    } else if (luckyNumber == 2){
//        percentage = .25;
//    } else if (luckyNumber == 3){
//        percentage = .35;
//    } else if (luckyNumber == 4){
//        percentage = .50;
//    } else {
//        percentage = 1;
//    }
//
//    function calculateTotal(total) {
//        return howMuch - (howMuch * percentage);
//    }
//
//    alert(calculateTotal().toFixed(2));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 5
// The randomly generated 6 is of no value;

//var luckyNumber = Math.floor(Math.random() * 6);
//var howMuch = prompt("How much were your items before the discount?");
//var percentage;
//
//if (luckyNumber == 0){
//    percentage = 0;
//} else if (luckyNumber == 1){
//    percentage = .10;
//} else if (luckyNumber == 2){
//    percentage = .25;
//} else if (luckyNumber == 3){
//    percentage = .35;
//} else if (luckyNumber == 4){
//    percentage = .50;
//} else {
//    percentage = 1;
//}
//
//function calculateTotal(total) {
//    return howMuch - (howMuch * percentage);
//}
//
//alert("Your lucky number was " + luckyNumber + ".");
//alert("Your price before your discount was $" + howMuch + ".");
//alert("You discounted price is $" +calculateTotal().toFixed(2) + ".");