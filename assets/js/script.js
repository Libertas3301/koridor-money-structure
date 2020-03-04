$(document).ready(function() {
  function createDropdown() {
    var drop = $("#customDropdown");
    var i;
    var htmlString = '<div id="dropContainer">';
    htmlString += '<div class="dropOption">Июль</div>';
    htmlString += '<div class="dropOption">Август</div>';
    htmlString += '<div class="dropOption">Сентябрь</div>';
    htmlString += '<div class="dropOption">Октябрь</div>';
    htmlString += '<div class="dropOption">Ноябрь</div>';
    htmlString += '<div class="dropOption">Декабрь</div>';
    htmlString += '<div class="dropOption">Январь</div>';
    htmlString += '<div class="dropOption">Февраль</div>';
    htmlString += '<div class="dropOption">Март</div>';
    htmlString += '<div class="dropOption">Апрель</div>';
    htmlString += '<div class="dropOption">Май</div>';
    htmlString += '<div class="dropOption">Июнь</div>';
    htmlString += "</div>";
    drop.append(htmlString);
  }

  createDropdown();
});

$("#customDropdown").on("click", function(event) {
  var container = $("#dropContainer");
  var drop = $("#customDropdown");
  var target = $(event.target);
  var firstImg = $("#firstImg");
  var firstText = $("#firstText");
  var secImg = $("#secImg");

  if (
    target.hasClass("valueHolder") ||
    target.attr("id") === "customDropdown"
  ) {
    container.show();
  } else if (target.hasClass("dropOption")) {
    drop.find("span.valueHolder").text(target.text());
    if (target.text().length <= 5) {
      drop.find("span.valueHolder").addClass("littleValue");
      firstImg.addClass("thirdValueImg");
      secImg.addClass("secValueArrow");
      secImg.removeClass("arrowDown");
    } else {
      drop.find("span.valueHolder").addClass("defaultValue");
      firstImg.removeClass("thirdValueImg");
      firstImg.removeClass("defaultImage");
      firstImg.addClass("secValueImg");
      secImg.removeClass("secValueArrow");
      secImg.removeClass("arrowDown");
      secImg.addClass("thirdValueArrow");
    }
    drop.find("span.valueHolder").append(firstImg);
    drop.find("span.valueHolder").append(secImg);
    container.hide();
  }
});

$(function() {
  $(".calendarNumber").each(function(i, obj) {
    $(this).on("click", function(event) {
      $(".calendarNumber.active").removeClass("active");
      $(this).addClass("active");
      $(".calendarImg2").css({
        top: " -78px"
      });
      $(".calendarImg1").css({
        top: " -27.5px"
      });
      $(".ball1").css({
        top: " -110px"
      });
      $(".ball2").css({
        top: " -110px"
      });
      $(".calendarLine").css({
        top: "-53px"
      });
    });
  });
});

$(".calendarImg1").hover(
  function() {
    $("#calendarball1").addClass("ball1Hover");
  },
  function() {
    $("#calendarball1").removeClass("ball1Hover");
  }
);

$(".calendarImg2").hover(
  function() {
    $("#calendarball2").addClass("ball2Hover");
  },
  function() {
    $("#calendarball2").removeClass("ball2Hover");
  }
);

$(".terminologyImg1").hover(
  function() {
    $("#termHover1").addClass("ball1Hover");
    $(".terminologyBlock3").css("top", "52px");
  },
  function() {
    $("#termHover1").removeClass("ball1Hover");
    $(".terminologyBlock3").css("top", "82px");
  }
);

$(".terminologyImg2").hover(
  function() {
    $("#termHover2").addClass("ball2Hover");
    $(".terminologyBlock3").css("top", "52px");
  },
  function() {
    $("#termHover2").removeClass("ball2Hover");
    $(".terminologyBlock3").css("top", "82px");
  }
);

$(".countryImg2").hover(
  function() {
    $("#countryHover1").addClass("ball1Hover");
    $(".listOfCountriesBlock3").attr("id", "listOfCountriesBlock3");
  },
  function() {
    $("#countryHover1").removeClass("ball1Hover");
    $(".listOfCountriesBlock3").removeAttr("id", "listOfCountriesBlock3");
  }
);

$(".countryImg1").hover(
  function() {
    $("#countryHover2").addClass("ball2Hover");
    $(".countryBall2").css("top", "30px");
    $(".listOfCountriesBlock3").attr("id", "listOfCountriesBlock3");
  },
  function() {
    $("#countryHover2").removeClass("ball2Hover");
    $(".countryBall2").css("top", "0");
    $(".listOfCountriesBlock3").removeAttr("id", "listOfCountriesBlock3");
  }
);

