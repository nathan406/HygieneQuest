$(document).ready(function () {
  //hide parts to be shown only when button is clicked
  $("#part-2").hide();
  $("#part-3").hide();
  $("#part-4").hide();
  $("#part-5").hide();
  $("#part-6").hide();
  $("#part-7").hide();
  $("#part-8").hide();
  $("#part-9").hide();

  // "btn-next-1" (which is in part 1) will go to "part-2" ... the button will also lead to id of next part
  // event listener for button
  $(".btn-next-1").on("click", function (e) {
    $("#part-2").show();

  });

  $(".btn-next-2").on("click", function (e) {
    $("#part-3").show();
    
  });

  $(".btn-next-8").on("click", function (e) {
    $("#part-9").show();
    
  });
  
});
