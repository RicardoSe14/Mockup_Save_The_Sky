
  
  $('#on').click(function(e) {
  
    $('.hide').css('display', 'block');
    
    if( $('.hide').css('visibility') != 'hidden' ) {
      $('.hide').css('visibility', 'hidden');
    } else {
      $('.hide').css('visibility', 'visible');
    }
  });

  $('#off').click(function(e) {
    
    $('.hide').css('display', 'block');
    
    if( $('.hide').css('visibility') != 'hidden' ) {
      $('.hide').css('visibility', 'hidden');
    } else {
      $('.hide').css('visibility', 'visible');
    }
  });

  var boton = document.getElementById("on");
boton.addEventListener("click", function() { } );

var v = document.getElementsByTagName("audio")[0];

var sound = false;

boton.addEventListener("click", function(){
  if (!sound) {
    v.play();
    sound = true;
   } else {
    v.pause();
    sound = false;
   } 
 });

 var boton2 = document.getElementById("off");
 boton2.addEventListener("click", function() { } );
 
 var v = document.getElementsByTagName("audio")[0];
 
 var sound = false;
 
 boton2.addEventListener("click", function(){
   if (!sound) {
     v.play();
     sound = true;
    } else {
     v.pause();
     sound = false;
    } 
  });