$(function() {
  var counter1 = 0;
  $(".calendarImg2").on("click", function(event) {
    if (counter1 == 0) {
      $(".ctx1").text("10");
      $(".ctx2").text("вс");
      $(".ctx3").text("11");
      $(".ctx4").text("пн");
      $(".ctx5").text("12");
      $(".ctx6").text("вт");
      $(".ctx7").text("13");
      $(".ctx8").text("ср");
      $(".ctx9").text("14");
      $(".ctx10").text("чт");
      $(".ctx11").text("15");
      $(".ctx12").text("пт");
      $(".ctx13").text("16");
      $(".ctx14").text("сб");
      $(".ctx15").text("17");
      $(".ctx16").text("вс");
      $(".ctx17").text("18");
      $(".ctx18").text("пн");
      counter1++;
    } else if (counter1 == 1) {
      $(".ctx1").text("19");
      $(".ctx2").text("вт");
      $(".ctx3").text("20");
      $(".ctx4").text("ср");
      $(".ctx5").text("21");
      $(".ctx6").text("чт");
      $(".ctx7").text("22");
      $(".ctx8").text("пт");
      $(".ctx9").text("23");
      $(".ctx10").text("сб");
      $(".ctx11").text("24");
      $(".ctx12").text("вс");
      $(".ctx13").text("25");
      $(".ctx14").text("пн");
      $(".ctx15").text("26");
      $(".ctx16").text("вт");
      $(".ctx17").text("27");
      $(".ctx18").text("ср");
      counter1++;
    } else if (counter1 == 2) {
      $(".ctx1").text("28");
      $(".ctx2").text("чт");
      $(".ctx3").text("29");
      $(".ctx4").text("пт");
      $(".ctx5").text("30");
      $(".ctx6").text("сб");
      $(".ctx7").text("31");
      $(".ctx8").text("вс");
      $(".ctx9").text("  ");
      $(".ctx10").text("  ");
      $(".ctx11").text("  ");
      $(".ctx12").text("  ");
      $(".ctx13").text("  ");
      $(".ctx14").text("  ");
      $(".ctx15").text("  ");
      $(".ctx16").text("  ");
      $(".ctx17").text("  ");
      $(".ctx18").text("  ");
      $(".active").css({
        borderBottom: "none"
      });
      $(".calendarNumber").css({
        top: "-30px"
      });
      $(".calendarImg2").css({
        top: " -105px"
      });
      $(".calendarImg1").css({
        top: "-54px",
        left: "63.5%"
      });
      $(".calendarLine").css({
        top: " -82px"
      });
      $(".ball1").css({
        top: " -137px"
      });
      $(".ball2").css({
        top: " -137px"
      });
      counter1++;
      $(".calendarNumber").each(function(i, obj) {
        $(this).on("click", function(event) {
          $(".calendarNumber").css({
            top: "-30px"
          });
          $(".calendarImg2").css({
            top: " -109px"
          });
          $(".calendarImg1").css({
            top: " -27px"
          });
          $(".calendarLine").css({
            top: " -84px"
          });
          $(".ball1").css({
            top: " -137px"
          });
          $(".ball2").css({
            top: " -137px"
          });
        });
      });
    }
  });
  var counter1;
  $(".calendarImg1").on("click", function(event) {
    if (counter1 == 3) {
      $(".ctx1").text("19");
      $(".ctx2").text("вт");
      $(".ctx3").text("20");
      $(".ctx4").text("ср");
      $(".ctx5").text("21");
      $(".ctx6").text("чт");
      $(".ctx7").text("22");
      $(".ctx8").text("пт");
      $(".ctx9").text("23");
      $(".ctx10").text("сб");
      $(".ctx11").text("24");
      $(".ctx12").text("вс");
      $(".ctx13").text("25");
      $(".ctx14").text("пн");
      $(".ctx15").text("26");
      $(".ctx16").text("вт");
      $(".ctx17").text("27");
      $(".ctx18").text("ср");
      console.log(counter1);
      $(".calendarNumber").css({
        top: "-3px"
      });
      $(".calendarImg2").css({
        top: " -79px"
      });
      $(".calendarImg1").css({
        top: " -27px"
      });
      $(".calendarLine").css({
        top: " -54px"
      });
      $(".ball1").css({
        top: " -110px"
      });
      $(".ball2").css({
        top: " -110px"
      });
      counter1--;
    } else if (counter1 == 2) {
      $(".ctx1").text("10");
      $(".ctx2").text("вс");
      $(".ctx3").text("11");
      $(".ctx4").text("пн");
      $(".ctx5").text("12");
      $(".ctx6").text("вт");
      $(".ctx7").text("13");
      $(".ctx8").text("ср");
      $(".ctx9").text("14");
      $(".ctx10").text("чт");
      $(".ctx11").text("15");
      $(".ctx12").text("пт");
      $(".ctx13").text("16");
      $(".ctx14").text("сб");
      $(".ctx15").text("17");
      $(".ctx16").text("вс");
      $(".ctx17").text("18");
      $(".ctx18").text("пн");
      counter1--;
    } else if (counter1 == 1) {
      $(".ctx1").text("01");
      $(".ctx2").text("пт");
      $(".ctx3").text("02");
      $(".ctx4").text("сб");
      $(".ctx5").text("03");
      $(".ctx6").text("вс");
      $(".ctx7").text("04");
      $(".ctx8").text("пн");
      $(".ctx9").text("05");
      $(".ctx10").text("вт");
      $(".ctx11").text("06");
      $(".ctx12").text("ср");
      $(".ctx13").text("07");
      $(".ctx14").text("чт");
      $(".ctx15").text("08");
      $(".ctx16").text("пт");
      $(".ctx17").text("09");
      $(".ctx18").text("сб");
      counter1 = 0;
    }
  });
});

// Then curency became lower
$(document).ready(function() {
  if ($(".CompText1").text() > $(".CompText2").text()) {
    $("#calendar2Img2").attr("src", "assets/img/arrow_down2.png");
    $(".CompText2").css({
      color: "#ff9933"
    });
  }
});

