"use strict";


//5. Write a program to toggle the case for all characters in a string. Special characters will not change.
//    Example input: "aBc12#""
//    Example output: "AbC12#"

//var swapCase = function(letters){
//    var newLetters = "";
//    for(var i = 0; i<letters.length; i++){
//        if(letters[i] === letters[i].toLowerCase()){
//            newLetters += letters[i].toUpperCase();
//        }else {
//            newLetters += letters[i].toLowerCase();
//        }
//    }
//    alert(newLetters);
//    return newLetters;
//}
//
//var text = prompt("Type a message that you want the characters reversed in.");
//
//swapCase(text);

//2. Create a function that takes a single letter and returns what number the letter is in the alphabet. Ignore case.
//    someFunction("a") // returns 1
//    someFunction("z") // returns 26

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var indexOfLetters = letters.indexOf(prompt("Type a letter."));
alert("Your letter's order is " + (indexOfLetters + 1));