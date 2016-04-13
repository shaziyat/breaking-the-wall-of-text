jQuery(function($) {
  var $bodyEl = $('body'),
      $sidedrawerEl = $('#sidedrawer');
      $header = $('#header');
      $content_wrapper = $('#content-wrapper');
      $footer = $('#footer');
      $textToHide = $('.answers').map(function() {return $(this).html().substring(100);});
      $visibleText = $('.answers').map(function() {return $(this).html().substring(0, 100);});
      $dots = $('.dots').map(function() {return $(this) ;});
      $state = true;
      

      
  // ==========================================================================
  // Toggle Answers
  // ==========================================================================
      $('.answers').each(function(i){
        $(this).html($visibleText[i] + ('<span class="hide">' + $textToHide[i] + '</span>'));

      });
          
      $('.read-more').each(function(i){
          var val = $('span.hide').map(function() {return $(this) ;});
          var carret = $(".mui-caret.qs-caret").map(function() {return $(this) ;});
          var state_ind = [];
          var j;
          for(j=0; j< val.length; j++){
            state_ind[j] = true;
          }
          $(this).click(function() {
              
              if(state_ind[i]){
                  carret[i].css("transform","rotate(-180deg)");
              }
              else{
                carret[i].css("transform","rotate(0deg)");
              }
              val[i].toggle();
              $dots[i].toggle();
              state_ind[i] = ! state_ind[i];

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
  $('.toggle').hide();
   
  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
    $('.back-to-top').fadeIn(duration);
    $('.toggle').fadeIn(duration);
    } else {
    $('.back-to-top').fadeOut(duration);
    $('.toggle').fadeOut(duration);
    }
  });
          
  $('.back-to-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, duration);
    return false;
  });

  $('.toggle').click(function(event) {
     event.preventDefault();
     var val = $('span.hide').map(function() {return $(this) ;});
     var carret = $(".mui-caret.qs-caret").map(function() {return $(this) ;});
     var btncaret = $(".mui-caret.btn-caret");
      if($state){
        btncaret.css("transform","rotate(-180deg)");
      }
      else{
        btncaret.css("transform","rotate(0deg)");
      }
      $('.read-more').each(function(i){
         if($state){
                carret[i].css("transform","rotate(-180deg)");
            }
            else{
              carret[i].css("transform","rotate(0deg)");
            }
      
      val[i].toggle();
      $dots[i].toggle();
      });
         $state = ! $state; 
    return false;
  });

});