$(function() {
  $(".percentBlock1").each(function(i, obj) {
    $(".hoverBlock1").on("mouseenter mouseleave", function(event) {
      $(".calendar2Line").removeClass("calendar2Active");
      $(".calendar2ImgFirst1Id").attr("src", "assets/img/clock.png");
      $(".calendar2Img2").css("display", "block");
      $(".calendar2Text1").css("color", "#0C128F");
      $(".calendar2Text1").css("top", "-144px");
      $(".calendar2Text2").css("color", "#18c310");
      $(".calendar2Text2").css("left", "32px");
      $(".calendar2Text2Third").css("left", "-4px");
      $(".calendar2Text2SecVal").css("left", "1px");
      $(".calendar2Text3").css("color", "black");
      $(".hoverBlock6 > .calendar2Text1").css("borderColor", "#0C128F");

      $(".hoverBlock1 > .calendar2Line").addClass("calendar2Active");
      $(".hoverBlock1 > .calendar2Img1 > .calendar2ImgFirst1Id").attr(
        "src",
        "assets/img/clock2.png"
      );
      $(".hoverBlock1 > .calendar2Img2").css("display", "none");
      $(".hoverBlock1 > .calendar2Text1").css("color", "white");
      $(".hoverBlock1 > .calendar2Text1").css("top", "-133px");
      $(".hoverBlock1 > .calendar2Text2").css("color", "white");
      $(".hoverBlock1 > .calendar2Text2").css("left", "5px");
      $(".hoverBlock1 > .calendar2Text3").css("color", "white");
    });

    $(".hoverBlock2").on("mouseenter mouseleave", function(event) {
      $(".calendar2Line").removeClass("calendar2Active");
      $(".calendar2ImgFirst1Id").attr("src", "assets/img/clock.png");
      $(".calendar2Img2").css("display", "block");
      $(".calendar2Text1").css("color", "#0C128F");
      $(".calendar2Text1").css("top", "-144px");
      $(".calendar2Text2").css("color", "#18c310");
      $(".calendar2Text2").css("left", "32px");
      $(".calendar2Text2Third").css("left", "-4px");
      $(".calendar2Text2SecVal").css("left", "1px");
      $(".calendar2Text3").css("color", "black");
      $(".hoverBlock6 > .calendar2Text1").css("borderColor", "#0C128F");

      $(".hoverBlock2 > .calendar2Line").addClass("calendar2Active");
      $(".hoverBlock2 > .calendar2Img1 > .calendar2ImgFirst1Id").attr(
        "src",
        "assets/img/clock2.png"
      );
      $(".hoverBlock2 > .calendar2Img2").css("display", "none");
      $(".hoverBlock2 > .calendar2Text1").css("color", "white");
      $(".hoverBlock2 > .calendar2Text1").css("top", "-131px");
      $(".hoverBlock2 > .calendar2Text2").css("color", "white");
      $(".hoverBlock2 > .calendar2Text2").css("left", "5px");
      $(".hoverBlock2 > .calendar2Text3").css("color", "white");
    });

    $(".hoverBlock3").on("mouseenter mouseleave", function(event) {
      $(".calendar2Line").removeClass("calendar2Active");
      $(".calendar2ImgFirst1Id").attr("src", "assets/img/clock.png");
      $(".calendar2Img2").css("display", "block");
      $(".calendar2Text1").css("color", "#0C128F");
      $(".calendar2Text1").css("top", "-144px");
      $(".calendar2Text2").css("color", "#18c310");
      $(".calendar2Text2").css("left", "32px");
      $(".calendar2Text2Third").css("left", "-4px");
      $(".calendar2Text2SecVal").css("left", "1px");
      $(".calendar2Text3").css("color", "black");
      $(".hoverBlock6 > .calendar2Text1").css("borderColor", "#0C128F");

      $(".hoverBlock3 > .calendar2Line").addClass("calendar2Active");
      $(".hoverBlock3 > .calendar2Img1 > .calendar2ImgFirst1Id").attr(
        "src",
        "assets/img/clock2.png"
      );
      $(".hoverBlock3 > .calendar2Img2").css("display", "none");
      $(".hoverBlock3 > .calendar2Text1").css("color", "white");
      $(".hoverBlock3 > .calendar2Text1").css("top", "-131px");
      $(".hoverBlock3 > .calendar2Text2").css("color", "white");
      $(".hoverBlock3 > .calendar2Text2").css("left", "5px");
      $(".hoverBlock3 > .calendar2Text3").css("color", "white");
    });

    $(".hoverBlock4").on("mouseenter mouseleave", function(event) {
      $(".calendar2Line").removeClass("calendar2Active");
      $(".calendar2ImgFirst1Id").attr("src", "assets/img/clock.png");
      $(".calendar2Img2").css("display", "block");
      $(".calendar2Text1").css("color", "#0C128F");
      $(".calendar2Text1").css("top", "-144px");
      $(".calendar2Text2").css("color", "#18c310");
      $(".calendar2Text2").css("left", "32px");
      $(".calendar2Text2Third").css("left", "-4px");
      $(".calendar2Text2SecVal").css("left", "1px");
      $(".calendar2Text3").css("color", "black");
      $(".hoverBlock6 > .calendar2Text1").css("borderColor", "#0C128F");

      $(".hoverBlock4 > .calendar2Line").addClass("calendar2Active");
      $(".hoverBlock4 > .calendar2Img1 > .calendar2ImgFirst1Id").attr(
        "src",
        "assets/img/clock2.png"
      );
      $(".hoverBlock4 > .calendar2Img2").css("display", "none");
      $(".hoverBlock4 > .calendar2Text1").css("color", "white");
      $(".hoverBlock4 > .calendar2Text1").css("top", "-131px");
      $(".hoverBlock4 > .calendar2Text2").css("color", "white");
      $(".hoverBlock4 > .calendar2Text2").css("left", "5px");
      $(".hoverBlock4 > .calendar2Text3").css("color", "white");
    });

    $(".hoverBlock5").on("mouseenter mouseleave", function(event) {
      $(".calendar2Line").removeClass("calendar2Active");
      $(".calendar2ImgFirst1Id").attr("src", "assets/img/clock.png");
      $(".calendar2Img2").css("display", "block");
      $(".calendar2Text1").css("color", "#0C128F");
      $(".calendar2Text1").css("top", "-144px");
      $(".calendar2Text2").css("color", "#18c310");
      $(".calendar2Text2").css("left", "32px");
      $(".calendar2Text2Third").css("left", "-4px");
      $(".calendar2Text2SecVal").css("left", "1px");
      $(".calendar2Text3").css("color", "black");
      $(".hoverBlock6 > .calendar2Text1").css("borderColor", "#0C128F");

      $(".hoverBlock5 > .calendar2Line").addClass("calendar2Active");
      $(".hoverBlock5 > .calendar2Img1 > .calendar2ImgFirst1Id").attr(
        "src",
        "assets/img/clock2.png"
      );
      $(".hoverBlock5 > .calendar2Img2").css("display", "none");
      $(".hoverBlock5 > .calendar2Text1").css("color", "white");
      $(".hoverBlock5 > .calendar2Text1").css("top", "-148px");
      $(".hoverBlock5 > .calendar2Text2").css("color", "white");
      $(".hoverBlock5 > .calendar2Text2").css("left", "5px");
      $(".hoverBlock5 > .calendar2Text3").css("color", "white");
      $(".hoverBlock5 > .calendar2Active").css("top", "0");
    });

    $(".hoverBlock6").on("mouseenter mouseleave", function(event) {
      $(".calendar2Line").removeClass("calendar2Active");
      $(".calendar2ImgFirst1Id").attr("src", "assets/img/clock.png");
      $(".calendar2Img2").css("display", "block");
      $(".calendar2Text1").css("color", "#0C128F");
      $(".calendar2Text1").css("top", "-144px");
      $(".calendar2Text2").css("color", "#18c310");
      $(".calendar2Text2").css("left", "32px");
      $(".calendar2Text2Third").css("left", "-4px");
      $(".calendar2Text2SecVal").css("left", "1px");
      $(".calendar2Text3").css("color", "black");
      $(".hoverBlock6 > .calendar2Text1").css("borderColor", "#0C128F");

      $(".hoverBlock6 > .calendar2Line").addClass("calendar2Active");
      $(".hoverBlock6 > .calendar2Img1 > .calendar2ImgFirst1Id").attr(
        "src",
        "assets/img/clock2.png"
      );
      $(".hoverBlock6 > .calendar2Img2").css("display", "none");
      $(".hoverBlock6 > .calendar2Text1").css("color", "white");
      $(".hoverBlock6 > .calendar2Text1").css("borderColor", "white");
      $(".hoverBlock6 > .calendar2Text1").css("top", "-131px");
      $(".hoverBlock6 > .calendar2Text2").css("color", "white");
      $(".hoverBlock6 > .calendar2Text2").css("left", "5px");
      $(".hoverBlock6 > .calendar2Text3").css("color", "white");
      $(".hoverBlock6 > .calendar2Active").css("top", "0");
    });
  });
});

