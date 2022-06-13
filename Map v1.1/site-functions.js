jQuery(document).ready(function() {

/*LOAD MAP POSITION*/
  $("#grid").css("margin-left", "0px");
  $("#map").scrollTop(0);
  $("#map").scrollLeft(0);
  $('input:checkbox').prop('checked', false);
/*Once everything is loaded, it fades in*/

  jQuery('#menu').change(function() {
    if ($(this).prop('checked')) {
        $("#sidebar").css("visibility", "visible");
        $("#map-controls").css("margin-left", "29.9%");
    }
    else {
      $("#sidebar").css("visibility", "hidden");
      $("#map-controls").css("margin-left", "0%");
    }
  });

/*NAVIGATION*/
  $('#about').click(function() {
    $("#welcome").css("visibility", "visible");
    $("#update-log").css("visibility", "hidden");
  });

  $('#updates').click(function() {
    $("#update-log").css("visibility", "visible");
    $("#welcome").css("visibility", "hidden");
  });

/*ZOOM FUNCTIONALITY*/
  var zoomIn = 25;
  var zoomOut = -25;
  var zoomValue = 0;

  var map = document.getElementById("#map");

  showValue.innerHTML = "15%";

  $("#zoom-in").on("click", function () {
    if (zoomValue == 0) {
      zoomValue = 0 + 25;
      showValue.innerHTML = zoomValue + "%";
    } else if (zoomValue == 25) {
      zoomValue = 25 + 25;
      showValue.innerHTML = zoomValue + "%";
    } else if (zoomValue == 50) {
      zoomValue = 50 + 25;
      showValue.innerHTML = zoomValue + "%";
    } else if (zoomValue == 75) {
      zoomValue = 75 + 25;
      showValue.innerHTML = zoomValue + "%";
    };
  });

  $("#zoom-out").on("click", function () {
    if (zoomValue == 25) {
      zoomValue = 25 - 25;
      showValue.innerHTML = "15%";
    } else if (zoomValue == 50) {
      zoomValue = 50 - 25;
      showValue.innerHTML = zoomValue + "%";
    } else if (zoomValue == 75) {
      zoomValue = 75 - 25;
      showValue.innerHTML = zoomValue + "%";
    } else if (zoomValue == 100) {
      zoomValue = 100 - 25;
      showValue.innerHTML = zoomValue + "%";
    } else if (zoomValue == 0) {
      zoomValue = 25 - 25;
    };
  });

  setInterval(function() {

    if (zoomValue == 0) {
        $("#map-ol").css("transform", "scale(.15)");
        $("#grid").css("transform", "scale(.15)");

        $(".shrine-icons").css("background-size", "110px");
        $(".tower-icons").css("background-size", "110px");
        $(".shrine-icons").css("height", "120px");
        $(".shrine-icons").css("width", "550%");
        $(".tower-icons").css("height", "150px");
        $(".icon-title").css("transform", "scale(2.5)");
        $(".icon-title").css("top", "47%");
        $(".icon-title").css("left", "180%");
    };

    if (zoomValue == 25) {
        $("#map-ol").css("transform", "scale(.25)");
        $("#grid").css("transform", "scale(.25)");

        $(".shrine-icons").css("background-size", "80px");
        $(".tower-icons").css("background-size", "80px");
        $(".shrine-icons").css("height", "80px");
        $(".tower-icons").css("height", "110px");
        $(".icon-title").css("transform", "scale(2)");
        $(".icon-title").css("left", "140%");
        $(".icon-title").css("top", "42%");
    };

    if (zoomValue == 50) {
        $("#map-ol").css("transform", "scale(.5)");
        $("#grid").css("transform", "scale(.5)");

        $(".shrine-icons").css("background-size", "50px");
        $(".tower-icons").css("background-size", "50px");
        $(".icon-title").css("transform", "scale(1.5)");
        $(".icon-title").css("left", "105%");
        $(".icon-title").css("top", "41%");
    };

    if (zoomValue == 75) {
        $("#map-ol").css("transform", "scale(.75)");
        $("#grid").css("transform", "scale(.75)");

        $(".shrine-icons").css("background-size", "35px");
        $(".tower-icons").css("background-size", "35px");
        $(".icon-title").css("transform", "scale(1.2)");
        $(".icon-title").css("left", "80%");
        $(".icon-title").css("top", "39%");
    };

    if (zoomValue == 100) {
        $("#map-ol").css("transform", "scale(1.0)");
        $("#grid").css("transform", "scale(1.0)");
        
        $(".shrine-icons").css("background-size", "20px");
        $(".tower-icons").css("background-size", "20px");
        $(".icon-title").css("transform", "scale(1)");
        $(".icon-title").css("bottom", "35%");
        $(".icon-title").css("left", "60%");
    };

  }, 100);

/*TUTORIAL CONSTANTS*/
  $('.close-tut').click(function() {
    $(".tutorials").css("visibility", "hidden");
    $("#welcome").css("visibility", "hidden");
    $("#update-log").css("visibility", "hidden");
    $(".shrines input").prop("checked", false);
    $(".towers input").prop("checked", false);
  });

/*INTERNAL USE*/
});

