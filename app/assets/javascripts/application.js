// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
  var modalLayer = $("#modalLayer");
  var modalLink = $(".modalLink");
  var modalCont = $(".modalContent");
  var lineup = $(".lineup_wrap");
  var marginLeft = modalCont.outerWidth()/2;
  var marginTop = modalCont.outerHeight()/2;
  var maskHeight = $(document).height();  
  var maskWidth = $(window).width();  


  modalLink.click(function(){
    modalLayer.fadeIn("slow");
    $('#mask').css({'width':maskWidth,'height':maskHeight});
    // $('#mask').fadeIn(1000);
    $('#mask').fadeTo("slow",0.8); 
    // lineup.fadeout("slow");
    modalCont.css({"margin-top" : -marginTop, "margin-left" : -marginLeft});
    $(this).blur();
    $(".modalContent > a").focus(); 
    return false;
  });

  $(".modalContent > button").click(function(){
    $('#mask').fadeOut(1000);
    modalLayer.fadeOut("slow");
    modalLink.focus();
  });		
});