$(function() {
  $(".listOfCountriesText2").on("click", function() {
    $(".popupText1").css("display", "block");
    $(".popupText2").css("display", "block");
    $(".close").css("display", "block");
    $(".popupListOfBank").css("display", "block");
    $("html, body").animate(
      {
        scrollTop: "2407px"
      },
      "fast"
    );
    $("body").css("overflow-y", "hidden");
  });
});

$(function() {
  $(".close").on("click", function() {
    $(".popupText1").css("display", "none");
    $(".popupText2").css("display", "none");
    $(".close").css("display", "none");
    $(".popupListOfBank").css("display", "none");
    $("body").css("overflow-y", "scroll");
  });
});

$(function() {
  var k = 0;
  $(".avatarTextImg1").on("click", function() {
    k++;
    if (k === 1) {
      $(".MainBlock").hide();
      $(".popupHideBlock").css("display", "block");
      $(".avatarPopup").css("display", "block");
      $(".bigContainer").css("height", "721px");
    }
    if (k === 2) {
      $(".MainBlock").show();
      $(".popupHideBlock").css("display", "none");
      $(".avatarPopup").css("display", "none");
      $(".bigContainer").css("height", "auto");
      k = 0;
    }
  });
});

$(function() {
  $(".avatarPopupTextBlock1").on("mouseenter", function() {
    $(".popupImg2").css("display", "block");
    $(".avatarPopupTextBlock1").css({
      top: "10px",
      left: "17%"
    });
    $(".avatarPopupText4").css("left", "20px");
  });
  $(".avatarPopupTextBlock1").on("mouseleave", function() {
    $(".popupImg2").css("display", "none");
    $(".avatarPopupTextBlock1").css({
      top: "30px",
      left: "7%",
      position: "relative"
    });
  });
});

