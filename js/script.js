$('.page-scroll').on('click', function(){

    const tujuan = $(this).attr('href');    
    // console.log(tujuan);

    const elemenTujuan = $(tujuan);
    // console.log(elemenTujuan);

    $('html, body').animate({
      scrollTop : elemenTujuan.offset().top - 65
    }, 1000, 'easeInOutExpo');
});



// Parallax
$(window).scroll(function(){

  const wScroll = $(this).scrollTop();

  if(wScroll > $('.portofolio').offset().top -250) {
    $('.portofolio .thumbnail').each(function(i){
      setTimeout(function(){
      $('.portofolio .thumbnail').eq(i).addClass('muncul')
      }, 300 * i+1);
    });
  }
});


// about
$(window).on('load', function(){
   $('.pKiri').addClass('datang');
   $('.pKanan').addClass('datang');
});