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
      $(".nimg1, .nimg2, .nimg3, .nimg4, .nimg5, nimg6").click(function(){
        $(this).animate({
          opacity: '1.0',
          height: '150px',
          width: '150px'
        });
      });
    })
  
    $(document).ready(function(){
        $(".food_food1").click(function(){
            
            $(".food_food1").animate({
                'right':'100%'
            });
        });
        $(".food_fva1").click(function(){
            
            $(".food_food1").animate({
                'right':'1%'
            });
        });
        $(".food_food2").click(function(){
            
            $(".food_food2").animate({
                'right':'100%'
            });
        });
        $(".food_fva2").click(function(){
            
            $(".food_food2").animate({
                'right':'1%'
            });
        });
        $(".food_food3").click(function(){
            
            $(".food_food3").animate({
                'right':'100%'
            });
        });
        $(".food_fva3").click(function(){
            
            $(".food_food3").animate({
                'right':'1%'
            });
        });
        $(".food_food4").click(function(){
            
            $(".food_food4").animate({
                'right':'100%'
            });
        });
        $(".food_fva4").click(function(){
            
            $(".food_food4").animate({
                'right':'1%'
            });
        });
        $(".food_food5").click(function(){
            
            $(".food_food5").animate({
                'right':'100%'
            });
        });
        $(".food_fva5").click(function(){
            
            $(".food_food5").animate({
                'right':'1%'
            });
        });
        $(".food_food6").click(function(){
            
            $(".food_food6").animate({
                'right':'100%'
            });
        });
        $(".food_fva6").click(function(){
            
            $(".food_food6").animate({
                'right':'1%'
            });
        });
        $(".food_food7").click(function(){
            
            $(".food_food7").animate({
                'right':'100%'
            });
        });
        $(".food_fva7").click(function(){
            
            $(".food_food7").animate({
                'right':'1%'
            });
        });
        $(".food_food8").click(function(){
            
            $(".food_food8").animate({
                'right':'100%'
            });
        });
        $(".food_fva8").click(function(){
            
            $(".food_food8").animate({
                'right':'1%'
            });
        });

    });