$(function() {
  $(".avatarPopupTextBlock2").on("mouseenter", function() {
    $(".popupImg3").css("display", "block");
    $(".avatarPopupTextBlock2").css({
      top: "10px",
      left: "17%"
    });
    $(".avatarPopupText5").css("left", "20px");
  });
  $(".avatarPopupTextBlock2").on("mouseleave", function() {
    $(".popupImg3").css("display", "none");
    $(".avatarPopupTextBlock2").css({
      top: "30px",
      left: "7%",
      position: "relative"
    });
  });
});

$(function() {
  $(".avatarPopupTextBlock3").on("mouseenter", function() {
    $(".popupImg4").css("display", "block");
    $(".avatarPopupTextBlock3").css({
      top: "15px",
      left: "17%"
    });
    $(".avatarPopupText6").css("left", "20px");
  });
  $(".avatarPopupTextBlock3").on("mouseleave", function() {
    $(".popupImg4").css("display", "none");
    $(".avatarPopupTextBlock3").css({
      top: "30px",
      left: "7%",
      position: "relative"
    });
  });
});

$(function() {
  $(".avatarPopupTextBlock4").on("mouseenter", function() {
    $(".popupImg5").css("display", "block");
    $(".avatarPopupTextBlock4").css({
      top: "10px",
      left: "17%"
    });
    $(".avatarPopupText7").css("left", "20px");
  });
  $(".avatarPopupTextBlock4").on("mouseleave", function() {
    $(".popupImg5").css("display", "none");
    $(".avatarPopupTextBlock4").css({
      top: "30px",
      left: "7%",
      position: "relative"
    });
  });
});

$(function() {
  $(".avatarPopupTextBlock5").on("mouseenter", function() {
    $(".popupImg6").css("display", "block");
    $(".avatarPopupTextBlock5").css({
      top: "10px",
      left: "17%"
    });
    $(".avatarPopupText8").css("left", "20px");
  });
  $(".avatarPopupTextBlock5").on("mouseleave", function() {
    $(".popupImg6").css("display", "none");
    $(".avatarPopupTextBlock5").css({
      top: "30px",
      left: "7%",
      position: "relative"
    });
  });
});

$(function() {
  $(".generalInfoContentNoMoneyButton1").on("click", function() {
    $(".generalInfoContentGreyNoMoney").show();
    $("body").css("overflow-y", "hidden");
    $("html, body").animate(
      {
        scrollTop: 0
      },
      "fast"
    );
  });
});

$(function() {
  $(".generalInfoContentMoneyBlock2Button").on("click", function() {
    $(".generalInfoContentGrey").show();
    $("body").css("overflow-y", "hidden");
    $("html, body").animate(
      {
        scrollTop: 0
      },
      "fast"
    );
  });
});

$(function() {
  $(".bankAccountBlockButton2").on("click", function() {
    $(".generalInfoContentGrey3").show();
    $("body").css("overflow-y", "hidden");
    $("html, body").animate(
      {
        scrollTop: 0
      },
      "fast"
    );
  });
});

$(function() {
  $(".bankAccountBlockButton1").on("click", function() {
    $(".generalInfoContentGrey2").show();
    $("body").css("overflow-y", "hidden");
    $("html, body").animate(
      {
        scrollTop: 0
      },
      "fast"
    );
    $(".contentGreyInput1").css("left", "10.5%");
  });
});

$(function() {
  $(".bankAccountBlockButton12").on("click", function() {
    $(".generalInfoContentGrey").show();
    $("body").css("overflow-y", "hidden");
    $("html, body").animate(
      {
        scrollTop: 0
      },
      "fast"
    );
    $(".contentGreyInput1").css("left", "10.5%");
  });
});

$(function() {
  $(".bankAccountClickBlockButton1").on("click", function() {
    $(".generalInfoContentGrey21").show();
    $("body").css("overflow-y", "hidden");
    $("html, body").animate(
      {
        scrollTop: 0
      },
      "fast"
    );
    $(".contentGreyInput1").css("left", "10.5%");
  });
});

$(function() {
  $(".bankAccountClickBlockButton2").on("click", function() {
    $(".generalInfoContentGrey13").show();
    $("body").css("overflow-y", "hidden");
    $("html, body").animate(
      {
        scrollTop: 0
      },
      "fast"
    );
    $(".contentGreyInput1").css("left", "10.5%");
  });
});

$(function() {
  $(".contentGreyImg1").on("click", function() {
    $("body").css("overflow-y", "scroll");
    $(".generalInfoContentGrey").hide();
    $(".generalInfoContentGrey2").hide();
    $(".generalInfoContentGreyNoMoney").hide();
    $(".generalInfoContentGrey3").hide();
    $(".generalInfoContentGrey5").hide();
    $(".generalInfoContentGrey21").hide();
    $(".generalInfoContentGrey31").hide();
  });
});

