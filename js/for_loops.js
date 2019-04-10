"use strict";

//    Problem 1

//    var selNumb = prompt("Enter a number.")
//
//    for (var i = 1; i <= 10; i++) {
//        console.log(selNumb + " x " + i + " = " + i * selNumb);
//    }

//    Problem 2

//    var luckyNumber = Math.floor(Math.random() * 6)

//    function returnRandNum(min, max) {
//        return Math.floor(Math.random() * (max - min +1) + min);
//    }
//
//    function isEvenOdd(num) {
//        var outputMessage = num;
//        outputMessage = (num % 2 === 0) ? "is even" : "is odd";
//        console.log(outputMessage);
//    }
//
//    function evenOddCalculator() {
//        for (var i = 1; i <= height; i += 1) {
//            var randNum = returnRandNum(20, 200);
//            isEvenOdd(randNum);
//        }
//    }



//    Problem 3

//    function createPyramid (height) {
//
//        for (var i = 1; i <= height; i++) {
//            var row = '';
//
//            for (var j = 1; j <= i; j++) {
//                row += i;
//            }
//            console.log(row);
//        }
//    }
//
//    createPyramid(9);

//    Problem 4
    var i = 100;

    do {
        console.log(i);
        i = i - 5;
    } while (i > 0);

    for (var i = 100; i > 0; i = i -5) {
        console.log(i);
    }