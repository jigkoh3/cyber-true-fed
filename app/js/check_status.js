   $(document).ready(function() {
  
  var animating = false,
      submitPhase1 = 1100,
      submitPhase2 = 400,
      logoutPhase1 = 800,
      $status = $(".status"),
      $app = $(".app");
  
  function ripple(elem, e) {
    $(".ripple").remove();
    var elTop = elem.offset().top,
        elLeft = elem.offset().left,
        x = e.pageX - elLeft,
        y = e.pageY - elTop;
    var $ripple = $("<div class='ripple'></div>");
    $ripple.css({top: y, left: x});
    elem.append($ripple);
  };
  
  $(document).on("click", ".check__status", function(e) {
    if (animating) return;
    animating = true;
    var that = this;
    ripple($(that), e);
    $(that).addClass("processing");
    setTimeout(function() {
      $(that).addClass("success");
      setTimeout(function() {
        $app.show();
        $app.css("top");
        $app.addClass("active");
      }, submitPhase2 - 70);
      setTimeout(function() {
        $status.hide();
        $status.addClass("inactive");
        animating = false;
        $(that).removeClass("success processing");
        $(that).addClass("check__status_after");
        $(that).text("คุณสามารถสมัครบริการได้");

        $(that).parent("li").parent("ul").children("li").children("select").prop( "disabled", false );
        $(that).parent("li").parent("ul").children("li").children(".btn-group").children(".btn").removeClass("disabled");
        $(that).parent("li").parent("ul").children("li").children(".btn-group").children(".dropdown-menu").children("ul").children("li").removeClass("disabled");
        $(that).parent("li").parent("ul").children("li").children(".btn").prop( "disabled", false );
       
        
        
        
      }, submitPhase2);
    }, submitPhase1);
  });
  
  $(document).on("click", ".app__logout", function(e) {
    if (animating) return;
    $(".ripple").remove();
    animating = true;
    var that = this;
    $(that).addClass("clicked");
    setTimeout(function() {
      $app.removeClass("active");
      $login.show();
      $login.css("top");
      $login.removeClass("inactive");
    }, logoutPhase1 - 120);
    setTimeout(function() {
      $app.hide();
      animating = false;
      $(that).removeClass("clicked");
    }, logoutPhase1);
  });
  
});