$(function() {
  $(".avatarText2").on("click", function() {
    window.location = "general_info.html";
    $(".generalInfoContentGrey").show();
    $("body").css("overflow-y", "hidden");
    $("html, body").animate(
      {
        scrollTop: 0
      },
      "fast"
    );
  });
});

$(function() {
  if ($(".avatarPopupText2").text().length === 0) {
    $(".avatarPopupText2").hide();
    $(".avatarPopupButton").show();
  } else if ($(".avatarPopupText2").text().length !== 0) {
    $(".avatarPopupText2").show();
    $(".avatarPopupButton").hide();
  }
});

$(function() {
  $(".avatarPopupText4").on("click", function() {
    if ($(".avatarPopupText2").text().length === 0) {
      $(".generalInfoContentNoMoney").show();
      $(".generalInfoContentMoney").hide();
      $(".bankAccountBlock").hide();
      $(".transactionContent").hide();
      $(".generalInfoContentNoMoneyImg").css("display", "none");
      $(".generalInfoContentNoMoneyText").css("display", "none");
      $(".generalInfoContentNoMoneyImg2").css("display", "none");
      $(".generalInfoContentNoMoneyButton1").css("top", "310px");
      $(".generalInfoContentNoMoney").css("border", "1px solid #cbd0e8");
      $(".generalInfoContentNoMoney").css("height", "460px");
      $(".transactionContentMoney").hide();
      $(".persInfoBlock").hide();
      $(".avatarPopup1Text2").text("Рабочий Стол");
      $(".referalProgramBlock2").hide();
      $(".referalProgramBlock").hide();
      $(".MainBlock").show();
      $(".popupHideBlock").css("display", "none");
      $(".avatarPopup").css("display", "none");
      $(".bigContainer").css("height", "auto");
      $(".transactionContentText1").hide();
      k = 0;
    } else if ($(".avatarPopupText2").text().length !== 0) {
      $(".generalInfoContentNoMoney").hide();
      $(".generalInfoContentMoney").show();
      $(".bankAccountBlock").hide();
      $(".transactionContent").hide();
      $(".generalInfoContentNoMoneyImg").css("display", "none");
      $(".generalInfoContentNoMoneyImg2").css("display", "none");
      $(".generalInfoContentNoMoneyText").css("display", "none");
      $(".generalInfoContentNoMoneyButton1").css("top", "310px");
      $(".transactionContentMoney").hide();
      $(".avatarPopup1Text2").text("Рабочий Стол");
      $(".persInfoBlock").hide();
      $(".referalProgramBlock2").hide();
      $(".referalProgramBlock").hide();
      $(".MainBlock").show();
      $(".popupHideBlock").css("display", "none");
      $(".avatarPopup").css("display", "none");
      $(".bigContainer").css("height", "auto");
      $(".transactionContentText1").hide();
      k = 0;
    }
  });
  $(".avatarPopupText5").on("click", function() {
    if ($(".avatarPopupText2").text().length === 0) {
      $(".generalInfoContentNoMoney").show();
      $(".generalInfoContentMoney").hide();
      $(".bankAccountBlock").hide();
      $(".generalInfoContentNoMoneyImg").css("display", "block");
      $(".generalInfoContentNoMoneyText").css("display", "block");
      $(".generalInfoContentNoMoneyImg2").css("display", "block");
      $(".generalInfoContentNoMoneyButton1").css("top", "270px");
      $(".generalInfoContentNoMoney").css("border", "1px solid #cbd0e8");
      $(".generalInfoContentNoMoney").css("height", "460px");
      $(".transactionContentMoney").hide();
      $(".transactionContent").hide();
      $(".avatarPopup1Text2").text("Мой счет");
      $(".persInfoBlock").hide();
      $(".referalProgramBlock").hide();
      $(".referalProgramBlock2").hide();
      $(".MainBlock").show();
      $(".popupHideBlock").css("display", "none");
      $(".avatarPopup").css("display", "none");
      $(".bigContainer").css("height", "auto");
      $(".transactionContentText1").hide();
      k = 0;
    } else if ($(".avatarPopupText2").text().length !== 0) {
      $(".generalInfoContentNoMoney").hide();
      $(".generalInfoContentNoMoney").hide();
      $(".generalInfoContentMoney").hide();
      $(".bankAccountBlock").show();
      $(".transactionContent").hide();
      $(".transactionContentMoney").hide();
      $(".avatarPopup1Text2").text("Мой счет");
      $(".persInfoBlock").hide();
      $(".referalProgramBlock2").hide();
      $(".referalProgramBlock").hide();
      $(".MainBlock").show();
      $(".popupHideBlock").css("display", "none");
      $(".avatarPopup").css("display", "none");
      $(".bigContainer").css("height", "auto");
      $(".transactionContentText1").hide();
      k = 0;
    }
  });
  $(".avatarPopupText6").on("click", function() {
    if ($(".avatarPopupText2").text().length === 0) {
      $(".generalInfoContentNoMoney").show();
      $(".generalInfoContentMoney").hide();
      $(".bankAccountBlock").hide();
      $(".generalInfoContentNoMoney").css("border", "none");
      $(".generalInfoContentNoMoney").css("height", "780px");
      $(".transactionContentMoney").hide();
      $(".generalInfoContentNoMoneyImg").css("display", "block");
      $(".generalInfoContentNoMoneyText").css("display", "block");
      $(".generalInfoContentNoMoneyImg2").css("display", "block");
      $(".generalInfoContentNoMoneyButton1").css("top", "456px");
      $(".transactionContent").show();
      $(".avatarPopup1Text2").text("Переводы");
      $(".persInfoBlock").hide();
      $(".referalProgramBlock2").hide();
      $(".MainBlock").show();
      $(".popupHideBlock").css("display", "none");
      $(".avatarPopup").css("display", "none");
      $(".bigContainer").css("height", "auto");
      k = 0;
      $(".referalProgramBlock").hide();
    } else if ($(".avatarPopupText2").text().length !== 0) {
      $(".generalInfoContentNoMoney").hide();
      $(".generalInfoContentNoMoney").hide();
      $(".generalInfoContentMoney").hide();
      $(".bankAccountBlock").hide();
      $(".transactionContentMoney").show();
      $(".avatarPopup1Text2").text("Переводы");
      $(".persInfoBlock").hide();
      $(".referalProgramBlock2").hide();
      $(".referalProgramBlock").hide();
      $(".MainBlock").show();
      $(".popupHideBlock").css("display", "none");
      $(".avatarPopup").css("display", "none");
      $(".bigContainer").css("height", "auto");
      $(".transactionContentText1").hide();
      k = 0;
    }
  });
  $(".avatarPopupText7").on("click", function() {
    $(".persInfoBlock").show();
    $(".generalInfoContentNoMoney").hide();
    $(".generalInfoContentMoney").hide();
    $(".bankAccountBlock").hide();
    $(".transactionContent").hide();
    $(".transactionContentMoney").hide();
    $(".avatarPopup1Text2").text("Личный данные");
    $(".referalProgramBlock2").hide();
    $(".referalProgramBlock").hide();
    $(".MainBlock").show();
    $(".popupHideBlock").css("display", "none");
    $(".avatarPopup").css("display", "none");
    $(".bigContainer").css("height", "auto");
    k = 0;
  });
  $(".avatarPopupText8").on("click", function() {
    $(".persInfoBlock").hide();
    $(".referalProgramBlock").show();
    $(".generalInfoContentNoMoney").hide();
    $(".generalInfoContentMoney").hide();
    $(".bankAccountBlock").hide();
    $(".transactionContent").hide();
    $(".transactionContentMoney").hide();
    $(".avatarPopup1Text2").text("Реферальная программа");
    $(".referalProgramBlock2").show();
    $(".MainBlock").show();
    $(".popupHideBlock").css("display", "none");
    $(".avatarPopup").css("display", "none");
    $(".bigContainer").css("height", "auto");
    k = 0;
  });
});

