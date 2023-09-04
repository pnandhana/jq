
$(document).ready(function(){
    $("#hide").click(function(){
      $("nav").hide();  
    });  
    $("#show").click(function(){
      $("nav").show();  
    });  
    $("#fadein").click(function(){
      $("nav").fadeIn();  
    });  
    $("#fadeout").click(function(){
      $("nav").fadeOut();  
    });  
    $("#fadeto").click(function(){
      $("nav").fadeTo("slow",0.15);  
    });  
    $("#fadetoggle").click(function(){
      $("nav").fadeToggle();  
    });  
    $("#slideup").click(function(){
      $("nav").slideUp();  
    });  
    $("#slidedown").click(function(){
      $("nav").slideDown();  
    });  
    $("#slidetoggle").click(function(){
      $("nav").slideToggle();  
    });  
     
  });  
  
 