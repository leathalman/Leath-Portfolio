import $ from "jquery";

$(window).scroll(function () {
  $("#bgcontainer").each(function () {
    var topOfWindow = $(window).scrollTop(),
      bottomOfWindow = topOfWindow + $(window).height();

    var boxPos = 1900;

    if (boxPos <= bottomOfWindow - 100 && boxPos >= topOfWindow) {
      $("#bgcontainer").css("background-color", "#41658a");
      document.getElementById("projects").style.color = "#ffffff";
    } else {
      $("#bgcontainer").css("background-color", "#F2F2F2");
      document.getElementById("projects").style.color = "#444444";
    }
  });
});
