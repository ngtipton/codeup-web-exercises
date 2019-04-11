"use strict";


//5. Write a program to toggle the case for all characters in a string. Special characters will not change.
//    Example input: "aBc12#""
//    Example output: "AbC12#"

var swapCase = function(letters){
    var newLetters = "";
    for(var i = 0; i<letters.length; i++){
        if(letters[i] === letters[i].toLowerCase()){
            newLetters += letters[i].toUpperCase();
        }else {
            newLetters += letters[i].toLowerCase();
        }
    }
    alert(newLetters);
    return newLetters;
}

var text = prompt("Type a message that you want the characters reversed in.");

swapCase(text);