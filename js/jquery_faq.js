"use strict";

//$(document).ready(function() {
//    $('#answerToggler').click(function(event) {
//        $('dd').toggleClass('invisible');
//    });
//    $('dt').click(function(event) {
//        $(this).toggleClass('highlight');
//    })
//});



//$('h3').click(function(){
//    $(this).next().children().css('font-weight', 'bold')
//});
//
//$('#highlight').on('click', function() {
//    $('ul').each(function(i,e){
//        $(this).children().last().css('background', 'yellow')
//    })
//});
//
//$('li').on('click', function(){
//    $(this).parent().children().first().css('color','blue')
//});

$('span').click(function() {
    $('div').hide();
});

$('.yellowstone').click(function() {
    $('.yellowstones').slideToggle(2500);
});

$('.everglade').click(function() {
    $('.everglades').slideToggle(2500);
});

$('.bigbend').click(function() {
    $('.bigbends').slideToggle(2500);
});

$('h2').fadeIn(8000);