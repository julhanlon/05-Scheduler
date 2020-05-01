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

  var time = moment().format("h a");
  console.log(time);

  var input10 = "";
  var input11 = "";
  var input12 = "";
  var input1 = "";
  var input2 = "";
  var input3 = "";
  var input4 = "";
  var input5 = "";

  var userTime = $("#time3").attr("data-id");
  console.log(userTime);

  $("#saveBtn9").on("click", function (e) {
    //prevents the browser from refreshing
    e.preventDefault();
    var input9 = $("#text9").val();
    console.log(input9);
    window.localStorage.setItem("9:00", input9);
  });

  $("#saveBtn10").on("click", function (e) {
    //prevents the browser from refreshing
    e.preventDefault();
    input10 = $("#text10").val();
    console.log(input10);
    window.localStorage.setItem("10:00", input10);
  });

  $("#saveBtn11").on("click", function (e) {
    //prevents the browser from refreshing
    e.preventDefault();
    input11 = $("#text11").val();
    console.log(input11);
    window.localStorage.setItem("11:00", input11);
  });

  $("#saveBtn12").on("click", function (e) {
    //prevents the browser from refreshing
    e.preventDefault();
    input12 = $("#text12").val();
    console.log(input12);
    window.localStorage.setItem("12:00", input12);
  });

  $("#saveBtn1").on("click", function (e) {
    //prevents the browser from refreshing
    e.preventDefault();
    input1 = $("#text1").val();
    console.log(input1);
    window.localStorage.setItem("1:00", input1);
  });

  $("#saveBtn2").on("click", function (e) {
    //prevents the browser from refreshing
    e.preventDefault();
    input2 = $("#text2").val();
    console.log(input2);
    window.localStorage.setItem("2:00", input2);
  });

  $("#saveBtn3").on("click", function (e) {
    //prevents the browser from refreshing
    e.preventDefault();
    input3 = $("#text3").val();
    console.log(input3);
    window.localStorage.setItem("3:00", input3);
  });

  $("#saveBtn4").on("click", function (e) {
    //prevents the browser from refreshing
    e.preventDefault();
    input4 = $("#text4").val();
    console.log(input4);
    window.localStorage.setItem("4:00", input4);
  });

  $("#saveBtn5").on("click", function (e) {
    //prevents the browser from refreshing
    e.preventDefault();
    input5 = $("#text5").val();
    console.log(input5);
    window.localStorage.setItem("5:00", input5);
  });

  timeCheck();

  function timeCheck() {
    if (userTime < time) {
      $(".description").attr("style", ".past");
    }
    if (userTime > time) {
      $(".description").attr("style", ".future");
    } else {
      $(".description").attr("style", ".present");
    }
  }
});
