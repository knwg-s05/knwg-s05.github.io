// window.addEventListener('scroll', function() {
//   var contentElements = document.querySelectorAll('.content');
  
//   for (var i = 0; i < contentElements.length; i++) {
//     var element = contentElements[i];
//     var position = element.getBoundingClientRect();
    
//     if (position.top < window.innerHeight) {
//       element.classList.add('visible');
//     } else {
//       element.classList.remove('visible');
//     }
//   }
// });

// Page TOPへもどる
jQuery(function() {
  var pagetop = $('#page_top');   
  pagetop.hide();
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
          pagetop.fadeIn();
      } else {
          pagetop.fadeOut();
      }
  });
$('a[href^="#"]').click(function(){
  var time = 500;
  var href= $(this).attr("href");
  var target = $(href == "#" ? 'html' : href);
  var distance = target.offset().top;
  $("html, body").animate({scrollTop:distance}, time, "swing");
  return false;
});
});

// モバイル用スライドメニュー
document.querySelector('.hamburger').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.slide-menu').classList.toggle('active');
})

// メニュー展開時に背景を固定してスクロール不可に
$(function() {
  var state = false;
  var pos;
  $(‘.hamburger’).click(function() {
    if (state == false) {
      pos = $(window).scrollTop();
      $(‘body’).addClass(‘fixed’).css({‘top’: -pos});
      state = true;
    } else {
      $(‘body’).removeClass(‘fixed’).css({‘top’: 0});
      window.scrollTo(0, pos);
      state = false;
    }
  });
});