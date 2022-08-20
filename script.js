$(function() {
        //is-showクラスのつけ外しだけでモーダル表示非表示
        //アニメーションはcss側に記載しています
         $('#openModal,#sp-openModal').on('click',function() {
           $('#modalArea').toggleClass('is-show');
         });
         $('#closeModal').on('click',function() {
           $('#modalArea').toggleClass('is-show');
         });
         $('#modalBg').on('click',function() {
           $('#modalArea').toggleClass('is-show');
         });
    
        });
    
       /*header-background-color-effect*/
      // headerをスクロールすると、色が変わる
      jQuery(window).on('scroll', function () {
        if (jQuery('.header-inner').height() < jQuery(this).scrollTop()) {
          jQuery('header').addClass('js-header-color');
          jQuery('.-before').addClass('logo-hidden');/*logo change*/
          jQuery('.-after').removeClass('logo-hidden-after');
          jQuery('.js-header-text-color').addClass('js-text-color');
          jQuery('.js').addClass('header-navi-list_a');
          jQuery('.bar').addClass('js-bar-color');
        } else {
          jQuery('header').removeClass('js-header-color');
          jQuery('.-before').removeClass('logo-hidden');
          jQuery('.-after').addClass('logo-hidden-after');
          jQuery('.js-header-text-color').removeClass('js-text-color');
          jQuery('.js').removeClass('header-navi-list_a');
          jQuery('.bar').removeClass('js-bar-color');
        }
      });
    
    /**/

          /*hamburg*/
          $(function () {
            $('.burger-btn').click(function () {
            //toggleClassでclassをつけたり外したりする
              $('.burger-btn').toggleClass('close')
              $('.sp-nav-wrapper').fadeToggle(500);
              $('body').toggleClass('noscroll')
            })
            $('#sp-nav-list a[href]').on('click',function(event) {

             $('.burger-btn').trigger('click')
            }); 
          });

          /*tab*/
          $(function(){
             //ボタンのイベント//
              $(".tab_btn").click(function() {
                $(".newcontainer-right.tab_panel").toggle();
               });
              });