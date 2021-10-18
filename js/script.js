$(document).ready(function($){

  // якоря на страницы TOP_HOLDERS
      $(document).ready(function() {
        $(window).bind("load", function() {
          //Пример исключения ссылки
          //jQ ('a[href*="#"]:not([href="#"],[href="#spu-209"],[href="#spu-211"],[href="#spu-212"],[href="#spu-213"],[href="#spu-214"],[href="#spu-215"],[href="#spu-217"])').click(function() {
          $('a:not(.spu-clickable)[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
              location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                $("html, body").animate({
                  // $('html, body').animate({
                  scrollTop: target.offset().top - 0
                }, 800);
                return false;
              }
            }
          });
        });
      });
  
  
  
  // отслеживаем скрол таблицы
      if($('.fixed-scroll').length) {
        let $window=$(window),
      $target = $(".fixed-scroll"),
      $h = $target.offset().top;
      $window.on('scroll',function(){
      let scrollTop = window.pageYOffset||document.documentElement.scrollTop;
      if(scrollTop > $h){
        $target.addClass("fixed");
        return;
      }else{
        $target.removeClass("fixed");
      }
        return;
        });
      }
  
  
  // манипуляции с header
  $('.header-wrapper__burger').click(function () {
    $('.header-wrapper__nav').addClass('is_open')
  });
  
  $('.header-wrapper__close').click(function () {
    $('.header-wrapper__nav').removeClass('is_open')
  });
  
  $('.header-wrapper__search-mobile').click(function () {
    $('.header-wrapper__search').slideToggle(400);
  });
  
    $(document).click(function(e) {
      if ($(e.target).closest(".header-wrapper").length) return;   
      $(".header-wrapper__search").hide();
      e.stopPropagation();
    });
  
  
  // Открытие popUp
      $(".is").on("click", function() {
        $('.modal-overlay[data-modal-id="'+$(this).data('modal-id')+'"]').addClass("modal-overlay_visible");
    });
  
    $(".modal__close").on("click", function() {
        $(".modal-overlay").removeClass("modal-overlay_visible");
    });
         
    $(document).on("click", function(e) {
        if(!$(e.target).closest(".modal").length && !$(e.target).closest(".is").length) {
            $(".modal-overlay").removeClass("modal-overlay_visible");
        }
    });
      
  
  // отменяем события элементов при наведнии 
  $(".no_click").mouseover(function (e) {
    $(this).css('cursor', 'not-allowed');
    $(this).attr('disabled', 'disabled')
  });
  
  $(".no_click_link").mouseover(function (e) {
    $(this).css('cursor', 'not-allowed');
    $(this).addClass('no-hover');
  });
  
  $(".no_click_link").click(function (e) {
    e.preventDefault();
  });
    
  
  // открываем фильтр и опять отслеживаем скролл
  $('.watchlist-wrapper__options-title').click(function () {
    $('.watchlist-wrapper__settings').slideToggle(400);
      setTimeout(() => {
        let $window=$(window),
      $target = $(".fixed-scroll"),
      $h = $target.offset().top;
      $window.on('scroll',function(){
      let scrollTop = window.pageYOffset||document.documentElement.scrollTop;
      if(scrollTop > $h){
        $target.addClass("fixed");
        return;
      }else{
        $target.removeClass("fixed");
      }
        return;
        });
      },300)
  });
  
  });
  



// Уменьшаем шрифт в ячейках динамично
const span = document.querySelectorAll('.watchlist-wrapper__section-percent-cell > span');
  
if(span) {
    span.forEach( function(itemSpan) {
        if(itemSpan.offsetWidth > 34) {
            itemSpan.style.fontSize = 10 + 'px';
        }
    });
}

const span2 = document.querySelectorAll('.watchlist-wrapper__section-days-cell > span');
  
if(span2) {
    span2.forEach( function(itemSpan) {
        if(itemSpan.offsetWidth > 34) {
            itemSpan.style.fontSize = 10 + 'px';
        }
    });
}

// Пагинация клик 
const clickColorPagination = document.querySelectorAll('.watchlist-wrapper__pagination-item');
if(clickColorPagination) {
    clickColorPagination.forEach(item =>{ 
        item.addEventListener('click', e =>{
        clickColorPagination.forEach( el => {
             el.classList.remove('active'); 
        });
        item.classList.add('active')
    });
});
}

// клик по якорям
const anchor = document.querySelectorAll('.watchlist-wrapper__list-anchor li a');

 if(anchor) {
    anchor.forEach(item =>{ 
        item.addEventListener('click', e =>{
        anchor.forEach( el => {
             el.classList.remove('active'); 
        });
        item.classList.add('active')
    });
});
}



