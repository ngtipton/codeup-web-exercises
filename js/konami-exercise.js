"use strict";

$(document).ready(function() {

    //var keys is what the user inputs.
    var keys = [];

    //var code is the key code for the Konami code.  13 is enter, required to execute.
    var code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];

    //Initially hides the popup gif.

    $("#contra-duck").hide();

    //Executes function when right keys are pressed.

    $(document).keydown(function(keyEvent) {
        keys.push(keyEvent.which);

        //If number of inputs exceeds the code length, starts deleting the first input.  Creates a loop that allows you to enter the code right regardless if you screw up.

        if ( keys.length > code.length ) {
            keys.shift();
        }

        //If input keys match the code, execute gif.

        if ( keys.toString() == code.toString() ) {
            $('#contra-duck').slideDown('fast');
        }

    })
})