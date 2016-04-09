jQuery(function($) {
  var $bodyEl = $('body'),
      $sidedrawerEl = $('#sidedrawer');
      $header = $('#header');
      $content_wrapper = $('#content-wrapper');
      $footer = $('#footer');
      $textToHide = $('.answers').map(function() {return $(this).html().substring(100);});
      $visibleText = $('.answers').map(function() {return $(this).html().substring(0, 100);});
      $dots = $('.dots').map(function() {return $(this) ;});


  // ==========================================================================
  // Toggle Answers
  // ==========================================================================
      $('.answers').each(function(i){
        $(this).html($visibleText[i] + ('<span class="hide">' + $textToHide[i] + '</span>'));
      });
          
      $('.read-more').each(function(i){
          var val = $('span.hide').map(function() {return $(this) ;});
        $(this).click(function() {
            
            console.log(val[0]);
            val[i].toggle();
            $dots[i].toggle();

           });
         });


      $('.answers span').hide();
  
  
  // ==========================================================================
  // Toggle Sidedrawer
  // ==========================================================================
  function showSidedrawer() {
    // show overlay
    var options = {
      onclose: function() {
        $sidedrawerEl
          .removeClass('active')
          .appendTo(document.body);
        $header.removeClass('active').appendTo(document.body);
        $content_wrapper.removeClass('active').appendTo(document.body);
        $footer.removeClass('active').appendTo(document.body);
      }
    };
    
    var $overlayEl = $(mui.overlay('on', options));
    
    // show element
    $sidedrawerEl.appendTo($overlayEl);
    setTimeout(function() {
      $sidedrawerEl.addClass('active');
    }, 20);
    $header.addClass('active');
    $content_wrapper.addClass('active');
    $footer.addClass('active');
  }
  
  
  function hideSidedrawer() {
    $bodyEl.toggleClass('hide-sidedrawer');
  }
  
  
  $('.js-show-sidedrawer').on('click', showSidedrawer);
  $('.js-hide-sidedrawer').on('click', hideSidedrawer);
  
  
  // ==========================================================================
  // Animate menu
  // ==========================================================================
  var $titleEls = $('strong', $sidedrawerEl);
  
  $titleEls
    .next()
    .hide();
  
  $titleEls.on('click', function() {
    $(this).next().slideToggle(200);
  });

  var offset = 250;
  var duration = 300;
  $('.back-to-top').hide();
   
  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
    $('.back-to-top').fadeIn(duration);
    } else {
    $('.back-to-top').fadeOut(duration);
    }
  });
          
  $('.back-to-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, duration);
    return false;
  });

});