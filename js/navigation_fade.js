
function fadeButtons(){
    $(document).ready(function(){
        $('nav a, footer a, button').mouseover(function(){
            $(this).fadeTo(150, 0.3);
        }).mouseout(function(){
            $(this).fadeTo(150, 1);
        }).click(function(){
          //  $(this).fadeTo(0, 1)
        })
    });
}

fadeButtons();