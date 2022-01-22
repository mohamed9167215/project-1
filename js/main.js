//  The Scroll Top

$(document).ready(function(){

   var ScrollButton = $(".scroll");
     $(window).scroll(function(){
       if( $(this).scrollTop() >= 700)
       {
        ScrollButton.show();
       }
       else
       {
           ScrollButton.hide();
       }
    
   });
        ScrollButton.click(function()
        {
            $('html,body').animate({scrollTop:0}, 600 );
        });

 });
