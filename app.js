$(document).ready(function () {
  $("#text9").val(window.localStorage.getItem("9:00"));
  $("#text10").val(window.localStorage.getItem("10:00"));
  $("#text11").val(window.localStorage.getItem("11:00"));
  $("#text12").val(window.localStorage.getItem("12:00"));
  $("#text1").val(window.localStorage.getItem("1:00"));
  $("#text2").val(window.localStorage.getItem("2:00"));
  $("#text3").val(window.localStorage.getItem("3:00"));
  $("#text4").val(window.localStorage.getItem("4:00"));
  $("#text5").val(window.localStorage.getItem("5:00"));
  //get real time in hours

  var time = parseInt(moment().format("HH"));
  console.log(time);

  var currentDay = moment().format("dddd");
  console.log(currentDay);
  $("#currentDay").append(" " + currentDay);

  var timeBlock9 = $("#time9").attr("data-id");
  var timeAt9 = parseInt(timeBlock9);
  console.log(timeAt9);
  var timeBlock10 = $("#time10").attr("data-id");
  var timeAt10 = parseInt(timeBlock10);
  var timeBlock11 = $("#time11").attr("data-id");
  var timeAt11 = parseInt(timeBlock11);
  var timeBlock12 = $("#time12").attr("data-id");
  var timeAt12 = parseInt(timeBlock12);
  var timeBlock1 = $("#time1").attr("data-id");
  var timeAt1 = parseInt(timeBlock1);
  var timeBlock2 = $("#time2").attr("data-id");
  var timeAt2 = parseInt(timeBlock2);
  var timeBlock3 = $("#time3").attr("data-id");
  var timeAt3 = parseInt(timeBlock3);
  var timeBlock4 = $("#time4").attr("data-id");
  var timeAt4 = parseInt(timeBlock4);

  //This area is for all the save buttons - event listeners
  $("#saveBtn9").on("click", function (e) {
    e.preventDefault();
    var input9 = $("#text9").val();
    window.localStorage.setItem("9:00", input9);
  });

  $("#saveBtn10").on("click", function (e) {
    e.preventDefault();
    var input10 = $("#text10").val();
    window.localStorage.setItem("10:00", input10);
  });

  $("#saveBtn11").on("click", function (e) {
    e.preventDefault();
    var input11 = $("#text11").val();
    window.localStorage.setItem("11:00", input11);
  });

  $("#saveBtn12").on("click", function (e) {
    e.preventDefault();
    var input12 = $("#text12").val();
    window.localStorage.setItem("12:00", input12);
  });

  $("#saveBtn1").on("click", function (e) {
    e.preventDefault();
    var input1 = $("#text1").val();
    window.localStorage.setItem("1:00", input1);
  });

  $("#saveBtn2").on("click", function (e) {
    e.preventDefault();
    var input2 = $("#text2").val();
    window.localStorage.setItem("2:00", input2);
  });

  $("#saveBtn3").on("click", function (e) {
    e.preventDefault();
    var input3 = $("#text3").val();
    window.localStorage.setItem("3:00", input3);
  });

  $("#saveBtn4").on("click", function (e) {
    e.preventDefault();
    var input4 = $("#text4").val();
    window.localStorage.setItem("4:00", input4);
  });

  $("#saveBtn5").on("click", function (e) {
    e.preventDefault();
    var input5 = $("#text5").val();
    window.localStorage.setItem("5:00", input5);
  });

  var textArea9 = $("#time9");
  var textArea10 = $("#time10");
  var textArea11 = $("#time11");
  var textArea12 = $("#time12");
  var textArea1 = $("#time1");
  var textArea2 = $("#time2");
  var textArea3 = $("#time3");
  var textArea4 = $("#time4");

  timeCheck(timeAt9, textArea9);
  timeCheck(timeAt10, textArea10);
  timeCheck(timeAt11, textArea11);
  timeCheck(timeAt12, textArea12);
  timeCheck(timeAt1, textArea1);
  timeCheck(timeAt2, textArea2);
  timeCheck(timeAt3, textArea3);
  timeCheck(timeAt4, textArea4);

  function timeCheck(timeAt, textarea) {
    if (timeAt < time) {
      $(textarea).attr("class", " col-7 description past");
    } else if (timeAt > time) {
      $(textarea).attr("class", " col-7 description future");
    } else {
      $(textarea).attr("class", "col-7 description present");
    }
  }
});
