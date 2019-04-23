"use strict";

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

function isNegative (number) {
    if ( number < 0 ) {
        return true;
    }
    if (number >= 0) {
        return false;
    }
    if ( 1 / number === Number.POSITIVE_INFINITY ) {
        return true;
    }
    return false;
}

const grades = [80, 77, 88, 95, 68];

function average(grades) {
    const total = grades.reduce((acc, c) => acc + c, 0);
    return total / grades.length;
}

const averages = average(grades);
console.log(averages);



function countOdds(array) {
    var total = 0;
    for(var i = 0; i < array.length; i++) {
        if(array[i] % 2 != 0) {
            total++;
        }
    }
    return total;
}


function convertNameToObject(string) {
    var name = string.split(" ");
    var nameObject = {
        firstName: name[0],
        lastName: name[1]
    };
    return nameObject;
}

function fiveTo(number) {
    var array = [];
    if(number > 5) {
        for(var count = 5; count < number; count++) {
            array.push(count);
        }
        return array;
    } else {
        console.log('number must be greater than 5');
        return number;
    }
}
fiveTo(15);

var names = [
    {firstName: 'Harry', lastName: 'Potter'},
    {firstName: 'Ron', lastName: 'weasley'},
    {firstName: 'Hermione', lastName: 'granger'}
];
function upperCaseLastNames(names) {
    names.forEach(function(name) {
        name.lastName = name.lastName.toUpperCase();
    });
    return names;
}