$(document).ready(function() {
  function createDropdown3() {
    var drop = $("#customDropdown3");
    var i;
    var htmlString3 = '<div id="dropContainer3">';
    htmlString3 += '<div class="dropOption3">01 Июнь 2019</div>';
    htmlString3 += '<div class="dropOption3">02 Июнь 2019</div>';
    htmlString3 += '<div class="dropOption3">03 Июнь 2019</div>';
    htmlString3 += '<div class="dropOption3">04 Июнь 2019</div>';
    htmlString3 += '<div class="dropOption3">05 Июнь 2019</div>';
    htmlString3 += '<div class="dropOption3">06 Июнь 2019</div>';
    htmlString3 += '<div class="dropOption3">07 Июнь 2019</div>';
    htmlString3 += '<div class="dropOption3">08 Июнь 2019</div>';
    htmlString3 += '<div class="dropOption3">09 Июнь 2019</div>';
    htmlString3 += '<div class="dropOption3">10 Июнь 2019</div>';
    htmlString3 += '<div class="dropOption3">11 Июнь 2019</div>';
    htmlString3 += '<div class="dropOption3">12 Июнь 2019</div>';
    htmlString3 += '<div class="dropOption3">13 Июнь 2019</div>';
    htmlString3 += '<div class="dropOption3">14 Июнь 2019</div>';
    htmlString3 += '<div class="dropOption3">15 Июнь 2019</div>';
    htmlString3 += '<div class="dropOption3">16 Июнь 2019</div>';
    htmlString3 += '<div class="dropOption3">17 Июнь 2019</div>';
    htmlString3 += '<div class="dropOption3">18 Июнь 2019</div>';
    htmlString3 += '<div class="dropOption3">19 Июнь 2019</div>';
    htmlString3 += '<div class="dropOption3">20 Июнь 2019</div>';
    htmlString3 += '<div class="dropOption3">21 Июнь 2019</div>';
    htmlString3 += '<div class="dropOption3">22 Июнь 2019</div>';
    htmlString3 += '<div class="dropOption3">23 Июнь 2019</div>';
    htmlString3 += '<div class="dropOption3">24 Июнь 2019</div>';
    htmlString3 += '<div class="dropOption3">25 Июнь 2019</div>';
    htmlString3 += '<div class="dropOption3">26 Июнь 2019</div>';
    htmlString3 += '<div class="dropOption3">27 Июнь 2019</div>';
    htmlString3 += '<div class="dropOption3">28 Июнь 2019</div>';
    htmlString3 += '<div class="dropOption3">29 Июнь 2019</div>';
    htmlString3 += '<div class="dropOption3">30 Июнь 2019</div>';
    htmlString3 += "</div>";
    drop.append(htmlString3);
  }

  createDropdown3();
});
$("#customDropdown3").on("click", function(event) {
  var container = $("#dropContainer3");
  var drop = $("#customDropdown3");
  var target = $(event.target);
  var arrow = $(".arrowDown3");

  if (
    target.hasClass("valueHolder4") ||
    target.attr("id") === "customDropdown3"
  ) {
    container.show();
  } else if (target.hasClass("dropOption3")) {
    container.find("span.valueHolder4").append(arrow);
    drop.find("span.valueHolder4").text(target.text());
    container.hide();
  }
});
