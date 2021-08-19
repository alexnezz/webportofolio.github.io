$('.page-scroll').on('click', function(){

 const tujuan = $(this).attr('href');
//  console.log('oke');

const elemenTujuan = $(tujuan);
// console.log(elemenTujuan);

$('html, body').animate({
  scrollTop : elemenTujuan.offset().top - 75
}, 1000, 'easeInOutExpo');

});



// PARALLAX
$(window).on('load', function(){
$('.pKiri').addClass('muncul');
$('.pKanan').addClass('muncul');
$('.content-progress').addClass('show');
$('.skill-progress').addClass('show');

});


$(window).scroll(function(){

const wScroll = $(this).scrollTop();

// Card Animation
if(wScroll > $('.service').offset().top -250){
  $('.service .card').each(function(i){
setTimeout(function(){
$('.service .card').eq(i).addClass('fall')
}, 300 * i+1);

  });
}

// Gallery Animation
if(wScroll > $('.gallery').offset().top -250){
  $('.gallery .img-thumbnail').each(function(i){
setTimeout(function(){
$('.gallery .img-thumbnail').eq(i).addClass('datang')
}, 300 * i+1);
  });
}

});




