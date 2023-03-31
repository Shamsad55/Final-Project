$(function(){

// Banner slider

$('#banner').slick({

    arrows: false,
    dots: true,

    });

 //New_Arrivals slider

$('.New_Arrivals_slider').slick({
  
    slidesToShow: 4,
    prevArrow:".sliderArrowLeft",
    nextArrow:".sliderArrowRight",
    });
 //wraper_slider
 
$('.wraper_slider').slick({
    slidesToShow: 2,
    arrows: false,
    dots: true,
});
$('.Latest_News_slider').slick({
    slidesToShow: 4,
    arrows: false,
    dots: true,
});

$(".Timer").countdown("2023/3/30 11:00:00" , function(e){
   let time = e.strftime('%D days %H:%M:%S');

  $(".Timer .days").html(e.strftime('%D'));
  $(".Timer .hours").html(e.strftime('%H'));
  $(".Timer .min").html(e.strftime('%M'));
  $(".Timer .sec").html(e.strftime('%S'));

});


});