jQuery(function($) {
  var $bodyEl = $('body'),
      $sidedrawerEl = $('#sidedrawer');
      $header = $('#header');
      $content_wrapper = $('#content-wrapper');
  
  
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
});