$(function() {
  $(".bankAccountBlockText3").on("click", function() {
    $(".showMoreIncome").css("display", "block");
    $(".bankAccountBlockText3").css("display", "none");
    $(".yesterdayIncome").css("margin-bottom", "100px");
    $(".bankAccountBlock").css("height", "1200px");
  });
});

$(function() {
  $(".popup1Img2").hide();
  $(".popup1Img3").hide();
  $(".popup1Img4").hide();
  $(".popup1Img5").hide();
  $(".popup1Img6").hide();
  $(".generalInfoContentNoMoneyImg").css("display", "none");
  $(".generalInfoContentNoMoneyText").css("display", "none");
  $(".generalInfoContentNoMoneyButton1").css("top", "310px");
  $(".generalInfoContentNoMoney").hide();
  $(".generalInfoContentMoney").hide();
  $(".avatarPopup1 :nth-child(5)").on("click", function() {
    $(".avatarPopupText3").css({
      top: "32px",
      left: "7%"
    });
    $(".avatarPopup1 :nth-child(5)").css({
      position: "relative",
      top: "14px",
      left: "44px"
    });
    $(".avatarPopupText4").css({
      position: "relative",
      top: "-3px"
    });
    $(".popup1Img2").show();
    $(".popup1Img3").hide();
    $(".popup1Img4").hide();
    $(".popup1Img5").hide();
    $(".popup1Img6").hide();
  });
  $(".avatarPopup1 :nth-child(6)").on("click", function() {
    $(".avatarPopupText3").css({
      top: "32px",
      left: "7%"
    });
    $(".avatarPopup1 :nth-child(6)").css({
      position: "relative",
      top: "14px",
      left: "44px"
    });
    $(".avatarPopupText5").css({
      position: "relative",
      top: "-3px"
    });
    $(".popup1Img2").hide();
    $(".popup1Img3").show();
    $(".popup1Img4").hide();
    $(".popup1Img5").hide();
    $(".popup1Img6").hide();
  });
  $(".avatarPopup1 :nth-child(7)").on("click", function() {
    $(".avatarPopupText3").css({
      top: "32px",
      left: "7%"
    });
    $(".avatarPopup1 :nth-child(7)").css({
      position: "relative",
      top: "14px",
      left: "44px"
    });
    $(".avatarPopupText6").css({
      position: "relative",
      top: "-3px"
    });
    $(".popup1Img2").hide();
    $(".popup1Img3").hide();
    $(".popup1Img4").show();
    $(".popup1Img5").hide();
    $(".popup1Img6").hide();
  });
  $(".avatarPopup1 :nth-child(8)").on("click", function() {
    $(".avatarPopupText3").css({
      top: "32px",
      left: "7%"
    });
    $(".avatarPopup1 :nth-child(8)").css({
      position: "relative",
      top: "14px",
      left: "44px"
    });
    $(".avatarPopupText7").css({
      position: "relative",
      top: "-3px"
    });
    $(".popup1Img2").hide();
    $(".popup1Img3").hide();
    $(".popup1Img4").hide();
    $(".popup1Img5").show();
    $(".popup1Img6").hide();
  });
  $(".avatarPopup1 :nth-child(9)").on("click", function() {
    $(".avatarPopupText3").css({
      top: "32px",
      left: "7%"
    });
    $(".avatarPopup1 :nth-child(9)").css({
      position: "relative",
      top: "14px",
      left: "44px"
    });
    $(".avatarPopupText8").css({
      position: "relative",
      top: "-3px"
    });
    $(".popup1Img2").hide();
    $(".popup1Img3").hide();
    $(".popup1Img4").hide();
    $(".popup1Img5").hide();
    $(".popup1Img6").show();
  });
});

