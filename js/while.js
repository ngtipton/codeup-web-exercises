"use strict";

//    Problem 1

//    var x = 2;
//
//    while (x <= 65536) {
//        console.log(x);
//        x = x * 2;
//    }

//    Problem 2

var allCones = Math.floor(Math.random() * 50) + 50;

var custBuy = Math.floor(Math.random() * 5) + 1;

var conesLeft = allCones - custBuy;

    do {
        console.log(conesLeft);
        conesLeft = conesLeft - custBuy;
    } while (conesLeft > 0);