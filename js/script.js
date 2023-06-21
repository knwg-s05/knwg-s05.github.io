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
document.querySelector('.hamburger').addEventListener('click', function() {
  this.classList.toggle('fixed');
  document.querySelector('body').classList.toggle('fixed');
})
// メニュー展開時にスクロールを非表示
document.querySelector('.hamburger').addEventListener('click', function() {
  this.classList.toggle('hidden');
  document.querySelector('.scrolldown1').classList.toggle('hidden');
})