$(function() {
  if (
    $(".transactioHistoryBlock1 .bankAccountBlockText6").text() ==
      "Пополнение счета" ||
    $(".transactioHistoryBlock1 .bankAccountBlockText6").text() ==
      "Реферальная программа"
  ) {
    $(".transactioHistoryBlock1 .bankAccountBlockText7").css({
      color: "#18c310"
    });
  }
  if (
    $(".transactioHistoryBlock1 .bankAccountBlockText6").text() ==
    "Вывод средств"
  ) {
    $(".transactioHistoryBlock1 .bankAccountBlockText7").css({
      color: "#ff9933"
    });
  }

  if (
    $(".transactioHistoryBlock2 .bankAccountBlockText6").text() ==
      "Пополнение счета" ||
    $(".transactioHistoryBlock2 .bankAccountBlockText6").text() ==
      "Реферальная программа"
  ) {
    $(".transactioHistoryBlock2 .bankAccountBlockText7").css({
      color: "#18c310"
    });
  }
  if (
    $(".transactioHistoryBlock2 .bankAccountBlockText6").text() ==
    "Вывод средств"
  ) {
    $(".transactioHistoryBlock2 .bankAccountBlockText7").css({
      color: "#ff9933"
    });
  }
  if (
    $(".transactioHistoryBlock3 .bankAccountBlockText6").text() ==
      "Пополнение счета" ||
    $(".transactioHistoryBlock3 .bankAccountBlockText6").text() ==
      "Реферальная программа"
  ) {
    $(".transactioHistoryBlock3 .bankAccountBlockText7").css({
      color: "#18c310"
    });
  }
  if (
    $(".transactioHistoryBlock3 .bankAccountBlockText6").text() ==
    "Вывод средств"
  ) {
    $(".transactioHistoryBlock3 .bankAccountBlockText7").css({
      color: "#ff9933"
    });
  }
  if (
    $(".transactioHistoryBlock4 .bankAccountBlockText6").text() ==
      "Пополнение счета" ||
    $(".transactioHistoryBlock4 .bankAccountBlockText6").text() ==
      "Реферальная программа"
  ) {
    $(".transactioHistoryBlock4 .bankAccountBlockText7").css({
      color: "#18c310"
    });
  }
  if (
    $(".transactioHistoryBlock4 .bankAccountBlockText6").text() ==
    "Вывод средств"
  ) {
    $(".transactioHistoryBlock4 .bankAccountBlockText7").css({
      color: "#ff9933"
    });
  }

  if (
    $(".transactioHistoryBlock5 .bankAccountBlockText6").text() ==
      "Пополнение счета" ||
    $(".transactioHistoryBlock5 .bankAccountBlockText6").text() ==
      "Реферальная программа"
  ) {
    $(".transactioHistoryBlock5 .bankAccountBlockText7").css({
      color: "#18c310"
    });
  }
  if (
    $(".transactioHistoryBlock5 .bankAccountBlockText6").text() ==
    "Вывод средств"
  ) {
    $(".transactioHistoryBlock5 .bankAccountBlockText7").css({
      color: "#ff9933"
    });
  }

  if (
    $(".transactioHistoryBlock6 .bankAccountBlockText6").text() ==
      "Пополнение счета" ||
    $(".transactioHistoryBlock6 .bankAccountBlockText6").text() ==
      "Реферальная программа"
  ) {
    $(".transactioHistoryBlock6 .bankAccountBlockText7").css({
      color: "#18c310"
    });
  }
  if (
    $(".transactioHistoryBlock6 .bankAccountBlockText6").text() ==
    "Вывод средств"
  ) {
    $(".transactioHistoryBlock6 .bankAccountBlockText7").css({
      color: "#ff9933"
    });
  }
});

$(function() {
  $(".linkText1").on("click", function() {
    $(".linkText1").hide();
    $(".transactioHistoryBlock5").show();
    $(".transactioHistoryBlock6").show();
  });
});

$(function() {
  $(".referalProgramBlockSectionImg").on("click", function() {
    $(".generalInfoContentGrey5").show();
    $("body").css("overflow-y", "hidden");
    $("html, body").animate(
      {
        scrollTop: 0
      },
      "fast"
    );
  });
});

$(function() {
  $("#closePopup").on("click", function() {
    $(".popupHideBlock").css("display", "none");
    $(".avatarPopup").css("display", "none");
  });
});
