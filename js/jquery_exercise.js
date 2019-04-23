"use strict";

//$(document).ready(function() {
//    alert( 'The DOM has finished loading!' );
//});

//var myparagraph = $('#myPara').html();
//alert(myparagraph);

//      Alternate way to call an alert (below)

//alert($("#myPara").html());

//var mylist = $('#myUL').html();
//alert(mylist);

//$(".codeup").css("border", "1px solid red");

//$("li").css("font-size", "20px");

//$("h1, p, li").css("background-color", "yellow");

$('h1').click(function() {
    $(this).css('background-color', 'yellow');
});

$('p').dblclick(function() {
    $(this).css('font-size', '18px');
});

$('li').hover(function() {
    $(this).css('color', 'red');
}, function() {
    $(this).css('color', 'black');
});