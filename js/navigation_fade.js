$(document).ready(function(){

    $('nav a, footer a, button').mouseover(function(){
        $(this).fadeTo(150, 0.3);
    }).mouseout(function(){
        $(this).fadeTo(150, 1);
    });

});