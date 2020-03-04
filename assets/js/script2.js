$(document).ready(function() {
  function createDropdown2() {
    var drop1 = $("#customDropdown2");
    var i;
    if ($(".transpButt2Text").text() === "RU") {
      var htmlString2 = '<div id="dropContainer2">';
      htmlString2 += '<div class="dropOption2 dropOption3">EN</div>';
      htmlString2 += '<div class="dropOption2 dropOption4">DE</div>';
      htmlString2 += '<div class="dropOption2 dropOption5">FR</div>';
      htmlString2 += "</div>";
      $(".transpButt2").append(htmlString2);
    } else if ($(".transpButt2Text").text() === "EN") {
      var htmlString2 = '<div id="dropContainer2">';
      htmlString2 += '<div class="dropOption2 dropOption3">RU</div>';
      htmlString2 += '<div class="dropOption2 dropOption4">FR</div>';
      htmlString2 += '<div class="dropOption2 dropOption5">DE</div>';
      htmlString2 += "</div>";
      $(".transpButt2").append(htmlString2);
    } else if ($(".transpButt2Text").text() === "DE") {
      var htmlString2 = '<div id="dropContainer2">';
      htmlString2 += '<div class="dropOption2 dropOption3">RU</div>';
      htmlString2 += '<div class="dropOption2 dropOption4">EN</div>';
      htmlString2 += '<div class="dropOption2 dropOption5">FR</div>';
      htmlString2 += "</div>";
      $(".transpButt2").append(htmlString2);
    } else if ($(".transpButt2Text").text() === "FR") {
      var htmlString2 = '<div id="dropContainer2">';
      htmlString2 += '<div class="dropOption2 dropOption3">RU</div>';
      htmlString2 += '<div class="dropOption2 dropOption4">EN</div>';
      htmlString2 += '<div class="dropOption2 dropOption5">DE</div>';
      htmlString2 += "</div>";
      $(".transpButt2").append(htmlString2);
    }
  }
  createDropdown2();
});

$("#customDropdown2").on("click", function(event) {
  var container = $("#dropContainer2");
  var drop = $("#customDropdown2");
  var target = $(event.target);
  var arrow = $(".arrowDown2");

  if (
    target.hasClass("valueHolder2") ||
    target.attr("id") === "customDropdown2"
  ) {
    container.show();
  } else if (target.hasClass("dropOption2")) {
    container.find("span.valueHolder2").append(arrow);
    drop.find("span.valueHolder2").text(target.text());
    drop.find("span.valueHolder2").addClass("valueHolder3");
    container.hide();
  }
});
$(".dropOption3").on("click", function() {
  if ($(".transpButt2Text").text() === "RU") {
    if ($(".dropOption3").text() === "DE") {
      $(".dropOption3").text("RU");
      $(".dropOption4").text("EN");
      $(".dropOption5").text("FR");
    }
    if ($(".dropOption3").text() === "EN") {
      $(".dropOption3").text("RU");
      $(".dropOption4").text("DE");
      $(".dropOption5").text("FR");
    }
    if ($(".dropOption3").text() === "FR") {
      $(".dropOption3").text("RU");
      $(".dropOption4").text("EN");
      $(".dropOption5").text("DE");
    }
  }
});

$(".dropOption4").on("click", function() {
  if ($(".transpButt2Text").text() === "RU") {
    if ($(".dropOption4".text()) === "DE") {
      $(".dropOption3").text("RU");
      $(".dropOption4").text("EN");
      $(".dropOption5").text("FR");
    }
    if ($(".dropOption4").text() === "EN") {
      $(".dropOption3").text("RU");
      $(".dropOption4").text("DE");
      $(".dropOption5").text("FR");
    }
    if ($(".dropOption4").text() === "FR") {
      $(".dropOption3").text("RU");
      $(".dropOption4").text("EN");
      $(".dropOption5").text("DE");
    }
  }
});
